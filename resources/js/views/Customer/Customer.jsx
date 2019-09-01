import '../../../sass/customer.scss'
import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import Paper from '@material-ui/core/Paper'
import Tabs from '-components/CustomTabs/CustomTabs.jsx'
import Table from '-components/Table/Table.jsx'
import Scheduling from './Scheduling'
import CustomerDataSection from './CustomerDataSection'
import CustomerPhotoSection from './CustomerPhotoSection'
import Badge from '@material-ui/core/Badge'
import * as utils from '-utils'
import 'dayjs/locale/zh-cn'
import Button from '-components/CustomButtons/Button.jsx'
import Confirmation from '-components/CustomDialogues/Confirmation'
import CreateNewDialogue from '../../components/CustomDialogues/CreateNewDialogue'
import i18N from '../../lang'

const L = i18N('Customer')
class Customer extends React.Component {
    constructor(props) {
        super(props)
        this.customerId = parseInt(this.props.match.params.id)
        this.state = {
            cancelSchedule: null,
            refundDialogue: false
        }
    }

    showCancelConfirmation = schedule => {
        this.setState({ cancelSchedule: schedule })
    }

    hideCancelConfirmation = () => {
        this.setState({ cancelSchedule: null })
    }

    cancelSchedule = () => {
        this.props.actions.deleteSchedule(
            this.props.selectedGym.id,
            this.state.cancelSchedule.id
        )
        this.setState({ cancelSchedule: null })
    }

    completeSchedule = schedule => {
        this.props.actions.completeSchedule(schedule.gym_id, schedule.id)
    }

    tapRefund = order => {
        this.setState({ refundDialogue: order })
    }

    refundOrder = (data, order) => {
        this.props.actions.refundOrder(order, data).then(() => {
            this.setState({ refundDialogue: false })
            this.props.actions.loadCustomerOrders(this.customerId, {
                gym: this.props.selectedGym.id
            })
        })
    }

    getRefundDialogue = order => {
        let params = {
            dialogue: true,
            title: L.refund,
            onSave: data => this.refundOrder(data, order),
            onCancel: () => {
                this.setState({ refundDialogue: false })
            },
            subtitle: L.refundSubTitle,
            inputFields: [
                {
                    name: 'amount',
                    label: L.amount,
                    type: 'number'
                },
                {
                    name: 'reason',
                    label: L.reason
                }
            ]
        }

        return <CreateNewDialogue {...params} />
    }

    getBookTab = () => {
        return <Scheduling {...this.props} customerId={this.customerId} />
    }

    getOrdersTab = () => {
        let orders = this.props.gym.customerPage.orders
        if (!orders) {
            return <p>No Orders</p>
        }
        let header = [
            L.price,
            L.bookedTotal,
            L.coach,
            L.created,
            L.status,
            L.action
        ]
        let tableData = orders.map(r => {
            const btn = (
                <Button
                    onClick={() => this.tapRefund(r)}
                    size='sm'
                    color='transparentGray'
                >
                    {L.refund}
                </Button>
            )
            return [
                r.price + '',
                r.booked_amount + ' / ' + r.course_amount,
                r.coach.user.name,
                r.created_at,
                utils.getOrderStatus(r.status),
                r.status === 1 ? btn : '--'
            ]
        })

        return (
            <Table
                classes={{ tableResponsive: 'no-margin-top' }}
                tableHeaderColor='primary'
                tableHead={header}
                tableData={tableData}
            />
        )
    }

    componentWillMount() {
        this.props.actions.loadCustomerBodyDataOptions()
    }

    getUnfinishedTab = () => {
        let booked = this.props.gym.customerPage.schedules.booked
        if (!booked) {
            return <p>{L.noUnfinished}</p>
        }
        let header = [L.date, L.time, L.coach, L.action]
        let cancelBtn = s => (
            <Button
                size='sm'
                color='transparentGray'
                onClick={() => this.showCancelConfirmation(s)}
            >
                {L.cancel}
            </Button>
        )
        let completeBtn = s => (
            <Button
                size='sm'
                color='transparentPrimary'
                onClick={() => this.completeSchedule(s)}
            >
                {L.complete}
            </Button>
        )
        let tableData = booked.map(r => [
            r.date,
            utils.getTimeStr(r.start),
            r.coach.user.name,
            <React.Fragment>
                {completeBtn(r)} {cancelBtn(r)}
            </React.Fragment>
        ])

        return (
            <Table
                classes={{ tableResponsive: 'no-margin-top' }}
                tableHeaderColor='primary'
                tableHead={header}
                tableData={tableData}
            />
        )
    }

    getDataTab = () => {
        return (
            <CustomerDataSection
                options={this.props.gym.customerPage.bodyDataOptions}
                data={this.props.gym.customerPage.bodyData}
                actions={this.props.actions}
                customerId={this.customerId}
            />
        )
    }

    getPhotoTab = () => {
        return (
            <CustomerPhotoSection
                {...this.props}
                actions={this.props.actions}
                customerId={this.customerId}
            />
        )
    }

    tapTab = tabIndex => {
        switch (tabIndex) {
            case 0:
                break
            case 1:
                this.props.actions.loadCustomerOrders(this.customerId, {
                    gym: this.props.selectedGym.id
                })
                break
            default:
                break
        }
    }

    render() {
        let { booked, total } = this.props.gym.customerPage.customerBalance
        let unfinishedTabHeader = (
            <Badge
                className='tab-badge'
                color='secondary'
                badgeContent={
                    this.props.gym.customerPage.schedules.booked.length
                }
            >
                {L.unfinished}
            </Badge>
        )
        let confirmationParams = {
            message: L.cancelConfirm,
            onCancel: this.hideCancelConfirmation,
            onConfirm: this.cancelSchedule
        }
        return (
            <React.Fragment>
                {this.state.cancelSchedule && (
                    <Confirmation {...confirmationParams} />
                )}
                {this.state.refundDialogue &&
                    this.getRefundDialogue(this.state.refundDialogue)}
                <Paper square>
                    <Tabs
                        title={booked + '/' + total}
                        headerColor='primary'
                        onSwitch={this.tapTab}
                        tabs={[
                            {
                                tabName: L.book,
                                tabContent: this.getBookTab()
                            },
                            {
                                tabName: L.orders,
                                tabContent: this.getOrdersTab()
                            },
                            {
                                tabName: unfinishedTabHeader,
                                tabContent: this.getUnfinishedTab()
                            },
                            {
                                tabName: L.data,
                                tabContent: this.getDataTab()
                            },
                            {
                                tabName: L.photo,
                                tabContent: this.getPhotoTab()
                            }
                        ]}
                    />
                </Paper>
            </React.Fragment>
        )
    }
}

const mapStoreToProps = store => {
    return {
        selectedGym: store.setting.selectedGym,
        gym: store.gym,
        setting: store.setting
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const LinkedCustomer = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Customer)

export default LinkedCustomer
