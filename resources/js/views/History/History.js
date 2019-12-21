import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import Tabs from '-components/CustomTabs/CustomTabs.jsx'
import Table from '-components/Table/Table.jsx'
import { withStyles, Avatar } from "@material-ui/core";
import * as utils from '-utils'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import dayjs from 'dayjs'
import Card from '@material-ui/core/Card';
import HeatMap from 'react-heatmap-grid'
import GridItem from '-components/Grid/GridItem.jsx'
import GridContainer from '-components/Grid/GridContainer.jsx'
import Primary from '-components/Typography/Primary.jsx'
import Typography from '@material-ui/core/Typography'
import SimpleMenu from "-components/SimpleMenu/SimpleMenu";
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '-components/CustomButtons/Button.jsx'
import MaterialTable from 'material-table';
import QuadrantChart from './QuadrantChart'

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
    },
    customerDetail: {
        minWidth: 400,
        padding: 20
    }
}
class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            selectedTabIndex: 0,
            displayCustomer: null,
            filter: {
                activeStatus: '所有活跃客户',  //所有/30天未活跃/60天未活跃/30天有活跃/60天有活跃/
                orderStatus: '所有活跃客户' //所有/无余课/余课>5/余课>20/余课<5/余课<20
            },
            customerList: []
        }
        this.filterOptions = {
            activeStatus: [
                "所有活跃客户","近30天未活跃","近60天未活跃","近30天有活跃","近60天有活跃"
            ],
            orderStatus: [
                "所有活跃客户","无余课","余课>5","余课>20","余课<5","余课<20"
            ]
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
            this.refreshDayHotMap,
            this.refreshCustomerQuadrantData
        ]
        refreshFunc[this.state.selectedTabIndex] && refreshFunc[this.state.selectedTabIndex]()
    }

    handleDateChange = date => {
        this.setState({ date }, () => {
            // this.refershMonthSchedule()
            this.refresh()
        })
    }

    refreshCustomerQuadrantData = () => {
        const dateRange = utils.getYearStartEnd(this.state.date)
        const params = {
            start: dateRange.start,
            end: dateRange.end,
            analyse: 'customer'
        }
        this.props.actions.loadGymScheduleCount(
            this.props.selectedGym.id,
            params
        ).then(this.refreshCustomerList)
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

    refreshCustomerList = () => {
        const customerList = this.props.gym.report.scheduleCountAnaylseCustomer
            .filter(row => row.course_amount > 1 && this.customFilter(row))
        this.setState({customerList})
    }

    customFilter = (data) => {
        const days30before = dayjs().add(-30, 'day')
        const days60before = dayjs().add(-60, 'day')
        const filterFunc = {
            activeStatus: {
                "所有活跃客户": (row) => true,
                "近30天未活跃": (row) => dayjs(row.max_date).isBefore(days30before),
                "近60天未活跃": (row) => dayjs(row.max_date).isBefore(days60before),
                "近30天有活跃": (row) => dayjs(row.max_date).isAfter(days30before),
                "近60天有活跃": (row) => dayjs(row.max_date).isAfter(days60before),
            },
            orderStatus: {
                "所有活跃客户": (row) => true,
                "无余课": (row) => row.balance.booked === row.balance.total,
                "余课>5": (row) => row.balance.total - row.balance.booked > 5,
                "余课>20": (row) => row.balance.total - row.balance.booked > 20,
                "余课<5": (row) => row.balance.total - row.balance.booked < 5,
                "余课<20": (row) => row.balance.total - row.balance.booked < 20,
            }
        }

        return filterFunc.activeStatus[this.state.filter.activeStatus](data) &&
                filterFunc.orderStatus[this.state.filter.orderStatus](data)
    }

    getCustomerQuadrantFilter = () => {
        return Object.keys(this.filterOptions)
            .map( opt => {
                const opts = this.filterOptions[opt].map( item => ({
                    text: item,
                    onSelect: () => {
                        const filter = {
                            ...this.state.filter,
                            [opt]: item
                        }
                        this.setState({filter}, this.refreshCustomerList)
                    }
                    }))
                return <GridItem
                        key={opt}
                        xs={4}
                        sm={4}
                        md={2}
                    >
                    <SimpleMenu icon={<ExpandMore/>} textColor={'#999'} displayText={this.state.filter[opt]} items={opts} />
                </GridItem>
            })
    }

    getCustomerQuadrantChat = () => {
        const days30before = dayjs().add(-30, 'day')
        const days60before = dayjs().add(-60, 'day')
        const inactive30 = (row) => dayjs(row.max_date).isBefore(days30before)
        const inactive60 = (row) => dayjs(row.max_date).isBefore(days60before)
        const oneDay = 24 * 60 * 60 * 1000;
        const maxX = 40
        const maxY = 365
        const groupedData = [[], [], []]

        this.state.customerList
            .forEach(row => {
                const min = new Date(row.min_date)
                const max = new Date(row.max_date)

                const liveDays = (max - min)/oneDay;
                const frequency = row.course_amount / liveDays * 100;
                const color = inactive30(row) + inactive60(row)
                // const color = liveDays % 3
                groupedData[color].push({
                    x: frequency > maxX ? maxX : frequency,
                    y: liveDays > maxY ? maxY : liveDays,
                    size: row.course_amount / 3,
                    extra: row
                })
        })

        const onValueClick = (dataPoint) => {
            this.setState({displayCustomer: dataPoint.extra})
        }

        const right =  this.state.displayCustomer ? this.getCustomerDetail() : this.getCustomerList()

        return  (<GridContainer>
                    <GridItem container xs={12}>
                        {this.getCustomerQuadrantFilter()}
                    </GridItem>
                    <QuadrantChart
                        dataSet={groupedData}
                        margin={36}
                        width={450}
                        xRange={[0, 40]}
                        yRange={[0,365]}
                        xTitle={"频率"}
                        yTitle={"生命"}
                        legends={['活跃','30天未活跃','60天未活跃']}
                        onValueClick={onValueClick}
                    />
                    <GridItem xs={12} sm={12} md={6}>{right}</GridItem>
            </GridContainer>)
    }
    getCustomerList = () => {
        const columns = [
            { title: '姓名', render: row => row && row.customer && row.customer.name },
            { title: '余额', render: row => row && row.balance && `${row.balance.booked}/${row.balance.total}`}
        ]

        return (<MaterialTable
                search={false}
                style={{position:'relative', top: -24}}
                title={'客户'}
                columns={columns}
                data={this.state.customerList}
                onRowClick={this.onRowClick}
                options={{
                    pageSize: 7,
                    pageSizeOptions: [],
                    search: false
                }}
            />);
    }

    getCustomerDetail = () => {
        let row = (label, value) => {
            return (
                <GridItem
                    xs={12}
                    sm={12}
                    md={12}
                    container
                    alignItems='flex-start'
                    classes={{ grid: 'gym-summary-row' }}
                >
                    <GridItem xs={4} sm={4} md={4}>
                        <Typography
                            variant='button'
                            display='block'
                            gutterBottom
                            className='gym-summary-label'
                        >
                            <Primary>{label}</Primary>
                        </Typography>
                    </GridItem>
                    <GridItem xs={8} sm={8} md={8}>
                        <Typography
                            variant='subtitle2'
                            display='block'
                            gutterBottom
                            className='gym-summary-value'
                        >
                            {value}
                        </Typography>
                    </GridItem>
                </GridItem>
            )
        }
        return (
            <Card className={this.props.classes.customerDetail}>
                {row(<Avatar src={this.state.displayCustomer.customer.avatar} />, this.state.displayCustomer.customer.name)}
                {row('上课数量', this.state.displayCustomer.course_amount)}
                {row('首次训练', this.state.displayCustomer.min_date)}
                {row('上次训练', this.state.displayCustomer.max_date)}
                {row('加入日期', this.state.displayCustomer.balance.created_at)}
                {row('课程数量', this.state.displayCustomer.balance.booked + '/' + this.state.displayCustomer.balance.total)}
                <Button style={{ float: 'right' }} color='transparentGray' onClick={()=>this.setState({displayCustomer: null})}>关闭</Button>
            </Card>
        )

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
                        tabName: '教练分析',
                        tabContent: this.getDayHotMap()
                    },
                    {
                        tabName: '客户分析',
                        tabContent: this.getCustomerQuadrantChat()
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
