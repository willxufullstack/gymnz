import React from "react";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import * as utils from "-utils";
import dayjs from "dayjs";
import Card from "@material-ui/core/Card";
import {
    withStyles,
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    List
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SimpleMenu from "-components/SimpleMenu/SimpleMenu";
import Typography from "@material-ui/core/Typography";
import QuadrantChart from "../History/QuadrantChart";
import DoubleAreaChart from "./DoubleAreaChart";
import AreaChart from "./AreaChart";
import { Hint } from "react-vis";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";

const styles = {
    container: {
        display: "flex"
    },
    leftContainer: {
        maxWidth: 740
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 8,
        paddingTop: 20
    },
    dotTabs: {
        display: 'flex'
    },
    tabDescription: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 4,
        color: '#666',
        marginBottom:6
    },
    dotTab: {
        flex: 1,
        display: 'flex',
        paddingTop: 8,
        paddingBottom: 8,
        background: '#f3f3f3'
    },
    activeTab: {
        background: '#fff'
    },
    dotTabDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        display: 'inline-block'
    },
    dotTabTitle: {
        display: 'inline-block',
        paddingLeft: 4
    },
    filterBar: {
        display: "flex",
        height: 36,
        width: "100%"
    },
    filterItem: {
        display: "flex",
        maxWidth: 150,
        flex: 1
    },
    filterTitle: {
        width: 60,
        lineHeight: "36px",
        textAlign: "center",
        fontSize: 13,
        fontWeight: "800",
        color: "#999"
    },
    coachQuadrantFilter: {
        position: "absolute",
        top: 6,
        right: 6,
        zIndex: 1000
    },
    chartTitle: {
        color: "#8e24aa",
        paddingTop: 0,
        paddingLeft: 38,
        fontWeight: "900",
        fontSize: 32
    },
    chartSubTitle: {
        paddingLeft: 38,
        fontWeight: "400",
        fontSize: 12,
        marginTop: 6
    },
    titleSeparator: {
        color: "#ccc",
        fontWeight: 100,
        margin: 10
    },
    titleUnit: {
        fontSize: 12,
        marginLeft: 4
    },
    titleInactive: {
        color: "#aaa"
    },
    titleUnitInactive: {
        fontSize: 12,
        color: "#aaa",
        marginLeft: 4
    },
    yearChartCard: {
        position: "relative",
        maxWidth: 740,
        paddingLeft: 0,
        paddingTop: 16,
        marginTop: 20
    },
    coachQuadrantCard: {
        maxWidth: 300,
        marginTop: 20,
        paddingTop: 16,
        position: "relative"
    },
    yearChart: {
        // margin: 'auto'
    }
};

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chart0ActiveIndex: 0,
            chart0Value: null,
            chart1Value: null,
            date: dayjs(),
            coach: 0,
            yearChartData: [],
            activeCustomerTab: 0,
            coachQuadrantFilter: {
                year: dayjs().format("YYYY"),
                month: dayjs().format("M")
            },
            duration: 6,
            selectedDate: null
        };
    }

    componentWillMount() {
        this.props.actions.loadCoach(this.props.selectedGym.id);
        this.refreshYearData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            nextProps.selectedGym.id &&
            nextProps.selectedGym.id !== this.props.selectedGym.id
        ) {
            this.props.actions.loadCoach(nextProps.selectedGym.id);
            this.refreshYearData();
        }
        return true;
        // return nextProps.gym !== this.props.gym || this.state.showDeleteConfirmation !== nextState.showDeleteCoachConfirmation;
    }

    filterBar = () => {
        const { classes } = this.props;
        return (
            <Card className={classes.filterBar}>
                {this.monthFilter()}
                {this.durationFilter()}
                {this.coachFilter()}
            </Card>
        );
    };

    coachFilter = () => {
        const { classes } = this.props;
        const filters = {
            0: "所有"
        };
        this.props.gym.coaches.map(coach => {
            filters[coach.id] = coach.user.name;
        });
        const opts = Object.keys(filters).map(k => ({
            text: filters[k],
            onSelect: () => {
                this.setState({
                    coach: k
                });
            }
        }));
        return (
            <div className={classes.filterItem}>
                <div className={classes.filterTitle}>教练</div>
                <SimpleMenu
                    icon={<ExpandMore />}
                    textColor={"#333"}
                    displayText={filters[this.state.coach]}
                    items={opts}
                />
            </div>
        );
    };

    monthFilter = () => {
        const { classes } = this.props;
        return (
            <div className={classes.filterItem}>
                <MuiPickersUtilsProvider utils={DayjsUtils} locale={"zh-cn"}>
                    <DatePicker
                        format="MM/YYYY"
                        className={classes.dateFilter}
                        style={{
                            maxWidth: 60,
                            position: "relative",
                            bottom: -2,
                            marginLeft: 20
                        }}
                        openTo="month"
                        views={["year", "month"]}
                        value={this.state.date}
                        onChange={this.handleDateChange}
                    />
                </MuiPickersUtilsProvider>
            </div>
        );
    };

    customerCard = (customer, color) => {
        const { classes } = this.props;
        return (
            <ListItem key={customer.id}>
                <ListItemAvatar className={classes.customerCard}>
                    <Avatar
                        src={customer.avatar}
                        style={{
                            borderWidth: 2,
                            borderColor: color,
                            borderStyle: "solid"
                        }}
                    />
                </ListItemAvatar>
                <ListItemText primary={customer.name} secondary="" />
            </ListItem>
        );
    };

    getNewCustomers = () => {
        const selectedDate = this.state.selectedDate ? this.state.selectedDate : this.state.date
        const lastMonth = selectedDate.add(-1, "month");

        const currentMonthCustomersMap = this.getCustomerMapByMonth(
            selectedDate
        );
        const lastMonthCustomersMap = this.getCustomerMapByMonth(lastMonth);
        if (!Object.keys(lastMonthCustomersMap).length) {
            return [];
        }
        const ret = {};
        Object.keys(currentMonthCustomersMap).forEach(customerId => {
            if (!lastMonthCustomersMap[customerId]) {
                ret[customerId] = currentMonthCustomersMap[customerId][0].customer;
            }
        });
        return Object.values(ret).map(c => this.customerCard(c, "red"));
    };



    getHotCustomers = () => {
        const selectedDate = this.state.selectedDate ? this.state.selectedDate : this.state.date
        const currentMonthCustomersMap = this.getCustomerMapByMonth(
            selectedDate
        )
        const customerScheduleCountMap = {}
        Object.keys(currentMonthCustomersMap).forEach( customerId => {
            customerScheduleCountMap[customerId] = utils.sum(currentMonthCustomersMap[customerId], 'course_amount')
        })
        const ret = []
        Object.keys(currentMonthCustomersMap).forEach(customerId => {
            if(customerScheduleCountMap[customerId] >= 8){
                ret.push(currentMonthCustomersMap[customerId][0].customer)
            }
        })
        return ret.map(c => this.customerCard(c, "green"))
    }

    getCoolCustomers = () => {
        const selectedDate = this.state.selectedDate ? this.state.selectedDate : this.state.date
        const lastMonth = selectedDate.add(-1, "month");

        const currentMonthCustomersMap = this.getCustomerMapByMonth(
            selectedDate
        );
        const lastMonthCustomersMap = this.getCustomerMapByMonth(lastMonth);
        if (!Object.keys(lastMonthCustomersMap).length) {
            return [];
        }
        const ret = {};
        Object.keys(lastMonthCustomersMap).forEach(customerId => {
            if (!currentMonthCustomersMap[customerId]) {
                ret[customerId] = lastMonthCustomersMap[customerId][0].customer;
            }
        });
        return Object.values(ret).map(c => this.customerCard(c, "gray"));
    }

    getCustomerMapByMonth = day => {
        const ret = {};
        const year = day.format("YYYY");
        const month = day.format("M");

        const { scheduleCountByMonthPerCoach } = this.props.gym.report;
        scheduleCountByMonthPerCoach.forEach(row => {
            if (row.year == year && row.month == month) {
                if(!ret[row.customer_id]){
                    ret[row.customer_id] = []
                }
                ret[row.customer_id].push(row)
            }
        });
        return ret;
    };

    handleDateChange = date => {
        this.setState({ date }, () => {
            this.refreshYearData();
        });
    };

    durationFilter = () => {
        const { classes } = this.props;
        const filters = {
            6: "6个月",
            12: "12个月",
            24: "24个月"
        };
        const opts = Object.keys(filters).map(k => ({
            text: filters[k],
            onSelect: () => {
                this.setState(
                    {
                        duration: k
                    },
                    this.refreshYearData
                );
            }
        }));
        return (
            <div className={classes.filterItem}>
                <div className={classes.filterTitle}>间隔</div>
                <SimpleMenu
                    icon={<ExpandMore />}
                    textColor={"#333"}
                    displayText={filters[this.state.duration]}
                    items={opts}
                />
            </div>
        );
    };

    aggregateYearData = filter => {
        const { _, end } = utils.getMonthStartEnd(this.state.date);
        const endDay = dayjs(end);
        const data = {};
        utils.range(0, this.state.duration).forEach(i => {
            const day = endDay.add(-i, "month");
            const k = day.format("YYYY") + "-" + day.format("M");
            data[k] = {
                year: day.year(),
                month: day.month(),
                monthLabel: utils.getMonthLabel(day.month()),
                customers: {},
                courseCount: 0,
                customerCount: 0,
                customerLiveDays: 0,
                avgCustomerLiveDays: 0
            };
        });
        const { scheduleCountByMonthPerCoach } = this.props.gym.report;

        const filtered = scheduleCountByMonthPerCoach.filter(row => {
            if (this.state.coach == 0) {
                return true;
            }
            return row.coach_id == this.state.coach;
        });

        filtered.forEach(row => {
            const k = row["year(date)"] + "-" + row["month(date)"];
            if (!data[k]) {
                return;
            }
            if (!data[k].customers[row.customer_id]) {
                data[k].customerLiveDays += row.liveDays;
            }
            data[k].customers[row.customer_id] = 1;
            data[k].courseCount += row.course_amount;
        });
        Object.keys(data).forEach(k => {
            data[k].customerCount = Object.keys(data[k].customers).length;
            data[k].avgCustomerLiveDays += Math.floor(
                data[k].customerLiveDays / data[k].customerCount
            );
        });
        return data;
    };
    refreshYearData = () => {
        const { _, end } = utils.getMonthStartEnd(this.state.date);
        const start = dayjs(end)
            .add(-this.state.duration, "month")
            .add(1, "day")
            .format("YYYY-MM-DD");
        const params = {
            start,
            end,
            count: "coach_id,year(date),month(date),customer_id"
        };
        this.props.actions.loadGymScheduleCount(
            this.props.selectedGym.id,
            params
        );
    };

    getCoachQuadrantData = () => {
        const { scheduleCountByMonthPerCoach } = this.props.gym.report;
        const year = this.state.coachQuadrantFilter.year;
        const month = this.state.coachQuadrantFilter.month;
        const data = {};
        scheduleCountByMonthPerCoach.forEach(row => {
            if (row["year(date)"] == year && row["month(date)"] == month) {
                if (!data[row.coach_id]) {
                    data[row.coach_id] = {
                        x: 0,
                        y: 0,
                        coach: row.coach,
                        color: "#8e24aa"
                    };
                }
                data[row.coach_id].x += row.course_amount;
                data[row.coach_id].y += row.customer_amount;
            }
        });
        return Object.values(data);
    };

    coachYearMonthDropdown = () => {
        const { classes } = this.props;
        const { scheduleCountByMonthPerCoach } = this.props.gym.report;
        const displayText = (year, month) =>
            dayjs(year + "-" + month + "-1").format("YYYY-MM");
        const yearMonthSet = {};
        scheduleCountByMonthPerCoach.forEach(row => {
            const k = displayText(row["year(date)"], row["month(date)"]);
            yearMonthSet[k] = {
                year: row["year(date)"],
                month: row["month(date)"]
            };
        });
        const opts = Object.values(yearMonthSet).map(item => {
            return {
                text: displayText(item.year, item.month),
                onSelect: () => {
                    this.setState({
                        coachQuadrantFilter: item
                    });
                }
            };
        });
        opts.sort((a, b) => {
            return (
                new Date(a.text + "-01").getTime() -
                new Date(b.text + "-01").getTime()
            );
        });

        return (
            <SimpleMenu
                icon={<ExpandMore />}
                textColor={"#999"}
                displayText={displayText(
                    this.state.coachQuadrantFilter.year,
                    this.state.coachQuadrantFilter.month
                )}
                items={opts}
            />
        );
    };

    coachQuadrant = () => {
        const { classes } = this.props;
        const data = this.getCoachQuadrantData();
        const { xRange, yRange } = utils.getPointEdge(data);
        xRange[0] = 0;
        yRange[0] = 0;

        const _onHover = v => {
            this.setState({ chart1Value: v });
        };
        const _onBlur = () => this.setState({ chart1Value: null });
        const _hintFormat = v => {
            return [
                {
                    title: "教练",
                    value: this.state.chart1Value.coach.user.name
                },
                {
                    title: "课程",
                    value: this.state.chart1Value.x
                },
                {
                    title: "客户",
                    value: this.state.chart1Value.y
                }
            ];
        };

        return (
            <Card className={classes.coachQuadrantCard}>
                <Typography
                    className={classes.titleUnit + " " + classes.chartTitle}
                >
                    教练分析
                </Typography>
                <div className={classes.coachQuadrantFilter}>
                    {this.coachYearMonthDropdown()}
                </div>
                <QuadrantChart
                    title={""}
                    dataSet={data}
                    margin={36}
                    width={250}
                    xRange={xRange}
                    yRange={yRange}
                    xTitle={"课程"}
                    yTitle={"客户"}
                    onHover={_onHover}
                    onBlur={_onBlur}
                    hint={
                        this.state.chart1Value ? (
                            <Hint
                                value={this.state.chart1Value}
                                format={_hintFormat}
                            />
                        ) : null
                    }
                />
            </Card>
        );
    };

    lifeChart = () => {
        const { classes } = this.props;
        const rawData = this.aggregateYearData();

        const ascKeys = Object.keys(rawData).reverse();
        const xTickers = ascKeys.map(k => rawData[k].monthLabel);

        const avgCustomerLiveDays = ascKeys.map((k, i) => ({
            x: i,
            y: rawData[k].avgCustomerLiveDays || 0
        }));
        const yTitle = "天";
        const hintFormat = p => {
            return [
                {
                    title: "平均年龄",
                    value: p.y
                }
            ];
        };

        return (
            <Card className={classes.yearChartCard}>
                <Typography
                    className={classes.chartSubTitle}
                    color="textSecondary"
                >
                    {"活跃客户平均年龄"}
                </Typography>
                <Typography className={classes.chartTitle}>
                    <span>
                        {avgCustomerLiveDays[avgCustomerLiveDays.length - 1].y}
                        <span className={classes.titleUnit}>{yTitle}</span>
                    </span>
                    {/* <span className={classes.titleUnitInactive}>
                    </span> */}
                </Typography>
                <AreaChart
                    data={avgCustomerLiveDays}
                    yTitle={yTitle}
                    xTickers={xTickers}
                    chartClassName={classes.yearChart}
                    hintFormat={hintFormat}
                />
            </Card>
        );
    };

    yearChart = () => {
        const { classes } = this.props;
        const rawData = this.aggregateYearData();

        const ascKeys = Object.keys(rawData).reverse();
        const xTickers = ascKeys.map(k => rawData[k].monthLabel);

        const dataCourseCount = ascKeys.map((k, i) => ({
            x: i,
            y: rawData[k].courseCount
        }));
        const dataCustomerCount = ascKeys.map((k, i) => ({
            x: i,
            y: rawData[k].customerCount
        }));

        const dataSet = [dataCourseCount, dataCustomerCount];
        const yTitle = ["课程", "客户"];
        const hintFormat = p => {
            return [
                {
                    title: "时间",
                    value: xTickers[p.x]
                },
                {
                    title: "课程",
                    value: dataCourseCount[p.x].y
                },
                {
                    title: "客户",
                    value: dataCustomerCount[p.x].y
                }
            ];
        };
        const activeIndex = this.state.chart0ActiveIndex;
        const inactiveIndex = 1 - activeIndex;
        const dataSetForRender =
            activeIndex === 0
                ? [dataCourseCount, dataCustomerCount]
                : [dataCustomerCount, dataCourseCount];
        return (
            <Card className={classes.yearChartCard}>
                <Typography
                    className={classes.chartSubTitle}
                    color="textSecondary"
                >
                    耗课节数 | 活跃客户人数
                </Typography>
                <Typography className={classes.chartTitle}>
                    <span
                        className={
                            activeIndex === 1 ? classes.titleInactive : ""
                        }
                        onClick={() => this.setState({ chart0ActiveIndex: 0 })}
                    >
                        {dataSet[0][dataSet[0].length - 1].y}
                        <span
                            className={
                                activeIndex === 1
                                    ? classes.titleUnitInactive
                                    : classes.titleUnit
                            }
                        >
                            {yTitle[0]}
                        </span>
                    </span>
                    <span className={classes.titleSeparator}>|</span>
                    <span
                        className={
                            activeIndex === 0 ? classes.titleInactive : ""
                        }
                        onClick={() => this.setState({ chart0ActiveIndex: 1 })}
                    >
                        {dataSet[1][dataSet[1].length - 1].y}
                        <span
                            className={
                                activeIndex === 0
                                    ? classes.titleUnitInactive
                                    : classes.titleUnit
                            }
                        >
                            {yTitle[1]}
                        </span>
                    </span>
                </Typography>
                <DoubleAreaChart
                    dataSet={dataSetForRender}
                    yTitle={yTitle}
                    xTickers={xTickers}
                    onValueClick={(dataPoint) => {
                        const delta = xTickers.length - dataPoint.x - 1
                        const selected = this.state.date.add(-delta,'month')
                        // console.log(selected.format('YYYY-MM-DD'))
                        this.setState({selectedDate: selected})
                    }}
                    chartClassName={classes.yearChart}
                    hintFormat={hintFormat}
                    toggle={() =>
                        this.setState({ chart0ActiveIndex: 1 - activeIndex })
                    }
                />
            </Card>
        );
    };

    customerListTab = () => {
        const { classes } = this.props;
        const selectedDate = this.state.selectedDate ? this.state.selectedDate : this.state.date
        const dots = [
            {
                name: "新活跃",
                color: "red",
                getCustomers: this.getNewCustomers,
                description: '上月未出勤但本月出勤的客户'

            },
            {
                name: "高活跃",
                color: "green",
                getCustomers: this.getHotCustomers,
                description: '本月出勤超过8次的客户'
            },
            {
                name: "新冷却",
                color: "gray",
                getCustomers: this.getCoolCustomers,
                description: '上月出勤但本月未出勤的客户'
            }
        ];

        return (
            <React.Fragment>
                <div className={classes.dotTabs}>
                    {dots.map((dot, i) => (
                        <div
                            key={dot.color}
                            onClick={() => this.setState({activeCustomerTab: i})}
                            className={classes.dotTab + ' ' + (i === this.state.activeCustomerTab ? classes.activeTab : '') }>
                            <div style={{margin:'auto'}}>
                                <span
                                    className={classes.dotTabDot}
                                    style={{ background: dot.color }}
                                />
                                <div className={classes.dotTabTitle}>{dot.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className={classes.tabDescription}>{selectedDate.format('YYYY-MM')}</p>
                <p className={classes.tabDescription}>{dots[this.state.activeCustomerTab].description}</p>
                <List>{dots[this.state.activeCustomerTab].getCustomers()}</List>
            </React.Fragment>
        );
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.filterBar()}
                <div className={classes.container}>
                    <div className={classes.leftContainer}>
                        {this.yearChart()}
                        {this.lifeChart()}
                        {this.coachQuadrant()}
                    </div>
                    <div className={classes.rightContainer}>
                        <Card style={{ flex: 1 }}>
                            {this.customerListTab()}
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = store => {
    return {
        selectedGym: store.setting.selectedGym,
        gym: store.gym
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const LinkedOverview = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Overview);

export default withStyles(styles)(LinkedOverview);
