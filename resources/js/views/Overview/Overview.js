import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import * as utils from '-utils'
import dayjs from 'dayjs'
import HeatMap from 'react-heatmap-grid'
import {
    withStyles,
    Avatar,
    ListItem,
    List,
    Grid,
    Tooltip
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ExpandMore from '@material-ui/icons/ExpandMore'
import SimpleMenu from '-components/SimpleMenu/SimpleMenu'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import Titlebar from '../../components/TitleBar/Titlebar'
import ClickableBadge from '../../components/ClickableBadge/ClickableBadge'
import Panel from '../../components/Panel/Panel'
import DoubleArrowIcon from '-assets/img/double_arrow.svg'
import LineChart from '../../components/LineChart/LineChart'
import BarChartPanel from '../../components/BarChart/BarChartPanel'
import SearchableTable from '../../components/SearchableTable/SearchableTable'

const styles = {
    container: {
        display: 'flex',
        height: '100%'
    },
    leftContainer: {
        maxWidth: 770,
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 12
    },
    leftTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        flex: 1
    },
    leftTitle: {
        flex: 1
    },
    containerHeader: {
        display: 'flex',
        marginBottom: 16
    },
    containerBody: {
        flex: 1,
        height: 'calc(100% - 50px)',
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    rightContainerBody: {
        flex: 1,
        height: 'calc(100% - 50px)',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column'
    },
    filterContainer: {
        display: 'flex'
    },
    rightContainer: {
        paddingLeft: 16,
        flex: 1,
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column'
    },
    dotTabs: {
        display: 'flex',
        alignItems: 'center'
    },
    tabDescription: {
        fontSize: 12,
        marginTop: 4,
        color: '#666',
        marginBottom: 6
    },
    dotTab: {
        padding: '8px 2px 8px 0'
    },
    filterBar: {
        display: 'flex',
        height: 36,
        width: '100%'
    },
    filterItem: {
        maxWidth: 150,
        marginLeft: 32
    },
    filterItemFlex: {
        flex: 1,
        marginLeft: 32
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
    customerProfile: {
        flex: 2,
        paddingLeft: 12,
        paddingTop: 4
    },
    customerProfileName: {
        fontSize: 14,
        fontWeight: 500,
        color: '#333',
        marginBottom: -2
    },
    customerProfileLastSchedule: {
        fontSize: 12,
        fontWeight: 500,
        color: '#999'
    },
    customerProfileCoach: {
        flex: 2,
        fontSize: 16,
        fontWeight: 900,
        color: '#666',
        minWidth: 72,
        textAlign: 'center'
    },
    customerProfileHotmap: {
        flex: 2,
        minWidth: 60
    },
    coachQuadrantFilter: {
        position: 'absolute',
        top: 6,
        right: 6,
        zIndex: 1000
    },
    chartTitle: {
        color: '#8e24aa',
        paddingTop: 0,
        paddingLeft: 38,
        fontWeight: '900',
        fontSize: 32
    },
    chartSubTitle: {
        paddingLeft: 38,
        fontWeight: '400',
        fontSize: 12,
        marginTop: 6
    },
    titleSeparator: {
        color: '#ccc',
        fontWeight: 100,
        margin: 10
    },
    titleUnit: {
        fontSize: 12,
        marginLeft: 4,
        marginRight: 6
    },
    titleInactive: {
        color: '#aaa',
        marginRight: 6
    },
    titleUnitInactive: {
        fontSize: 12,
        color: '#aaa',
        marginLeft: 4
    },
    yearChartCard: {
        position: 'relative',
        maxWidth: 740,
        paddingLeft: 0,
        paddingTop: 16
    },
    coachQuadrantCard: {
        paddingTop: 16,
        position: 'relative',
        flex: 1
    },
    yearChart: {
        // margin: 'auto'
    },
    noData: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 22,
        fontWeight: '900',
        color: '#999'
    },
    customerCardRow: {
        margin: '8px auto',
        cursor: 'pointer',
        '&:hover': {
            background: '#f6f6f6'
        }
    },
    chart: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: 24,
        flex: 1,
        width: '100%'
    },
    chartTitleContainer: {
        display: 'flex',
        marginBottom: 8
    },
    chartCategoryTitle: {
        color: '#333',
        fontWeight: '700',
        fontSize: 22,
        flex: 1,
        marginTop: 4
    }
}

