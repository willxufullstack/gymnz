import '../../../sass/customer.scss'
import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import CustomerDataSection from './CustomerDataSection'
import CustomerPhotoSection from './CustomerPhotoSection'
import Badge from '@material-ui/core/Badge'
import * as utils from '-utils'
import 'dayjs/locale/zh-cn'
import Confirmation from '-components/CustomDialogues/Confirmation'
import LightTabs from '-components/LightTabs/LightTabs'
import SearchableTable from '-components/SearchableTable/SearchableTable'
import CreateNewDialogue from '../../components/CustomDialogues/CreateNewDialogue'
import { withStyles } from '@material-ui/core'
import i18N from '../../lang'
import RoundButton from '../../components/RoundButton/RoundButton'

const L = i18N('Customer')

const styles = {

}
class Customer extends React.Component {
    constructor(props) {
        super(props)
        this.customerId = parseInt(this.props.match.params.id)
        this.state = {
            cancelSchedule: null,
            refundDialogue: false,
            modifyDialogue: false,
            moveScheduleDialogue: null,
            splitOrderDialogue: false,
            removeOrderDialogue: false
        }
    }

    showCancelConfirmation = schedule => {
        this.setState({ cancelSchedule: schedule })
    }

    showMoveDialogue = schedule => {
        this.setState({ moveScheduleDialogue: schedule })
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

    moveSchedule = schedule => {}

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
            col: 1,
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
            col: 1,
            onSave: data => this.modifyOrder(data, order),
            onCancel: () => {
                this.setState({ modifyDialogue: false })
            },
            inputFields: [
                {
                    name: 'source',
                    label: '来源',
                    value: order.source,
                    options: [
                        { value: '团购', label: '团购' },
                        { value: '介绍', label: '介绍' },
                        { value: '续课', label: '续课' },
                        { value: '赠送', label: '赠送' },
                        { value: '其他', label: '其他' },
                        { value: '未记录', label: '未记录' }
                    ]
                },
                {
                    name: 'price',
                    label: '金额',
                    type: 'number',
                    placeholder: order.price + '',
                    value: order.price + ''
                },
                {
                    name: 'course_amount',
                    label: '课程数量',
                    type: 'number',
                    placeholder: order.course_amount + '',
                    value: order.course_amount + ''
                },
                {
                    name: 'created_at',
                    label: '入账时间',
                    type: 'string',
                    placeholder: order.created_at + '',
                    value: order.created_at
                },
                {
                    name: 'duration',
                    label: '有效期',
                    type: 'number',
                    placeholder: order.duration + '',
                    value: order.duration + ''
                },
                {
                    name: 'expiry',
                    label: '过期时间',
                    type: 'string',
                    placeholder: order.expiry + '',
                    value: order.expiry
                }
            ]
        }

