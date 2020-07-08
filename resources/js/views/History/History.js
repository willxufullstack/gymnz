import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import { withStyles, Avatar, Button, Divider } from '@material-ui/core'
import * as utils from '-utils'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import dayjs from 'dayjs'
import HeatMap from 'react-heatmap-grid'
import SimpleMenu from '-components/SimpleMenu/SimpleMenu'
import ExpandMore from '@material-ui/icons/ExpandMore'
import QuadrantChart from './QuadrantChart'
import LightTabs from '-components/LightTabs/LightTabs'
import SearchableTable from '../../components/SearchableTable/SearchableTable'
import Panel from '../../components/Panel/Panel'
import RoundButton from '../../components/RoundButton/RoundButton'

const styles = {
    hotMapTitle: {
        marginBottom: 12,
        color: '#333',
        fontWeight: '900'
    },
    monthLabelsContainer: {
        width: 900,
        display: 'flex',
        textAlign: 'center',
        color: '#999',
        fontWeight: '400',
        fontSize: 12,
        marginBottom: 6
    },
    monthLabel: {
        flex: 1
    },
    customerDetail: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    customerRow: {
        display: 'flex',
        minWidth: 180,
        alignItems: 'center',
        padding: 8,
        fontSize: 14
    },
    customerRowLabel: {
        fontWeight: '700',
        flex: 1
    },
    customerRowValue: {
        flex: 1
    },
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
                activeStatus: '所有活跃客户', //所有/30天未活跃/60天未活跃/30天有活跃/60天有活跃/
                orderStatus: '所有活跃客户' //所有/无余课/余课>5/余课>20/余课<5/余课<20
            },
            customerList: []
        }
        this.filterOptions = {
            activeStatus: [
                '所有活跃客户',
                '近30天未活跃',
                '近60天未活跃',
                '近30天有活跃',
                '近60天有活跃'
            ],
            orderStatus: [
                '所有活跃客户',
                '无余课',
                '余课>5',
                '余课>20',
                '余课<5',
                '余课<20'
            ]
        }
    }

    tapTab = tabIndex => {
        this.setState({ selectedTabIndex: tabIndex }, () => {
            this.refresh()
        })
    }

    refresh = () => {
        const refreshFunc = [
            this.refershMonthSchedule,
            this.refreshMonthSale,
            this.refreshDayHotMap,
            this.refreshCustomerQuadrantData
        ]
        refreshFunc[this.state.selectedTabIndex] &&
            refreshFunc[this.state.selectedTabIndex]()
    }

    handleDateChange = date => {
        this.setState({ date }, () => {
            // this.refershMonthSchedule()
            this.refresh()
        })
    }

    refreshCustomerQuadrantData = () => {
        let { start, end } = utils.getYearStartEnd(this.state.date)
        const today = dayjs()
        if (today.isBefore(dayjs(end))) {
            const endDay = dayjs(today)
            start = endDay.add(-1, 'year').format('YYYY-MM-DD')
            end = endDay.format('YYYY-MM-DD')
        }
        const params = {
            start: start,
            end: end,
            analyse: 'customer'
        }
        this.props.actions
            .loadGymScheduleCount(this.props.selectedGym.id, params)
            .then(this.refreshCustomerList)
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
        const dateRange = utils.getYearStartEnd(
            this.state.date,
            'YYYY-MM-DD HH:mm:ss'
        )
        const params = {
            start: dateRange.start,
            end: dateRange.end
        }
        this.props.actions.loadGymOrders(this.props.selectedGym.id, params)
    }

    groupOrderByMonth = orders => {
        const baseRow = {
            orderCount: 0,
            courseCount: 0,
            totalPrice: 0,
            bonusOrderCount: 0
        }
        const ret = utils.range(1, 13).map(month => {
            return {
                month: month + '月',
                ...baseRow
            }
        })

        orders.forEach(order => {
            const month = parseInt(dayjs(order.created_at).format('MM'))
            if (!order.course_amount) {
                return
            }
            if (order.price === 0) {
                ret[month - 1].bonusOrderCount++
            } else {
                ret[month - 1].courseCount += order.course_amount
                ret[month - 1].orderCount++
            }
            ret[month - 1].totalPrice += order.price
        })

        const sumRow = {
            month: '总计',
            ...baseRow
        }
        ret.forEach(row => {
            sumRow.orderCount += row.orderCount
            sumRow.courseCount += row.courseCount
            sumRow.totalPrice += row.totalPrice
            sumRow.bonusOrderCount += row.bonusOrderCount
        })

        ret.push(sumRow)
        return ret
    }

    getMonthSaleTab = () => {
        const columns = [
            { title: '月份', field: 'month' },
            { title: '订单数量', field: 'orderCount' },
            { title: '课程数量', field: 'courseCount' },
            { title: '订单总价', field: 'totalPrice' },
            { title: '赠送课程数量', field: 'bonusOrderCount' }
        ]
        const data = this.groupOrderByMonth(this.props.gym.report.orders)
        return (
            <Panel style={{ padding: '0 24px' }}>
                <SearchableTable columns={columns} data={data} />
            </Panel>
        )
    }
    getDayHotMap = () => {
        const sumMappedWithDate = {}
        const sumMappedWithDatePerCoach = {}
        this.props.gym.report.scheduleCountByDate.forEach(row => {
            // handle gym statistic
            if (!sumMappedWithDate[row.date]) {
                sumMappedWithDate[row.date] = 0
            }
            sumMappedWithDate[row.date] += row.course_amount
            // handle coach statistic
            if (!sumMappedWithDatePerCoach[row.coach.user.name]) {
                sumMappedWithDatePerCoach[row.coach.user.name] = []
            }
            if (!sumMappedWithDatePerCoach[row.coach.user.name][row.date]) {
                sumMappedWithDatePerCoach[row.coach.user.name][row.date] = 0
            }
            sumMappedWithDatePerCoach[row.coach.user.name][row.date] +=
                row.course_amount
        })
        const hotmapPerCoach = Object.keys(sumMappedWithDatePerCoach).map(
            coach =>
                this.generateDayHotMap(coach, sumMappedWithDatePerCoach[coach])
        )
        return [
            <Divider />,
            this.generateDayHotMap('总计', sumMappedWithDate),
            ...hotmapPerCoach
        ]
    }

    generateDayHotMap = (title, mappedWithDate) => {
        const { start, end } = utils.getYearStartEnd(this.state.date)
        const xLabels = new Array(53).fill('')
        const yLabels = new Array(7).fill('')

        const data = utils.range(0, 7).map(() => [])
        let startDay = dayjs(start)
        let i = 0
        while (i < 53 * 7) {
            const dayStr = startDay.add(i, 'day').format('YYYY-MM-DD')
            const courseCount = mappedWithDate[dayStr]
                ? mappedWithDate[dayStr]
                : 0
            data[i % 7].push(courseCount)
            i++
        }
        const monthLabels = [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
        ]
        return (
            <div key={title} style={{ marginBottom: 42 }}>
                <p className={this.props.classes.hotMapTitle}>{title}</p>
                <div className={this.props.classes.monthLabelsContainer}>
                    {monthLabels.map(m => (
                        <div key={m} className={this.props.classes.monthLabel}>
                            {m}
                        </div>
                    ))}
                </div>
                <HeatMap
                    background={'#29aa99'}
                    height={16}
                    squares
                    yLabelWidth={0}
                    xLabelWidth={24}
                    xLabels={xLabels}
                    yLabels={yLabels}
                    data={data}
                    cellStyle={(background, value, min, max, data, x, y) => {
                        const style = {
                            maxWidth: '20px',
                            background: '#ececec',
                            borderRadius: '2px'
                        }
                        if (value) {
                            return {
                                ...style,
                                background: background,
                                opacity: value / (max - min)
                            }
                        }
                        return style
                    }}
                />
            </div>
        )
    }

    refreshCustomerList = () => {
        const customerList = this.props.gym.report.scheduleCountAnaylseCustomer.filter(
            row => row.course_amount > 1 && this.customFilter(row)
        )
        this.setState({ customerList })
    }

    customFilter = data => {
        const days30before = dayjs().add(-30, 'day')
        const days60before = dayjs().add(-60, 'day')
        const filterFunc = {
            activeStatus: {
                所有活跃客户: row => true,
                近30天未活跃: row => dayjs(row.max_date).isBefore(days30before),
                近60天未活跃: row => dayjs(row.max_date).isBefore(days60before),
                近30天有活跃: row => dayjs(row.max_date).isAfter(days30before),
                近60天有活跃: row => dayjs(row.max_date).isAfter(days60before)
            },
            orderStatus: {
                所有活跃客户: row => true,
                无余课: row => row.balance.booked === row.balance.total,
                '余课>5': row => row.balance.total - row.balance.booked > 5,
                '余课>20': row => row.balance.total - row.balance.booked > 20,
                '余课<5': row => row.balance.total - row.balance.booked < 5,
                '余课<20': row => row.balance.total - row.balance.booked < 20
            }
        }

        return (
            filterFunc.activeStatus[this.state.filter.activeStatus](data) &&
            filterFunc.orderStatus[this.state.filter.orderStatus](data)
        )
    }

    getCustomerQuadrantFilter = () => {
        const filters = Object.keys(this.filterOptions).map(opt => {
            const opts = this.filterOptions[opt].map(item => ({
                text: item,
                onSelect: () => {
                    const filter = {
                        ...this.state.filter,
                        [opt]: item
                    }
                    this.setState({ filter }, this.refreshCustomerList)
                }
            }))
            return (
                <SimpleMenu
                    key={opt}
                    icon={<ExpandMore />}
                    textColor={'#999'}
                    displayText={this.state.filter[opt]}
                    items={opts}
                />
            )
        })
        return <div style={{ display: 'flex' }}>{filters}</div>
    }

    getCustomerQuadrantChat = () => {
        const dateRange = utils.getYearStartEnd(this.state.date)
        const piv = dayjs(dateRange.end).isBefore(dayjs())
            ? dayjs(dateRange.end)
            : dayjs()

        const days30before = piv.add(-30, 'day')
        const days60before = piv.add(-60, 'day')
        const inactive30 = row => dayjs(row.max_date).isBefore(days30before)
        const inactive60 = row => dayjs(row.max_date).isBefore(days60before)
        const oneDay = 24 * 60 * 60 * 1000
        const maxX = 40
        const maxY = 365
        const groupedData = []
        const colors = [
            '#29aa99',
            '#FF8C8C',
            '#ccc',
            '#29aa99',
            '#FF8C8C',
            '#ccc'
        ]
        const opacitySet = [0.7, 0.8, 0.5]

        this.state.customerList.forEach(row => {
            const min = new Date(row.min_date)
            const max = new Date(row.max_date)

            const liveDays = (max - min) / oneDay
            const frequency = (row.course_amount / liveDays) * 100
            const color = inactive30(row) + inactive60(row)
            // const color = liveDays % 3
            groupedData.push({
                x: frequency > maxX ? maxX : frequency,
                y: liveDays > maxY ? maxY : liveDays,
                size: row.course_amount / 3,
                stroke: colors[color + 3],
                opacity: opacitySet[color],
                color: colors[color],
                extra: row
            })
        })
        const onValueClick = dataPoint => {
            this.setState({
                fixCustomerModal: true,
                displayCustomer: dataPoint.extra
            })
        }

        const onHover = dataPoint => {
            if (this.state.fixCustomerModal) {
                return
            }
            this.setState({ displayCustomer: dataPoint.extra })
        }
        const onBlur = () => {
            if (this.state.fixCustomerModal) {
                return
            }
            this.setState({ displayCustomer: null })
        }

        const right = this.state.displayCustomer
            ? this.getCustomerDetail()
            : this.getCustomerList()

        return (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    {this.getCustomerQuadrantFilter()}
                    <QuadrantChart
                        title={
                            piv.add(-1, 'year').format('YYYY/MM/DD') +
                            ' - ' +
                            piv.format('YYYY/MM/DD')
                        }
                        dataSet={groupedData}
                        margin={36}
                        width={450}
                        height={450}
                        xRange={[0, 40]}
                        yRange={[0, 365]}
                        xTitle={'频率'}
                        yTitle={'生命'}
                        legends={{
                            [colors[0]]: '活跃',
                            [colors[1]]: '30天未活跃',
                            [colors[2]]: '60天未活跃'
                        }}
                        colorRange={colors}
                        onHover={onHover}
                        onBlur={onBlur}
                        onValueClick={onValueClick}
                    />
                </div>
                <Panel style={{ flex: 1, padding: '0 12px' }}>{right}</Panel>
            </div>
        )
    }
    getCustomerList = () => {
        const columns = [
            {
                title: '姓名',
                render: row => row && row.customer && row.customer.name
            },
            {
                title: '余额',
                render: row =>
                    row &&
                    row.balance &&
                    `${row.balance.booked}/${row.balance.total}`
            }
        ]

        return (
            <SearchableTable
                style={{ maxHeight: 532, display: 'flex' }}
                columns={columns}
                data={this.state.customerList}
                onRowClick={this.onRowClick}
            />
        )
    }

    getCustomerDetail = () => {
        const { classes } = this.props
        let row = (label, value) => {
            return (
                <div className={classes.customerRow}>
                    <div className={classes.customerRowLabel}>{label}</div>
                    <div className={classes.customerRowValue}>{value} </div>
                </div>
            )
        }
        return (
            <div className={this.props.classes.customerDetail}>
                {row(
                    <Avatar src={this.state.displayCustomer.customer.avatar} />,
                    this.state.displayCustomer.customer.name
                )}
                {row('上课数量', this.state.displayCustomer.course_amount)}
                {row('首次训练', this.state.displayCustomer.min_date)}
                {row('上次训练', this.state.displayCustomer.max_date)}
                {row('加入日期', this.state.displayCustomer.balance.created_at)}
                {row(
                    '课程数量',
                    this.state.displayCustomer.balance.booked +
                        '/' +
                        this.state.displayCustomer.balance.total
                )}
                <div style={{ marginTop: 24 }}>
                    <RoundButton
                        color="#29aa99"
                        onClick={() =>
                            this.setState({
                                displayCustomer: null,
                                fixCustomerModal: false
                            })
                        }
                        label={' 关闭'}
                    />
                </div>
            </div>
        )
    }

    getMonthScheduleTab = () => {
        const coaches = Object.keys(
            this.props.gym.report.scheduleCountByMonthPerCoachOfYear
        )
        let columns = [
            { title: '月份', field: 'monthName' },
            ...coaches.map(c => ({ title: c, field: c })),
            { title: '总计', field: 'sum' }
        ]

        let tableData = utils.range(1, 13).map(month => {
            const data = this.props.gym.report
                .scheduleCountByMonthPerCoachOfYear
            const byCoaches = {}
            coaches.forEach(coach => {
                byCoaches[coach] = data[coach][month] ? data[coach][month] : 0
            })

            const sum = Object.values(byCoaches).reduce((a, b) => a + b, 0)
            const monthName = utils.getMonthLabel(month - 1)
            return {
                monthName,
                ...byCoaches,
                sum
            }
        })
        // add the sum row
        const lastRow = { monthName: '总计' }
        let total = 0
        coaches.forEach(coach => {
            const data = this.props.gym.report
                .scheduleCountByMonthPerCoachOfYear
            const coachSum = data[coach].reduce((a, b) => a + b, 0)
            total += coachSum
            lastRow[coach] = coachSum
        })
        lastRow['sum'] = total
        tableData.push(lastRow)

        return (
            <Panel style={{ padding: '0 24px' }}>
                <SearchableTable columns={columns} data={tableData} />
            </Panel>
        )
    }

    componentWillMount() {
        this.refershMonthSchedule()
    }

    render() {
        const { classes } = this.props
        const dateSelector = () => {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>年报</span>
                    <div className={classes.filterItem}>
                        <MuiPickersUtilsProvider
                            utils={DayjsUtils}
                            locale={'zh-cn'}
                        >
                            <DatePicker
                                format="YYYY"
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
                                views={['year']}
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
            <LightTabs
                title={dateSelector()}
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
