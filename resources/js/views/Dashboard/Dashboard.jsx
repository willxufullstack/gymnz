import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import PropTypes from 'prop-types'
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Add from '@material-ui/icons/Add'
// core components
import CustomerSelectionDialogue from '-components/CustomDialogues/CustomerSelectionDialogue'
import * as utils from '-utils'
import dayjs from 'dayjs'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import classnames from 'classnames'
import Confirmation from '-components/CustomDialogues/Confirmation'
import '../../../sass/gymdayview.scss'
import 'dayjs/locale/zh-cn'
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Avatar
} from '@material-ui/core'
import DayjsUtils from '@date-io/dayjs'
import i18N from '../../lang'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Titlebar from '../../components/TitleBar/Titlebar'
import DotBadge from '../../components/DotBadge/DotBadge'
import CalendarStyleDatepicker from '../../components/CalendarStyleDatePicker/CalendarStyleDatePicker'
import RoundButton from '../../components/RoundButton/RoundButton'

const L = i18N('Dashboard')

const dashboardStyle = {
    headerContainer: {
        display: 'flex',
        alignItems: 'center'
    }
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: new Date(),
            scheduleActionConfirmationParams: null,
            showCustomerSelection: null,
            scheduleDetailModal: null
        }
    }

    handleDateChange = selectedDate => {
        this.setState({ selectedDate }, () => {
            this.refreshTodaySale(selectedDate)
            this.props.actions.LoadGymSchedule(this.props.selectedGym.id, {
                date: dayjs(selectedDate).format('YYYY-MM-DD'),
                price: 1
            })
            // get tomorrow schedules
            this.props.actions.LoadGymScheduleTomorrow(
                this.props.selectedGym.id,
                {
                    date: dayjs(selectedDate)
                        .add(1, 'day')
                        .format('YYYY-MM-DD'),
                    price: 1
                }
            )
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            nextProps.selectedGym.id &&
            nextProps.selectedGym.id !== this.props.selectedGym.id
        ) {
            this.props.actions.loadCoach(nextProps.selectedGym.id)
            this.props.actions.loadCustomer(nextProps.selectedGym.id)
            this.reloadSchedule()
        }
        return true
        // return nextProps.gym !== this.props.gym || this.state.showDeleteConfirmation !== nextState.showDeleteCoachConfirmation;
    }

    componentWillMount() {
        if (this.props.selectedGym.id) {
            this.props.actions.loadCoach(this.props.selectedGym.id)
            // this.props.actions.loadCustomer(this.props.selectedGym.id)
            this.reloadSchedule()
        }
    }

    componentWillUnmount() {
        // close dialogue when leaving
        this.props.actions.cancelNewOrder()
    }

    refreshTodaySale = selectedDate => {
        const dateRange = utils.getDayStartEnd(selectedDate)
        const params = {
            start: dateRange.start,
            end: dateRange.end
        }
        this.props.actions.loadGymOrders(this.props.selectedGym.id, params)
    }

    reloadSchedule = () => {
        this.handleDateChange(this.state.selectedDate)
    }

    onTapCancelSchedule = schedule => e => {
        e.stopPropagation()
        this.setState({
            scheduleActionConfirmationParams: {
                onCancel: () => {
                    this.setState({ scheduleActionConfirmationParams: null })
                },
                onConfirm: () => {
                    this.setState({ scheduleActionConfirmationParams: null })
                    this.props.actions
                        .deleteSchedule(schedule.gym_id, schedule.id)
                        .then(this.reloadSchedule)
                },
                cancelText: '返回',
                message: L.cancelConfirm
            }
        })
    }

    onTapCompleteSchedule = schedule => e => {
        e.stopPropagation()
        this.setState({
            scheduleActionConfirmationParams: {
                onCancel: () => {
                    this.setState({ scheduleActionConfirmationParams: null })
                },
                onConfirm: () => {
                    this.setState({ scheduleActionConfirmationParams: null })
                    this.props.actions
                        .completeSchedule(schedule.gym_id, schedule.id)
                        .then(this.reloadSchedule)
                },
                message: L.doneConfirm
            }
        })
    }

    onTapScheduleDetails = schedule => {
        this.setState({ scheduleDetailModal: schedule })
    }

    scheduleDetailCard = detail => {
        const { classes } = this.props
        const actions = detail.filter(t => {
            return t.contenttype === 'action'
        })
        if (!actions || !actions.length) {
            return
        }
        return (
            <List>
                {actions.map(item => (
                    //卧推 3 组 * 10个 100kg 休息 30s
                    <ListItem
                        className={classes.scheduleDetail}
                        key={`${item.sortIndex}`}
                    >
                        <ListItemText
                            className={classes.scheduleDetailName}
                            primary={item.name}
                        />
                        <ListItemText
                            className={classes.scheduleDetailValue}
                            primary={
                                item.set_times +
                                '组 * ' +
                                item.repeat_times +
                                item.unit +
                                '*' +
                                item.weight
                            }
                        />
                        <ListItemText
                            className={classes.scheduleDetailInterval}
                            primary={' 休息 ' + item.interval}
                        />
                    </ListItem>
                ))}
            </List>
        )
    }

    scheduleDetailsDialog = () => {
        const onCancel = () => {
            this.setState({ scheduleDetailModal: null })
        }
        const detail = JSON.parse(this.state.scheduleDetailModal.detail)
        let scheduleTitleItem = detail.find(o => o.contenttype === 'comments')
        if (!detail || !detail.length) {
            return
        }
        return (
            <Dialog
                open={true}
                onClose={onCancel}
                scroll={'paper'}
                fullWidth={true}
            >
                <DialogTitle>
                    <Titlebar
                        label={
                            scheduleTitleItem
                                ? scheduleTitleItem['comments']
                                : ''
                        }
                    />
                </DialogTitle>
                <DialogContent dividers={true}>
                    {this.scheduleDetailCard(detail)}
                </DialogContent>
            </Dialog>
        )
    }

    tapNewOrder = () => {
        this.props.actions.showNewOrder()
    }

    newOrderDialog = () => {
        const fields = {
            onCancel: () => {
                this.props.actions.cancelNewOrder()
            },
            onSave: data => {
                this.props.actions.createOrder(data).then(() => {
                    // reload customer when success
                    this.props.actions.loadCustomer(this.props.selectedGym.id)
                })
            },
            open: this.props.gym.showNewOrder,
            subtitle: this.props.selectedGym.name,
            title: L.createOrder,
            dialogue: true,
            inputFields: [
                {
                    name: 'coach',
                    label: L.coach,
                    options: this.props.gym.coaches.map(coach => {
                        return { value: coach.id, label: coach.user.name }
                    })
                },
                {
                    name: 'source',
                    label: '来源',
                    options: [
                        { value: '团购', label: '团购' },
                        { value: '介绍', label: '介绍' },
                        { value: '续课', label: '续课' },
                        { value: '赠送', label: '赠送' },
                        { value: '其他', label: '其他' }
                    ]
                },
                {
                    name: 'customer_phone',
                    label: '客户',
                    type: 'customer',
                    customers: this.props.gym.customers,
                    columns: { name: 'name', sex: 'sex', phone: 'phone', birthday: 'birthday' }
                },
                {
                    name: 'duration',
                    label: L.duration,
                    type: 'number'
                },
                {
                    name: 'amount',
                    value: '',
                    type: 'number',
                    label: L.amount
                },
                {
                    name: 'price',
                    label: 'Price',
                    type: 'number',
                    label: L.price
                },

                {
                    name: 'gym',
                    value: this.props.selectedGym.id,
                    hide: true
                }
            ]
        }
        return <CreateNewDialogue {...fields} />
    }
    getWorkingHours = () => {
        return {
            min:
                this.props &&
                this.props.setting &&
                this.props.setting.workingHours &&
                this.props.setting.workingHours.min
                    ? this.props.setting.workingHours.min
                    : 28,
            max:
                this.props.setting &&
                this.props.setting.workingHours &&
                this.props.setting.workingHours.max
                    ? this.props.setting.workingHours.max
                    : 96
        }
    }
    getTimeAxisColumn = () => {
        const workhours = this.getWorkingHours()
        return (
            <List className="gym-day-view-body-hour-axis">
                {utils.getTimeRange(workhours.min, workhours.max + 1).map(t => (
                    <ListItem className="time-slot" key={t}>
                        {t[3] === '0' && t[4] === '0' ? t : ' '}
                    </ListItem>
                ))}
            </List>
        )
    }

    onTapTimeSlot = (schedule, coach, start) => {
        let isOverlap = (schedule, start) => {
            const end = start + 3
            if (end >= schedule.start && end < schedule.end) {
                return true
            }
            if (start >= schedule.start && start <= schedule.end) {
                return true
            }
            return false
        }
        // skip when the time slot overlap with existing schedules
        if (
            this.props.gym.schedules.filter(
                s => coach.id === s.coach_id && isOverlap(s, start)
            ).length
        ) {
            // show schedule detail
            this.onTapScheduleDetails(schedule[0])
        } else {
            // show new order dialog
            const hideDialog = () =>
                this.setState({ showCustomerSelection: null })
            this.setState({
                showCustomerSelection: {
                    customers: this.props.gym.customers,
                    onCancel: hideDialog,
                    title: `${coach.user.name}`,
                    time: `${utils.getTimeStr(start)}`,
                    onSelect: c => {
                        let params = {
                            customer: c.id,
                            gym: this.props.selectedGym.id,
                            coach: coach.id,
                            start: start,
                            end: start + 3,
                            date: dayjs(this.state.selectedDate).format(
                                'YYYY-MM-DD'
                            )
                        }
                        this.props.actions
                            .createSchedule(params.gym, params)
                            .then(() => {
                                hideDialog()
                                this.reloadSchedule()
                            })
                    }
                }
            })
        }
    }

    getCoachDayColumn = c => {
        let schedules = this.props.gym.schedules.filter(
            s => s.coach.id === c.id
        )
        let sealed = {}
        let desc = {}
        let avatar = {}
        let actions = {}
        let scheduleList = {}
        schedules.forEach(s => {
            let suffix = ''

            actions[s.end] = [
                <RoundButton
                    className="schedule-action"
                    key="cancel"
                    label={L.cancel}
                    color={s.status === 2 ? '#8B8B8B' : '#29aa99'}
                    fontSize={12}
                    variant={'outline'}
                    onClick={this.onTapCancelSchedule(s)}
                />
            ]

            if (s.status === 2) {
                suffix = ' done'
            } else {
                actions[s.end].push(
                    <RoundButton
                        className="schedule-action"
                        key="complete"
                        label={L.done}
                        color={'#29aa99'}
                        fontSize={12}
                        onClick={this.onTapCompleteSchedule(s)}
                    />
                )
            }

            utils.range(s.start, s.end).forEach(i => {
                sealed[i] = '-x' + suffix
                scheduleList[i] = [s]
            })
            sealed[s.start] = '-start' + suffix
            desc[s.start] = s.customer.name
            sealed[s.end] = '-end' + suffix
            avatar[s.start] = s.customer.avatar
        })

        const workhours = this.getWorkingHours()
        return (
            <div key={c.id} className="gym-day-view-body-col">
                <List>
                    {utils.range(workhours.min, workhours.max + 1).map(t => {
                        let borderCls = 'none'
                        let timeStr = utils.getTimeStr(t)
                        let s = scheduleList[t]
                        if (timeStr.split(':')[1] === '00') {
                            borderCls = 'solid'
                        }
                        if (timeStr.split(':')[1] === '30') {
                            borderCls = 'dot'
                        }
                        let scheduleSlotCls = sealed[t]
                            ? 'schedule-slot' + sealed[t]
                            : 'schedule-slot'
                        return (
                            <ListItem
                                onClick={() => {
                                    this.onTapTimeSlot(s, c, t)
                                }}
                                key={t}
                                className={classnames(
                                    'time-slot',
                                    borderCls,
                                    scheduleSlotCls
                                )}
                            >
                                <span className="schedule-desc">
                                    {avatar[t] && (
                                        <Avatar
                                            src={avatar[t]}
                                            style={{
                                                borderWidth: 2,
                                                borderStyle: 'solid',
                                                borderColor: '#89ECC2',
                                                width: 14,
                                                height: 14,
                                                marginRight: 8
                                            }}
                                        />
                                    )}
                                    {desc[t]}
                                </span>
                                {actions[t]}
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        )
    }

    nextDay = () => {
        const nextDay = dayjs(this.state.selectedDate).add(1, 'day')
        this.handleDateChange(nextDay)
    }

    prevDay = () => {
        const prevDay = dayjs(this.state.selectedDate).add(-1, 'day')
        this.handleDateChange(prevDay)
    }

    getGymDayOverView = () => {
        const courseCount = coach =>
            this.props.gym.schedules.filter(s => s.coach.id === coach.id).length
        return (
            <div className="gym-day-view-container">
                <div className="gym-day-view-header">
                    <div className="gym-day-view-date-picker">
                        <MuiPickersUtilsProvider
                            utils={DayjsUtils}
                            locale={'zh-cn'}
                        >
                            <DatePicker
                                format="YYYY/MM/DD"
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                autoOk
                                TextFieldComponent={({ onClick, value }) => (
                                    <CalendarStyleDatepicker
                                        date={value}
                                        onClick={onClick}
                                        setDate={newDate => {
                                            this.handleDateChange(newDate)
                                        }}
                                    />
                                )}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="gym-day-view-coaches">
                        {this.props.gym.coaches
                            .filter(coach => !coach.hidden)
                            .map(c => {
                                return (
                                    <div className="coach-column" key={c.id}>
                                        <span className="coach-name">
                                            {c.user.name}
                                        </span>
                                        {courseCount(c) !== 0 && (
                                            <span
                                                className={classnames(
                                                    'coach-course-count',
                                                    courseCount(c) >= 5 && 'red'
                                                )}
                                            >
                                                {courseCount(c)}
                                            </span>
                                        )}
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <div className="gym-day-view-body-container">
                    {this.getTimeAxisColumn()}
                    <div className="gym-day-view-body-cols">
                        {this.props.gym.coaches
                            .filter(coach => !coach.hidden)
                            .map(c => this.getCoachDayColumn(c))}
                    </div>
                </div>
            </div>
        )
    }

    getColoredBadge = ({}) => {}

    getSummaryHeader = () => {
        const { classes } = this.props
        return (
            <div className={classes.headerContainer}>
                <Titlebar label={'日程'} />
                <IconButton
                    disableRipple
                    size="small"
                    color="primary"
                    className="add-order"
                    onClick={this.tapNewOrder}
                >
                    <Add />
                </IconButton>
                <DotBadge
                    label={'今日课程'}
                    color={'green'}
                    value={
                        this.props.gym.schedules &&
                        this.props.gym.schedules.length + ' 节'
                    }
                />
                <DotBadge
                    label={'课程总价'}
                    color={'red'}
                    value={
                        Math.floor(
                            this.props.gym.schedules.reduce(
                                (prev, cur) => prev + (cur.price || 0),
                                0
                            )
                        ) + ' 元'
                    }
                />
                <DotBadge
                    label={'明日课程'}
                    color={'purple'}
                    value={
                        this.props.gym.schedulesTomorrow &&
                        this.props.gym.schedulesTomorrow.length + ' 节'
                    }
                />
                <DotBadge
                    label={'今日销售'}
                    color={'yellow'}
                    value={
                        Math.floor(
                            this.props.gym.report.orders.reduce(
                                (prev, cur) => prev + cur.price,
                                0
                            )
                        ) + ' 元'
                    }
                />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.newOrderDialog()}
                {this.state.scheduleDetailModal && this.scheduleDetailsDialog()}
                {!!this.state.showCustomerSelection && (
                    <CustomerSelectionDialogue
                        open={true}
                        {...this.state.showCustomerSelection}
                    />
                )}
                <Confirmation
                    open={!!this.state.scheduleActionConfirmationParams}
                    {...this.state.scheduleActionConfirmationParams}
                />
                {this.getSummaryHeader()}
                {this.getGymDayOverView()}
            </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStoreToProps = store => {
    return {
        selectedGym: store.setting.selectedGym,
        setting: store.setting.selectedGym.setting,
        gym: store.gym
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const LinkedDashboard = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Dashboard)

export default withStyles(dashboardStyle)(LinkedDashboard)
