import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import Tabs from '-components/CustomTabs/CustomTabs.jsx'
import Table from '-components/Table/Table.jsx'
import { withStyles } from "@material-ui/core";
import * as utils from '-utils'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import dayjs, {Dayjs} from 'dayjs'
import HeatMap from 'react-heatmap-grid'

const styles = {
    hotMapTitle: {
        marginTop: 16,
        fontSize: 20,
        color: '#333',
    },
    monthLabelsContainer: {
        width: 900,
        display: 'flex',
        textAlign: 'center',
        color: '#8e24aa',
        fontWeight: '400',
        marginBottom: 6
    },
    monthLabel: {
        flex: 1
    }
}
class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            selectedTabIndex: 0
        }
    }

    tapTab = tabIndex => {
        this.setState({ selectedTabIndex: tabIndex }, () => {
            this.refresh()
            // this.refershMonthSchedule()
        })
    }

    refresh = () => {
        const refreshFunc = [
            this.refershMonthSchedule,
            this.refreshMonthSale,
            this.refreshDayHotMap
        ]
        refreshFunc[this.state.selectedTabIndex] && refreshFunc[this.state.selectedTabIndex]()
    }

    handleDateChange = date => {
        this.setState({ date }, () => {
            // this.refershMonthSchedule()
            this.refresh()
        })
    }

    refreshDayHotMap = () => {
        const dateRange = utils.getYearStartEnd(this.state.date)
        const params = {
            start: dateRange.start,
            end: dateRange.end,
            count: 'coach_id,date'
        }
        this.props.actions.loadGymScheduleCount(
            this.props.selectedGym.id,
            params
        )
    }

    refershMonthSchedule = () => {
        const dateRange = utils.getYearStartEnd(this.state.date)
        const params = {
            start: dateRange.start,
            end: dateRange.end,
            count: 'coach_id,month(date)'
        }
        this.props.actions.loadGymScheduleCount(
            this.props.selectedGym.id,
            params
        )
    }

    refreshMonthSale = () => {
        const dateRange = utils.getYearStartEnd(this.state.date)
        const params = {
            start: dateRange.start,
            end: dateRange.end
        }
        this.props.actions.loadGymOrders(
            this.props.selectedGym.id,
            params
        )
    }

    groupOrderByMonth = (orders) => {
        const baseRow = {
            orderCount: 0,
            courseCount: 0,
            totalPrice: 0,
            bonusOrderCount: 0
        }
        const ret = utils.range(1,13).map(month => {
            return {
                month: month + '月',
                ...baseRow
            }
        })

        orders.forEach(order => {
            const month = parseInt(dayjs(order.created_at).format('MM'))
            if(!order.course_amount){
                return
            }
            if(order.price === 0) {
                ret[month-1].bonusOrderCount ++
            } else {
                ret[month-1].courseCount += order.course_amount
                ret[month-1].orderCount ++
            }
            ret[month-1].totalPrice += order.price
        })

        const sumRow = {
            month: '总计',
            ...baseRow
        }
        ret.forEach( row =>  {
            sumRow.orderCount += row.orderCount
            sumRow.courseCount += row.courseCount
            sumRow.totalPrice += row.totalPrice
            sumRow.bonusOrderCount += row.bonusOrderCount
        })

        return [...ret.map(item => Object.values(item)), Object.values(sumRow)]
    }

    getMonthSaleTab = () => {
       const headers = ['月份', '订单数量', '课程数量', '订单总价', '赠送课程数量']
       const tableData = this.groupOrderByMonth(this.props.gym.report.orders)

       return (
        <Table
            classes={{ tableResponsive: 'no-margin-top' }}
            tableHeaderColor='primary'
            tableHead={headers}
            tableData={tableData}
        />)
    }
    getDayHotMap = () => {
        const sumMappedWithDate = {}
        const sumMappedWithDatePerCoach = {}
        this.props.gym.report.scheduleCountByDate.forEach(row => {
            // handle gym statistic
            if(!sumMappedWithDate[row.date]) {
                sumMappedWithDate[row.date] = 0
            }
            sumMappedWithDate[row.date] += row.course_amount
            // handle coach statistic
            if(!sumMappedWithDatePerCoach[row.coach.user.name]) {
                sumMappedWithDatePerCoach[row.coach.user.name] = []
            }
            if(!sumMappedWithDatePerCoach[row.coach.user.name][row.date]) {
                sumMappedWithDatePerCoach[row.coach.user.name][row.date] = 0
            }
            sumMappedWithDatePerCoach[row.coach.user.name][row.date] += row.course_amount
        })
        const hotmapPerCoach = Object.keys(sumMappedWithDatePerCoach)
            .map(coach => this.generateDayHotMap(coach, sumMappedWithDatePerCoach[coach]))
        return [
            this.generateDayHotMap('总计', sumMappedWithDate),
            ...hotmapPerCoach
        ]
    }

    generateDayHotMap = (title, mappedWithDate) => {
        const {start, end} = utils.getYearStartEnd(this.state.date)
        const xLabels = new Array(53).fill('')
        const yLabels = new Array(7).fill('')

        const data = utils.range(0, 7).map( () => [])
        let startDay = dayjs(start)
        let i = 0
        while(i< 53 * 7){
           const dayStr = startDay.add(i, 'day').format('YYYY-MM-DD')
           const courseCount = mappedWithDate[dayStr] ? mappedWithDate[dayStr] : 0
           data[i%7].push(courseCount)
           i ++
        }
        const monthLabels = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        return <React.Fragment>
            <p className={this.props.classes.hotMapTitle}>{title}</p>
            <div className={this.props.classes.monthLabelsContainer}>
                {monthLabels.map( m => <div key={m} className={this.props.classes.monthLabel}>{m}</div> )}
            </div>
            <HeatMap
                background={'#8e24aa'}
                height={16}
                squares
                yLabelWidth={0}
                xLabelWidth={24}
                xLabels={xLabels}
                yLabels={yLabels}
                data={data}
                cellStyle={(background, value, min, max, data, x, y) => {
                    const style = { 'maxWidth': '20px', background: '#ececec', 'borderRadius': '2px' }
                    if(value) {
                        return { ...style,
                            background: background,
                            opacity: value / (max - min)
                        }
                    }
                    return style
                }}
            />
            </React.Fragment>
    }

    getMonthScheduleTab = () => {
        let coaches = Object.keys(this.props.gym.report.scheduleCountByMonthPerCoachOfYear)
        let headers = ['月份', ...coaches, '总计']
        let tableData = utils.range(1,13).map( month => {
            const data = this.props.gym.report.scheduleCountByMonthPerCoachOfYear
            const byCoaches = coaches.map( coach => data[coach][month] ? data[coach][month] : 0 )
            const sum = byCoaches.reduce((a, b) => a + b, 0)
            const monthName = month + '月'
            return [monthName, ...byCoaches, sum]
        })
        // add the sum row
        const lastRow = ['总计']
        let total = 0
        coaches.forEach( coach => {
            const data = this.props.gym.report.scheduleCountByMonthPerCoachOfYear
            const coachSum = data[coach].reduce((a, b) => a + b, 0)
            total += coachSum
            lastRow.push(coachSum)
        })
        lastRow.push(total)
        tableData.push(lastRow)

        return (
            <Table
                classes={{ tableResponsive: 'no-margin-top' }}
                tableHeaderColor='primary'
                tableHead={headers}
                tableData={tableData}
            />
        )
    }

    componentWillMount() {
        this.refershMonthSchedule()
    }

    render() {
        const dateSelector = (
            <MuiPickersUtilsProvider utils={DayjsUtils} locale={'zh-cn'}>
                <DatePicker
                    format='YYYY'
                    className='report-month-selector'
                    openTo='year'
                    views={['year']}
                    value={this.state.date}
                    onChange={this.handleDateChange}
                />
            </MuiPickersUtilsProvider>
        )

        return (
            <Tabs
                title={dateSelector}
                headerColor='primary'
                onSwitch={this.tapTab}
                tabs={[
                    {
                        tabName: '月度耗课',
                        tabContent: this.getMonthScheduleTab()
                    },
                    {
                        tabName: '月度销售',
                        tabContent: this.getMonthSaleTab()
                    },
                    {
                        tabName: '深度分析',
                        tabContent: this.getDayHotMap()
                    }
                ]}
            />
        )
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

const LinkedHistory = connect(
    mapStoreToProps,
    mapDispatchToProps
)(History)

export default withStyles(styles)(LinkedHistory)
