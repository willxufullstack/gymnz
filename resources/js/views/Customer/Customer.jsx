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
import { withStyles } from '@material-ui/core'
import i18N from '../../lang'

const L = i18N('Customer')

const styles = {
    tabTitle: {
        padding: '4px 20px',
        backgroundColor: '#8e24aa',
        marginBottom: 0,
        borderRadius: 20,
        fontWeight: '900',
        fontSize: 16,
        boxShadow: '2px 2px 3px 0 rgba(156, 39, 176, 0.95)'
    }
}
class Customer extends React.Component {
    constructor(props) {
        super(props)
        this.customerId = parseInt(this.props.match.params.id)
        this.state = {
            cancelSchedule: null,
            refundDialogue: false,
            modifyDialogue: false,
            splitOrderDialogue: false,
            removeOrderDialogue: false
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
    tapModify = order => {
        this.setState({ modifyDialogue: order })
    }
    tapSplit = order => {
        this.setState({ splitOrderDialogue: order })
    }
    tapRemove = order => {
        this.setState({ removeOrderDialogue: order })
    }

    refundOrder = (data, order) => {
        this.props.actions.refundOrder(order, data).then(() => {
            this.setState({ refundDialogue: false })
            this.props.actions.loadCustomerOrders(this.customerId, {
                gym: this.props.selectedGym.id
            })
        })
    }
    modifyOrder = (data, order) => {
        this.props.actions.modifyOrder(order, data).then(() => {
            this.setState({ modifyDialogue: false })
            this.props.actions.loadCustomerOrders(this.customerId, {
                gym: this.props.selectedGym.id
            })
        })
    }
    splitOrder = (data, order) => {
        this.props.actions.splitOrder(order, data).then(() => {
            this.setState({ splitOrderDialogue: false })
            this.props.actions.loadCustomerOrders(this.customerId, {
                gym: this.props.selectedGym.id
            })
        })
    }

    removeOrder = () => {
        this.props.actions
            .deleteOrder(this.state.removeOrderDialogue)
            .then(() => {
                this.setState({ removeOrderDialogue: false })
                this.props.actions.loadCustomerOrders(this.customerId, {
                    gym: this.props.selectedGym.id
                })
            })
    }

    getSplitDialogue = order => {
        let params = {
            dialogue: true,
            title: '拆分订单',
            onSave: data => {
                this.splitOrder(data, order)
            },
            onCancel: () => {
                this.setState({ splitOrderDialogue: false })
            },
            inputFields: [
                {
                    name: 'course_amount',
                    label: '转出数量',
                    type: 'number'
                },
                {
                    name: 'customer_phone',
                    label: '转入客户',
                    type: 'customer',
                    customers: this.props.gym.customers,
                    columns: {
                        name: 'customer_name',
                        sex: 'customer_sex',
                        phone: 'customer_phone'
                    }
                }
            ]
        }

        return <CreateNewDialogue {...params} />
    }

    getModifyDialogue = order => {
        let params = {
            dialogue: true,
            title: '修改',
            onSave: data => this.modifyOrder(data, order),
            onCancel: () => {
                this.setState({ modifyDialogue: false })
            },
            inputFields: [
                {
                    name: 'price',
                    label: '金额',
                    type: 'number',
                    placeholder: order.price + ''
                },
                {
                    name: 'course_amount',
                    label: '课程数量',
                    type: 'number',
                    placeholder: order.course_amount + ''
                }
            ]
        }

        return <CreateNewDialogue {...params} />
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

    getRemoveDialogue = order => {
        return (
            <Confirmation
                message={'删除仅用于误操作导致错误订单，确定要继续删除吗？'}
                onConfirm={this.removeOrder}
                onCancel={() => {
                    this.setState({ removeOrderDialogue: false })
                }}
            />
        )
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
            L.unitPrice + '/' + L.price,
            L.bookedTotal,
            L.coach,
            L.created,
            L.expiry,
            L.status,
            L.action
        ]
        let tableData = orders.map(r => {
            const btn = (
                <React.Fragment>
                    <Button
                        onClick={() => this.tapRefund(r)}
                        size="sm"
                        color="transparentGray"
                    >
                        {L.refund}
                    </Button>
                    <Button
                        onClick={() => this.tapModify(r)}
                        size="sm"
                        color="transparentGray"
                    >
                        修改
                    </Button>
                    <Button
                        onClick={() => this.tapSplit(r)}
                        size="sm"
                        color="transparentGray"
                    >
                        拆分
                    </Button>
                    {r.booked_amount === 0 && (
                        <Button
                            onClick={() => this.tapRemove(r)}
                            size="sm"
                            color="transparentGray"
                        >
                            删除
                        </Button>
                    )}
                </React.Fragment>
            )
            return [
                (r.price / r.course_amount).toFixed(0) + '/' + r.price,
                r.booked_amount + ' / ' + r.course_amount,
                r.coach.user.name,
                r.created_at.split(' ')[0],
                utils.getOrderExpiry(r),
                utils.getOrderStatus(r),
                r.status === 1 && r.course_amount > r.booked_amount ? btn : '--'
            ]
        })

        return (
            <Table
                classes={{ tableResponsive: 'no-margin-top' }}
                tableHeaderColor="primary"
                tableHead={header}
                tableData={tableData}
                strokeRow={i => orders[i].status === 2}
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
                size="sm"
                color="transparentGray"
                onClick={() => this.showCancelConfirmation(s)}
            >
                {L.cancel}
            </Button>
        )
        let completeBtn = s => (
            <Button
                size="sm"
                color="transparentPrimary"
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
                tableHeaderColor="primary"
                tableHead={header}
                tableData={tableData}
            />
        )
    }

    getFinishedTab = () => {
        let finished = this.props.gym.customerPage.schedules.finished
        if (!finished) {
            return <p>{L.noFinished}</p>
        }
        let header = [L.date, L.time, L.coach]
        let tableData = finished.map(r => [
            r.date,
            utils.getTimeStr(r.start),
            r.coach.user.name
        ])

        return (
            <Table
                classes={{ tableResponsive: 'no-margin-top' }}
                tableHeaderColor="primary"
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
        const { classes } = this.props
        let unfinishedTabHeader = (
            <Badge
                className="tab-badge"
                color="secondary"
                badgeContent={
                    this.props.gym.customerPage.schedules.booked.length
                }
            >
                {L.unfinished}
            </Badge>
        )
        let finishedTabHeader = (
            <Badge
                className="tab-badge"
                color="secondary"
                badgeContent={
                    this.props.gym.customerPage.schedules.finished.length
                }
            >
                {L.finished}
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
                {this.state.removeOrderDialogue &&
                    this.getRemoveDialogue(this.removeOrderDialogue)}
                {this.state.refundDialogue &&
                    this.getRefundDialogue(this.state.refundDialogue)}
                {this.state.modifyDialogue &&
                    this.getModifyDialogue(this.state.modifyDialogue)}
                {this.state.splitOrderDialogue &&
                    this.getSplitDialogue(this.state.splitOrderDialogue)}
                <Paper square>
                    <Tabs
                        title={
                            <div>
                                <p className={classes.tabTitle}>
                                    {booked + ' / ' + total}
                                </p>
                            </div>
                        }
                        headerColor="primary"
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
                                tabName: finishedTabHeader,
                                tabContent: this.getFinishedTab()
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

export default withStyles(styles)(LinkedCustomer)