class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: dayjs(),
            coach: 0,
            activeCustomerTab: 0,
            coachQuadrantFilter: {
                year: dayjs().format('YYYY'),
                month: dayjs().format('M')
            },
            duration: 6,
            selectedDate: null,
            lastActiveDays: 0,
            balance: 0
        }
    }

    componentWillMount() {
        this.props.actions.loadCoach(this.props.selectedGym.id)
        this.refreshYearData()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            nextProps.selectedGym.id &&
            nextProps.selectedGym.id !== this.props.selectedGym.id
        ) {
            this.props.actions.loadCoach(nextProps.selectedGym.id)
            this.refreshYearData()
        }
        return true
        // return nextProps.gym !== this.props.gym || this.state.showDeleteConfirmation !== nextState.showDeleteCoachConfirmation;
    }

    filterBar = () => {
        const { classes } = this.props
        return (
            <div className={classes.leftTitleContainer}>
                <Titlebar label="数据" />
                <div className={classes.filterContainer}>
                    {this.gymFilter()}
                    {this.monthFilter()}
                    {this.durationFilter()}
                    {/* {this.coachFilter()} */}
                </div>
            </div>
        )
    }

    gymFilter = () => {
        const { classes } = this.props
        let menuItems = this.props.gyms.map(gym => {
            return {
                text: gym.name,
                onSelect: () => {
                    this.props.actions.switchGym(gym)
                    this.props.actions.loadCustomer(gym.id, { hotmap: 1 })
                }
            }
        })
        return (
            <div className={classes.filterItemFlex}>
                <div className={classes.filterTitle}>店铺</div>
                <SimpleMenu
                    icon={
                        <ExpandMore
                            fontSize="small"
                            className={classes.filterDropdownIcon}
                        />
                    }
                    textColor={'#666'}
                    displayText={this.props.setting.selectedGym.name}
                    items={menuItems}
                />
            </div>
        )
    }

    lastActiveDaysFilter = () => {
        const { classes } = this.props
        const filters = {
            0: '不限',
            7: '<=7天',
            15: '<=15天',
            30: '<=30天',
            35: '<=45天',
            60: '<=60天'
        }

        const opts = Object.keys(filters).map(k => ({
            text: filters[k],
            onSelect: () => {
                this.setState(
                    {
                        lastActiveDays: k
                    },
                    this.refreshYearData
                )
            }
        }))
        return (
            <div className={classes.filterItem}>
                <div className={classes.filterTitle}>最后活跃</div>
                <SimpleMenu
                    icon={
                        <ExpandMore
                            fontSize="small"
                            className={classes.filterDropdownIcon}
                        />
                    }
                    textColor={'#666'}
                    displayText={filters[this.state.lastActiveDays]}
                    items={opts}
                />
            </div>
        )
    }

    balanceFilter = () => {
        const { classes } = this.props
        const filters = {
            0: '不限',
            8: '<=8',
            15: '<=15',
            30: '<=30',
        }

        const opts = Object.keys(filters).map(k => ({
            text: filters[k],
            onSelect: () => {
                this.setState(
                    {
                        balance: k
                    },
                    this.refreshYearData
                )
            }
        }))
        return (
            <div className={classes.filterItem}>
                <div className={classes.filterTitle}>余额</div>
                <SimpleMenu
                    icon={
                        <ExpandMore
                            fontSize="small"
                            className={classes.filterDropdownIcon}
                        />
                    }
                    textColor={'#666'}
                    displayText={filters[this.state.balance]}
                    items={opts}
                />
            </div>
        )
    }

    coachFilter = () => {
        const { classes } = this.props
        const filters = {
            0: '所有'
        }
        this.props.gym.coaches.map(coach => {
            filters[coach.id] = coach.user.name
        })
        const opts = Object.keys(filters).map(k => ({
            text: filters[k],
            onSelect: () => {
                this.setState(
                    {
                        coach: k
                    },
                    this.loadCoachCustomers
                )
            }
        }))
        return (
            <div className={classes.filterItem}>
                <div className={classes.filterTitle}>教练</div>
                <SimpleMenu
                    icon={
                        <ExpandMore
                            fontSize="small"
                            className={classes.filterDropdownIcon}
                        />
                    }
                    textColor={'#666'}
                    displayText={filters[this.state.coach]}
                    items={opts}
                />
            </div>
        )
    }

    monthFilter = () => {
        const { classes } = this.props
        return (
            <div className={classes.filterItem}>
                <div className={classes.filterTitle}>月份</div>
                <MuiPickersUtilsProvider utils={DayjsUtils} locale={'zh-cn'}>
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
                                    className={classes.filterDropdownIcon}
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
        )
    }

    customerCard = (customerId, color) => {
        const { classes } = this.props
        const customerWithLatestSchedule = this.props.gym.customers.find(
            item => item.id === parseInt(customerId)
        )
        if (
            !customerWithLatestSchedule ||
            !customerWithLatestSchedule.latest_schedule
        ) {
            return ''
        }
        const getHotmapData = userId => {
            const hotmapStr = this.props.gym.hotmap[userId + '']
            if (!hotmapStr) {
                return utils.range(0, 7).map(() => [0, 0, 0, 0, 0])
            }
            const data = utils.range(0, 7).map(() => [])
            hotmapStr
                .split('')
                .map(v => parseInt(v))
                .forEach((v, i) => {
                    data[parseInt(i / 7)].push(v)
                })
            return data
        }
        const hotmapData = getHotmapData(customerWithLatestSchedule.id)

        // + ' | ' + schedule.coach.user.name
        return (
            <ListItem
                onClick={() =>
                    this.props.history.push({
                        pathname: `customer/${customerWithLatestSchedule.id}`
                    })
                }
                key={customerWithLatestSchedule.id}
                className={classes.customerCardRow}
            >
                <Avatar
                    src={customerWithLatestSchedule.avatar}
                    style={{
                        borderWidth: 1,
                        borderColor: '#ececec',
                        width: 36,
                        height: 36
                    }}
                />
                <div className={classes.customerProfile}>
                    <div className={classes.customerProfileName}>
                        {customerWithLatestSchedule.name}
                    </div>
                    <div className={classes.customerProfileLastSchedule}>
                        {dayjs(
                            customerWithLatestSchedule.latest_schedule.date
                        ).format('MM/DD')}
                    </div>
                </div>
                <div className={classes.customerProfileHotmap}>
                    <HeatMap
                        background={color}
                        height={6}
                        xLabelWidth={0}
                        yLabelWidth={0}
                        xLabels={['', '', '', '', '', '', '']}
                        yLabels={['', '', '', '', '']}
                        data={hotmapData}
                        cellStyle={(background, value) => {
                            const style = {
                                maxWidth: '6px',
                                background: '#ececec',
                                borderRadius: '3px'
                            }
                            if (value) {
                                return {
                                    ...style,
                                    background: background,
                                    opacity: 0.4
                                }
                            }
                            return style
                        }}
                    />
                </div>
                <img src={DoubleArrowIcon} style={{ flex: 1 }} />
                <div className={classes.customerProfileCoach}>
                    {customerWithLatestSchedule.latest_schedule
                        ? customerWithLatestSchedule.latest_schedule.coach.user
                              .name
                        : '- -'}
                </div>
            </ListItem>
        )
    }

    getNewCustomers = () => {
        const selectedDate = this.state.selectedDate
            ? this.state.selectedDate
            : this.state.date
        const lastMonth = selectedDate.add(-1, 'month')

        const currentMonthCustomersMap = this.getCustomerMapByMonth(
            selectedDate
        )
        const lastMonthCustomersMap = this.getCustomerMapByMonth(lastMonth)
        if (!Object.keys(lastMonthCustomersMap).length) {
            return []
        }
        const ret = {}
        Object.keys(currentMonthCustomersMap).forEach(customerId => {
            if (!lastMonthCustomersMap[customerId]) {
                ret[customerId] =
                    currentMonthCustomersMap[customerId][0].customer
            }
        })
        return Object.keys(ret)
    }

    getHotCustomers = () => {
        const selectedDate = this.state.selectedDate
            ? this.state.selectedDate
            : this.state.date
        const currentMonthCustomersMap = this.getCustomerMapByMonth(
            selectedDate
        )
        const customerScheduleCountMap = {}
        Object.keys(currentMonthCustomersMap).forEach(customerId => {
            customerScheduleCountMap[customerId] = utils.sum(
                currentMonthCustomersMap[customerId],
                'course_amount'
            )
        })
        const ret = []
        Object.keys(currentMonthCustomersMap).forEach(customerId => {
            if (customerScheduleCountMap[customerId] >= 8) {
                ret.push(currentMonthCustomersMap[customerId][0].customer)
            }
        })
        return ret.map(c => c.id)
    }

    getCoolCustomers = () => {
        const selectedDate = this.state.selectedDate
            ? this.state.selectedDate
            : this.state.date
        const lastMonth = selectedDate.add(-1, 'month')

        const currentMonthCustomersMap = this.getCustomerMapByMonth(
            selectedDate
        )
        const lastMonthCustomersMap = this.getCustomerMapByMonth(lastMonth)
        if (!Object.keys(lastMonthCustomersMap).length) {
            return []
        }
        const ret = {}
        Object.keys(lastMonthCustomersMap).forEach(customerId => {
            if (!currentMonthCustomersMap[customerId]) {
                ret[customerId] = lastMonthCustomersMap[customerId][0].customer
            }
        })
        return Object.keys(ret)
    }

    getCustomerMapByMonth = day => {
        const ret = {}
        const year = day.format('YYYY')
        const month = day.format('M')

        const { scheduleCountByMonthPerCoach } = this.props.gym.report
        scheduleCountByMonthPerCoach.forEach(row => {
            if (row.year == year && row.month == month) {
                if (!ret[row.customer_id]) {
                    ret[row.customer_id] = []
                }
                ret[row.customer_id].push(row)
            }
        })
        return ret
    }

    handleDateChange = date => {
        this.setState({ date }, () => {
            this.refreshYearData()
        })
    }

    durationFilter = () => {
        const { classes } = this.props
        const filters = {
            6: '6个月',
            12: '12个月'
        }
        const opts = Object.keys(filters).map(k => ({
            text: filters[k],
            onSelect: () => {
                this.setState(
                    {
                        duration: k
                    },
                    this.refreshYearData
                )
            }
        }))
        return (
            <div className={classes.filterItem}>
                <div className={classes.filterTitle}>间隔</div>
                <SimpleMenu
                    icon={
                        <ExpandMore
                            fontSize="small"
                            className={classes.filterDropdownIcon}
                        />
                    }
                    textColor={'#666'}
                    displayText={filters[this.state.duration]}
                    items={opts}
                />
            </div>
        )
    }
    refreshYearData = () => {
        const { _, end } = utils.getMonthStartEnd(this.state.date)
        const start = dayjs(end)
            .add(-this.state.duration, 'month')
            .add(1, 'day')
            .format('YYYY-MM-DD')
        const params = {
            start,
            end,
            count: 'coach_id,year(date),month(date),customer_id'
        }
        this.props.actions.load
        this.props.actions.loadGymScheduleCount(
            this.props.selectedGym.id,
            params
        )
        this.props.actions.loadDianpingSummary(this.props.selectedGym.id, {
            start,
            end
        })
        this.props.actions.loadStatistics(this.props.selectedGym.id, {
            start,
            end
        })
        this.props.actions.loadMonthcourseByCustomerType(
            this.props.selectedGym.id,
            {
                end,
                duration: this.state.duration
            }
        )
        this.props.actions.loadMonthSaleByType(this.props.selectedGym.id, {
            end,
            duration: this.state.duration
        })
        this.props.actions.loadMonthActiveByType(this.props.selectedGym.id, {
            end,
            duration: this.state.duration
        })

        this.loadCoachCustomers()

        let hotmapDate = dayjs(end)
        if (dayjs(end).isAfter(dayjs())) {
            hotmapDate = dayjs()
        }
        this.props.actions.loadCustomerHotmap(this.props.selectedGym.id, {
            date: hotmapDate.format('YYYY-MM-DD'),
            duration: 35
        })
    }

    loadCoachCustomers = () => {
        const { _, end } = utils.getMonthStartEnd(this.state.date)
        const start = dayjs(end)
            .add(-this.state.duration, 'month')
            .add(1, 'day')
            .format('YYYY-MM-DD')
        this.props.actions.loadCustomerWithDate(this.props.selectedGym.id, {
            coach: this.state.coach,
            start,
            end
        })
    }

    customersPanel = () => {
        const columns = [
            {
                title: '姓名',
                flex: 1,
                render: row => {
                    return (
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
                                    backgroundColor: row.sex
                                        ? '#C6D3FF'
                                        : '#FFDFDF'
                                }}
                            />
                            <span style={{ flex: 1 }}>{row.name}</span>
                        </div>
                    )
                }
            },
            {
                title: '上次训练',
                flex: 1,
                render: row =>
                    row.latest_schedule
                        ? dayjs(row.latest_schedule.date).format('MM/DD')
                        : '- -'
            },
            {
                title: '上次教练',
                flex: 1,
                render: row =>
                    row.latest_schedule
                        ? row.latest_schedule.coach.user.name
                        : '- -'
            },
            {
                title: '余课/总计',
                flex: 1,
                render: row =>
                    row.stock
                        ? row.stock.unfinished_count + '/' + row.stock.total
                        : '- -'
            },
            {
                title: '月热度',
                flex: 1,
                render: row => {
                    const bgColor = v => (v === 0 ? '#ececec' : '#29aa99')
                    const opacity = v => (v === 0 ? 1 : Math.ceil(v / 2) * 0.25)
                    if (row.monthMap) {
                        return (
                            <Tooltip title={row.monthMap.join(' · ')}>
                                <div>
                                    {row.monthMap.map((v, i) => (
                                        <span
                                            key={i + ''}
                                            style={{
                                                borderRadius: 2,
                                                display: 'inline-block',
                                                height: 8,
                                                width: 8,
                                                marginLeft: 1,
                                                background: bgColor(v),
                                                opacity: opacity(v)
                                            }}
                                        />
                                    ))}
                                </div>
                            </Tooltip>
                        )
                    }
                    return <div />
                }
            }
        ]
        const { classes } = this.props
        const filteredCustomers = () => {
            let filtered = this.props.gym.report.customerWithDate
            if (this.state.balance > 0) {
                filtered = filtered.filter(c => c.stock && c.stock.unfinished_count <= this.state.balance)
            }
            if (this.state.lastActiveDays > 0 ) {
                filtered = filtered.filter(c =>  c.latest_schedule && dayjs().diff(c.latest_schedule.date, 'day') <= this.state.lastActiveDays)
            }
            return filtered
        }
        return (
            <Panel className={classes.chart}>
                <div className={classes.chartTitleContainer}>
                    <div className={classes.chartCategoryTitle}>
                        {'活跃客户'}{' '}
                        <span
                            style={{
                                fontWeight: '400',
                                color: '#666',
                                fontSize: 12
                            }}
                        >
                            {filteredCustomers().length}
                        </span>
                    </div>
                    {this.lastActiveDaysFilter()}
                    {this.balanceFilter()}
                    {this.coachFilter()}
                </div>
                <SearchableTable
                    columns={columns}
                    data={filteredCustomers()}
                    onRowClick={(_, row) =>
                        this.props.history.push({
                            pathname: `customer/${row.id}`
                        })
                    }
                />
            </Panel>
        )
    }

    statisticsChart = React.memo(({ data, date, duration }) => {
        const rawData = data

        const { _, end } = utils.getMonthStartEnd(dayjs(date))
        const endDay = dayjs(end)
        const wrappedData = []

        const xLabels = []
        utils.range(0, duration).forEach(i => {
            const day = endDay.add(-i, 'month')
            const k = day.format('YYYY-MM')
            const rows = rawData
                .filter(r => r.date.substr(0, 7) === k)
                .sort((a, b) => {
                    return (
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    )
                })
            const row = rows[0]
            xLabels.push(utils.getMonthLabel(day.month()))

            wrappedData.push([
                row ? row.stock : 0,
                row ? row.stock - row.expired : 0
            ])
        })
        xLabels.reverse()
        wrappedData.reverse()

        return (
            <BarChartPanel
                title={'库存'}
                colors={['#D0F0EC', '#29aa99']}
                data={wrappedData}
                legends={['总库存', '未过期']}
                xLabels={xLabels}
                unit={'节'}
            />
        )
    })

    dianpingChart = React.memo(({ rawData, date, duration }) => {
        const { _, end } = utils.getMonthStartEnd(date)
        const endDay = dayjs(end)
        const data = {}
        utils.range(0, duration).forEach(i => {
            const day = endDay.add(-i, 'month')
            const k = day.format('YYYY-MM')
            const row = rawData.find(r => r.months === k)
            data[k] = {
                monthLabel: utils.getMonthLabel(day.month()),
                shop_uv_sum: row ? row.shop_uv_sum : 0,
                view_uv_sum: row ? row.view_uv_sum : 0,
                buy_uv_sum: row ? row.buy_uv_sum : 0,
                comment_sum: row ? row.comment_sum : 0
            }
        })

        const options = {
            shop_uv_sum: '点击',
            view_uv_sum: '曝光',
            buy_uv_sum: '销售',
            comment_sum: '评论'
        }

        return (
            <LineChart
                options={options}
                title={'大众点评'}
                xTicker={'monthLabel'}
                defaultColumn={'shop_uv_sum'}
                data={data}
                width={740}
                height={200}
            />
        )
    })

    customerListTab = () => {
        const { classes } = this.props
        const dots = [
            {
                name: '新增',
                color: '#56C3E5',
                getCustomers: this.getNewCustomers,
                description: '上月未出勤但本月出勤的客户'
            },
            {
                name: '活跃',
                color: '#29aa99',
                getCustomers: this.getHotCustomers,
                description: '本月出勤超过8次的客户'
            },
            {
                name: '冷却',
                color: '#FF5050',
                getCustomers: this.getCoolCustomers,
                description: '上月出勤但本月未出勤的客户'
            }
        ]

        const getCard = i => {
            return dots[i]
                .getCustomers()
                .map(c => this.customerCard(c, dots[i].color))
        }

        return (
            <React.Fragment>
                <div className={classes.containerHeader}>
                    <Titlebar label="焦点" />
                    <div className={classes.dotTabs}>
                        {dots.map((dot, i) => (
                            <div key={dot.color} className={classes.dotTab}>
                                <ClickableBadge
                                    tooltip={dot.description}
                                    label={dot.name}
                                    number={dot.getCustomers().length}
                                    color={dot.color}
                                    selected={
                                        i === this.state.activeCustomerTab
                                    }
                                    onClick={() =>
                                        this.setState({ activeCustomerTab: i })
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.rightContainerBody}>
                    <Panel flex scroll>
                        {this.props.gym.customers.length &&
                        dots[this.state.activeCustomerTab].getCustomers()
                            .length ? (
                            <List>{getCard(this.state.activeCustomerTab)}</List>
                        ) : (
                            <p className={classes.noData}>暂无数据</p>
                        )}
                    </Panel>
                </div>
            </React.Fragment>
        )
    }

    courseBarChart = () => {
        const { monthCourseByCustomerType } = this.props.gym.report
        const xLabels = Object.keys(monthCourseByCustomerType)
        const data = Object.values(monthCourseByCustomerType).map(row => {
            return [row.all, row.recent, row.new]
        })

        return (
            <BarChartPanel
                title={'耗课'}
                colors={['#D0F0EC', '#81F6D2', '#29aa99']}
                data={data}
                legends={['所有', '半年内新客', '本月新客']}
                xLabels={xLabels}
                unit={'节'}
            />
        )
    }
    activeCustomerBarChart = () => {
        const { monthActiveByType } = this.props.gym.report
        const xLabels = Object.keys(monthActiveByType)
        const data = Object.values(monthActiveByType).map(row => {
            return [row.all, row.recent, row.new]
        })

        return (
            <BarChartPanel
                title={'活跃客户'}
                colors={['#D0F0EC', '#81F6D2', '#29aa99']}
                data={data}
                legends={['所有', '半年内新客', '本月新客']}
                xLabels={xLabels}
                unit={'人'}
            />
        )
    }

    saleBarChart = () => {
        const { monthSaleByType } = this.props.gym.report
        const xLabels = Object.keys(monthSaleByType)
        const data = Object.values(monthSaleByType).map(row => {
            return [row.all, row.recent, row.new]
        })

        return (
            <BarChartPanel
                title={'销售'}
                colors={['#D0F0EC', '#81F6D2', '#29aa99']}
                data={data}
                legends={['所有', '半年内新客', '本月新客']}
                xLabels={xLabels}
                unit={'元'}
            />
        )
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                    <div className={classes.containerHeader}>
                        {this.filterBar()}
                    </div>
                    <div className={classes.containerBody}>
                        <Grid container spacing={1}>
                            <Grid
                                item
                                xs={6}
                                justify="center"
                                alignItems="center"
                                container
                            >
                                <this.courseBarChart />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                justify="center"
                                alignItems="center"
                                container
                            >
                                <this.saleBarChart />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                justify="center"
                                alignItems="center"
                                container
                            >
                                <this.activeCustomerBarChart />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                justify="center"
                                alignItems="center"
                                container
                            >
                                <this.statisticsChart
                                    date={this.state.date}
                                    duration={this.state.duration}
                                    data={this.props.gym.report.statistics}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                justify="center"
                                alignItems="center"
                                container
                            >
                                {this.props.selectedGym.dianping_shop_name && (
                                    <this.dianpingChart
                                        date={this.state.date}
                                        duration={this.state.duration}
                                        rawData={this.props.gym.report.dianping}
                                    />
                                )}
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                justify="center"
                                alignItems="center"
                                container
                            >
                                {this.customersPanel()}
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className={classes.rightContainer}>
                    <this.customerListTab />
                </div>
            </div>
        )
    }
}

const mapStoreToProps = store => {
    return {
        selectedGym: store.setting.selectedGym,
        gym: store.gym,
        gyms: store.organization.gym,
        setting: store.setting
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const LinkedOverview = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Overview)

export default withStyles(styles)(LinkedOverview)