        return <CreateNewDialogue {...params} />
    }

    getMoveScheduleDialogue = () => {
        let orders = this.props.gym.customerPage.orders
        let params = {
            dialogue: true,
            title: '修改',
            col: 1,
            minHeight: 300,
            onSave: data => {
                this.props.actions
                    .updateSchedule(
                        this.state.moveScheduleDialogue.gym_id,
                        this.state.moveScheduleDialogue.id,
                        data
                    )
                    .then(() => {
                        this.props.actions.loadCustomerOrders(this.customerId, {
                            gym: this.props.selectedGym.id
                        })
                        this.props.actions.LoadCustomerSchedule(
                            this.props.selectedGym.id,
                            {
                                customer: this.state.customerId
                            }
                        )
                        this.setState({ moveScheduleDialogue: false })
                    })
            },
            onCancel: () => {
                this.setState({ moveScheduleDialogue: false })
            },
            inputFields: [
                {
                    name: 'order_id',
                    label: '订单号',
                    options: orders.map(order => {
                        return {
                            value: order.id,
                            label:
                                '#' +
                                order.id +
                                ' ' +
                                order.booked_amount +
                                '/' +
                                order.course_amount
                        }
                    }),
                    value: this.state.moveScheduleDialogue.order_id
                },
                {
                    name: 'coach_id',
                    label: '教练',
                    options: this.props.gym.coaches.map(coach => {
                        return { value: coach.id, label: coach.user.name }
                    }),
                    value: this.state.moveScheduleDialogue.coach_id
                }
            ]
        }

        return <CreateNewDialogue {...params} />
    }

    getRefundDialogue = order => {
        let params = {
            dialogue: true,
            title: L.refund,
            col: 1,
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

    getOrdersTab = () => {
        let orders = this.props.gym.customerPage.orders
        if (!orders) {
            return <p>No Orders</p>
        }
        const getDotColor = r => {
            if (utils.getOrderStatus(r) === '进行中') {
                return '#89ECC2'
            }
            if (utils.getOrderStatus(r) === '已过期') {
                return '#FF8C8C'
            }
            return '#999'
        }
        let header = [
            {
                title: '订单号',
                flex: 1,
                render: r => (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flex: 1
                        }}
                    >
                        <span
                            style={{
                                width: 6,
                                height: 6,
                                marginRight: 8,
                                borderRadius: '50%',
                                backgroundColor: getDotColor(r)
                            }}
                        />
                        <span style={{ flex: 1 }}>{'#' + r.id}</span>
                    </div>
                )
            },
            {
                title: '来源',
                flex: 1,
                render: r => (r.source ? r.source : '未记录')
            },
            {
                title: L.unitPrice + '/' + L.price,
                flex: 2,
                render: r =>
                    (r.price / r.course_amount).toFixed(0) + ' / ' + r.price
            },
            {
                title: L.bookedTotal,
                flex: 1,
                render: r => r.booked_amount + ' / ' + r.course_amount
            },
            { title: L.coach, flex: 1, render: r => r.coach.user.name },
            {
                title: L.created,
                flex: 2,
                render: r => r.created_at.split(' ')[0]
            },
            { title: L.expiry, flex: 2, render: r => utils.getOrderExpiry(r) },
            { title: L.status, flex: 1, render: r => utils.getOrderStatus(r) },
            {
                title: L.action,
                flex: 3,
                visibleOnHover: true,
                render: r =>
                    r.status === 1 && r.course_amount > r.booked_amount ? (
                        <React.Fragment>
                            <RoundButton
                                onClick={() => this.tapRefund(r)}
                                fontSize={12}
                                label={L.refund}
                                color={'#999'}
                                variant={'text'}
                            />
                            <RoundButton
                                onClick={() => this.tapModify(r)}
                                fontSize={12}
                                label={'修改'}
                                color={'#999'}
                                variant={'text'}
                            />
                            <RoundButton
                                onClick={() => this.tapSplit(r)}
                                fontSize={12}
                                label={'拆分'}
                                color={'#999'}
                                variant={'text'}
                            />
                            {r.booked_amount === 0 && (
                                <RoundButton
                                    fontSize={12}
                                    onClick={() => this.tapRemove(r)}
                                    label={'删除'}
                                    color={'#999'}
                                    variant={'text'}
                                />
                            )}
                        </React.Fragment>
                    ) : (
                        <RoundButton
                            onClick={() => this.tapModify(r)}
                            fontSize={12}
                            label={'修改'}
                            color={'#999'}
                            variant={'text'}
                        />
                    )
            }
        ]
        return <SearchableTable columns={header} data={orders} />
    }

    componentWillMount() {
        this.props.actions.loadCoach(this.props.selectedGym.id)
        this.props.actions.loadCustomerBodyDataOptions()
        this.props.actions.loadCustomerOrders(this.customerId, {
            gym: this.props.selectedGym.id
        })
        this.props.actions.LoadCustomerSchedule(this.props.selectedGym.id, {
            customer: this.customerId
        })
    }

    getUnfinishedTab = () => {
        let booked = this.props.gym.customerPage.schedules.booked
        if (!booked) {
            return <p>{L.noUnfinished}</p>
        }

        const cancelBtn = s => (
            <RoundButton
                label={L.cancel}
                color="#999"
                fontSize={12}
                variant="text"
                onClick={() => this.showCancelConfirmation(s)}
            />
        )
        const completeBtn = s => (
            <RoundButton
                label={L.complete}
                color="#29aa99"
                fontSize={12}
                onClick={() => this.completeSchedule(s)}
                style={{ marginRight: 12 }}
            />
        )
        const columns = [
            { title: L.date, field: 'date' },
            { title: L.time, render: r => utils.getTimeStr(r.start) },
            { title: L.coach, render: r => r.coach.user.name },
            {
                title: L.action,
                render: r => (
                    <React.Fragment>
                        {completeBtn(r)} {cancelBtn(r)}
                    </React.Fragment>
                )
            }
        ]

        return (
            <SearchableTable
                columns={columns}
                data={booked}
            />
        )
    }

    getFinishedTab = () => {
        let finished = this.props.gym.customerPage.schedules.finished
        if (!finished) {
            return <p>{L.noFinished}</p>
        }

        const cancelBtn = s => (
            <RoundButton
                label={L.cancel}
                color="#999"
                fontSize={12}
                variant="text"
                onClick={() => this.showCancelConfirmation(s)}
            />
        )
        const moveBtn = s => (
            <RoundButton
                label={'修改'}
                color="#29aa99"
                fontSize={12}
                variant="outline"
                style={{ marginRight: 12 }}
                onClick={() => this.showMoveDialogue(s)}
            />
        )

        let columns = [
            { title: L.date, field: 'date' },
            { title: L.time, render: r => utils.getTimeStr(r.start) },
            { title: L.coach, render: r => r.coach.user.name },
            { title: '订单号', render: r => '#' + r.order_id },
            {
                title: L.action,
                visibleOnHover: true,
                render: r => (
                    <React.Fragment>
                        {moveBtn(r)}
                        {cancelBtn(r)}
                    </React.Fragment>
                )
            }
        ]

        return (
            <SearchableTable
                columns={columns}
                data={finished}
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
    render() {
        let unfinishedTabHeader = (
            <Badge
                className="tab-badge"
                color="primary"
                variant="dot"
                invisible={!this.props.gym.customerPage.schedules.booked.length}
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
            <div>
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
                {this.state.moveScheduleDialogue && (
                    <this.getMoveScheduleDialogue />
                )}
                <LightTabs
                    title={
                        this.props.gym.customers.find(
                            c => c.id === this.customerId
                        ).name
                    }
                    onSwitch={this.tapTab}
                    tabs={[
                        {
                            tabName: L.orders,
                            tabContent: this.getOrdersTab()
                        },
                        {
                            tabName: unfinishedTabHeader,
                            tabContent: this.getUnfinishedTab()
                        },
                        {
                            tabName: L.finished,
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
            </div>
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
