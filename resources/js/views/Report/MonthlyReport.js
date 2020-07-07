import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
// react plugin for creating charts
import SearchableTable from '../../components/SearchableTable/SearchableTable'
import * as utils from '-utils'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import i18N from '../../lang'
import DotBadge from '../../components/DotBadge/DotBadge'
import Titlebar from '../../components/TitleBar/Titlebar'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ExpandMore from '@material-ui/icons/ExpandMore'
import dayjs from 'dayjs'
import Panel from '../../components/Panel/Panel'

const L = i18N('MonthlyReport')
const styles = {
    filterItem: {
        maxWidth: 150,
        marginLeft: 24,
        marginTop: 8
    },
    filterTitle: {
        width: 60,
        lineHeight: '12px',
        textAlign: 'left',
        fontSize: 12,
        color: '#999'
    },
    filterDropdownIcon: {
        marginLeft: 6
    },
    panel: {
        flex: 1,
        maxHeight: 400,
        padding: 12,
        margin: 12,
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column'
    },
    panelTable: {
        flex: 1,
        display: 'flex',
        overflow: 'scroll'
    }
}
class MonthlyReport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            selectedTabIndex: 0
        }
        this.refreshFunMap = [
            () => {
                let params = utils.getMonthStartEnd(this.state.date)
                // only include the completed class
                params.status = 2
                this.props.actions.loadGymSummary(
                    this.props.selectedGym.id,
                    params
                )
            },
            this.loadSale, // refresh sale
            () => {
                //refresh coach
                let params = utils.getMonthStartEnd(this.state.date)
                params.count = 'coach_id'
                params.status = 2
                this.props.actions.loadGymScheduleCount(
                    this.props.selectedGym.id,
                    params
                )
            },
            () => {
                //refresh customer
                let params = utils.getMonthStartEnd(this.state.date)
                params.count = 'customer_id'
                params.status = 2
                this.props.actions.loadGymScheduleCount(
                    this.props.selectedGym.id,
                    params
                )
            }
        ]
    }

    handleDateChange = date => {
        this.setState({ date }, () => {
            this.refresh()
        })
    }

    refresh = () => {
        this.refreshFunMap.forEach(refreshItem => refreshItem())
    }

    loadSale = () => {
        const month = utils.getMonthStartEnd(
            this.state.date,
            'YYYY-MM-DD HH:mm:ss'
        )
        this.props.actions.loadGymOrders(this.props.selectedGym.id, month)
    }

    getSummaryTab = () => {
        const orders = this.props.gym.report.orders.filter(o => o.price > 0)
        const bonus = this.props.gym.report.orders.filter(o => o.price === 0)
        const summary = this.props.gym.report.summary
        const { classes } = this.props
        const row = (color, label, value) => (
            <DotBadge
                color={color}
                label={label}
                value={value}
                style={{ width: 120 }}
            />
        )
        const dateSelector = () => {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>月报</span>
                    <div className={classes.filterItem}>
                        <MuiPickersUtilsProvider
                            utils={DayjsUtils}
                            locale={'zh-cn'}
                        >
                            <DatePicker
                                format="MM/YYYY"
                                TextFieldComponent={({ onClick, value }) => (
                                    <Button
                                        aria-haspopup="true"
                                        onClick={onClick}
                                        style={{
                                            fontSize: '15px',
                                            color: '#666',
                                            padding: 0,
                                            justifyContent: 'left'
                                        }}
                                    >
                                        {value}
                                        <ExpandMore
                                            fontSize="small"
                                            className={
                                                classes.filterDropdownIcon
                                            }
                                        />
                                    </Button>
                                )}
                                className={classes.dateFilter}
                                style={{
                                    maxWidth: 60,
                                    position: 'relative'
                                }}
                                openTo="month"
                                views={['year', 'month']}
                                value={this.state.date}
                                onChange={this.handleDateChange}
                                autoOk
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
            )
        }

        return (
            <div style={{ marginTop: -8 }}>
                <Titlebar label={dateSelector()}>
                    {row(
                        'green',
                        `${L.activeCustomer} / ${L.scheduleCount}`,
                        `${summary.activeCustomerCount ||
                            0} / ${summary.scheduleCount || 0}`
                    )}
                    {row(
                        'red',
                        `${L.orderCount} / ${L.orderPrice}`,
                        `${orders.length} / ${summary.orderPrice || 0}`
                    )}
                    {row(
                        'yellow',
                        '新客成交 / 体验课',
                        `${summary.newCustomerCount ||
                            0} / ${summary.trialCourseCount || 0}`
                    )}
                </Titlebar>
                <div style={{ display: 'flex' }}>
                    <Panel className={classes.panel}>
                        <Titlebar
                            fontSize={18}
                            label="教练统计"
                            description={`${summary.scheduleCount || 0}节`}
                            noVr
                            style={{ flex: 'none' }}
                        />
                        {this.getScheduleCountByCoach()}
                    </Panel>
                    <Panel className={classes.panel}>
                        <Titlebar
                            fontSize={18}
                            label="客户统计"
                            description={`${summary.activeCustomerCount ||
                                0}人`}
                            noVr
                            style={{ flex: 'none' }}
                        />
                        {this.getScheduleCountByCustomerTab()}
                    </Panel>
                </div>
                <div style={{ display: 'flex' }}>
                    <Panel className={classes.panel}>
                        <Titlebar
                            fontSize={18}
                            label="订单详情"
                            description={`${
                                orders.length
                            }单 / ${summary.orderPrice || 0}元 / ${bonus.length}赠课`}
                            noVr
                            style={{ flex: 'none' }}
                        />
                        {this.getSaleTab()}
                    </Panel>
                </div>
            </div>
        )
    }

    getSaleTab = () => {
        const orders = this.props.gym.report.orders
        const columns = [
            { title: L.price, field: 'price' },
            {
                title: L.bookedTotal,
                render: r => r.booked_amount + ' / ' + r.course_amount
            },
            { title: L.coach, render: r => r.coach.user.name },
            { title: L.customer, render: r => r.customer.name },
            { title: '来源', render: r => (r.source ? r.source : '未记录') },
            {
                title: L.created,
                render: r => dayjs(r.created_at).format('MM/DD')
            }
        ]

        return (
            <SearchableTable
                className={this.props.classes.panelTable}
                columns={columns}
                data={orders}
            />
        )
    }

    getScheduleCountByCoach = () => {
        const groups = this.props.gym.report.scheduleCountByCoach
        const orders = this.props.gym.report.orders
        const columns = [
            {
                title: L.coach,
                field: 'name'
            },
            {
                title: '耗课数',
                field: 'course_amount'
            },
            {
                title: '订单数',
                field: 'order_count'
            },
            {
                title: '订单总价',
                field: 'order_price'
            }
        ]
        const tableData = []
        const chartData = {
            labels: [],
            series: []
        }
        const grouped = {}
        groups.forEach(g => {
            if (grouped[g.coach.user.name] === undefined) {
                grouped[g.coach.user.name] = 0
            }
            grouped[g.coach.user.name] += g.course_amount
        })
        Object.keys(grouped).forEach(k => {
            tableData.push({
                name: k,
                course_amount: grouped[k],
                order_count: orders.filter(
                    order => order.price !== 0 && order.coach.user.name === k
                ).length,
                order_price: utils.sum(
                    orders.filter(order => order.coach.user.name === k),
                    'price'
                )
            })
            chartData.labels.push(k)
            chartData.series.push(grouped[k])
        })

        return (
            <SearchableTable
                className={this.props.classes.panelTable}
                columns={columns}
                data={tableData}
            />
        )
    }

    getScheduleCountByCustomerTab = () => {
        let groups = this.props.gym.report.scheduleCountByCustomer

        let columns = [
            { title: L.name, field: 'name' },
            { title: L.count, field: 'course_amount' },
            { title: '教练', field: 'coach' },
        ]

        console.log(groups);
        const getCustomerCoach = (customerId) => {
            const customer = this.props.gym.customers.find(c => c.id === customerId)
            if(customer && customer.latest_schedule){
                return customer.latest_schedule.coach.user.name
            }
            return ''
        }
        let tableData = groups.map(r => ({
            name: r.customer.name,
            course_amount: r.course_amount,
            coach: getCustomerCoach(r.customer.id)
        }))

        return (
            <SearchableTable
                className={this.props.classes.panelTable}
                columns={columns}
                data={tableData}
            />
        )
    }

    tapTab = tabIndex => {
        this.setState({ selectedTabIndex: tabIndex }, () => {
            this.refresh()
        })
    }

    componentWillMount() {
        this.refresh()
    }

    render() {
        return this.getSummaryTab()
    }
}

const mapStoreToProps = store => {
    return {
        selectedGym: store.setting.selectedGym,
        gym: store.gym
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const LinkedMonthlyReport = connect(
    mapStoreToProps,
    mapDispatchToProps
)(MonthlyReport)

export default withStyles(styles)(LinkedMonthlyReport)
