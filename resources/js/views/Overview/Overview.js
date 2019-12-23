import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import * as utils from '-utils'
import dayjs from 'dayjs'
import Card from '@material-ui/core/Card';
import { withStyles } from "@material-ui/core";
import ExpandMore from '@material-ui/icons/ExpandMore';
import SimpleMenu from "-components/SimpleMenu/SimpleMenu";
import {
    XYPlot,
    XAxis,
    YAxis,
    AreaSeries,
    HorizontalGridLines,
    LineMarkSeries,
    GradientDefs,
    Hint
  } from 'react-vis'
import {CardContent} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import QuadrantChart from '../History/QuadrantChart'

const styles = {
    coachQuadrantFilter: {
        position: 'absolute',
        top: 4,
        right: 6,
        zIndex: 1000
    },
    chartTitle: {
        color: '#8e24aa',
        paddingTop: 0,
        paddingLeft: 38,
        fontWeight: '900',
        fontSize: 32,
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
        marginLeft: 4
    },
    titleInactive: {
        color: '#aaa',
    },
    titleUnitInactive: {
        fontSize: 12,
        color: '#aaa',
        marginLeft: 4
    },
    yearChartCard: {
        maxWidth: 740,
        marginTop: 20,
        paddingLeft: 0,
        paddingTop: 16
    },
    coachQuadrantCard: {
        maxWidth: 300,
        marginTop: 20,
        paddingTop: 16,
        position: 'relative'
    },
    yearChart: {
        // margin: 'auto'

    },
}

class Overview extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chart0ActiveIndex: 0,
            chart0Value: null,
            chart1Value: null,
            date: dayjs(),
            yearChartData: [],
            coachQuadrantFilter: {
                year: dayjs().format('YYYY'),
                month: dayjs().format('M')
            }
        }
    }

    componentWillMount() {
        this.refreshYearData()
    }


    aggregateYearData = (filter) => {
        const {_, end} = utils.getMonthStartEnd(this.state.date)
        const endDay = dayjs(end)
        const data = {}
        utils.range(0, 6).forEach(i => {
            const day = endDay.add(-i, 'month')
            const k = day.format('YYYY') + '-' + day.format('M')
            data[k] = {
                year: day.year(),
                month: day.month(),
                monthLabel: utils.getMonthLabel(day.month()),
                courseCount: 0,
                customerCount: 0
            }
        })
        const {scheduleCountByMonthPerCoach} = this.props.gym.report
        scheduleCountByMonthPerCoach.forEach(row => {
            const k = row['year(date)'] + '-' + row['month(date)']
            data[k].courseCount += row.course_amount
            data[k].customerCount += row.customer_amount
        })
        return data
    }
    refreshYearData = () => {
        const {_, end} = utils.getMonthStartEnd(this.state.date)
        const start = dayjs(end).add(-6, 'month').add(1, 'day').format('YYYY-MM-DD')
        const params = {
            start,
            end,
            count: 'coach_id,year(date),month(date)'
        }
        this.props.actions.loadGymScheduleCount(
            this.props.selectedGym.id,
            params
        )
    }

    getCoachQuadrantData = () => {
        const {scheduleCountByMonthPerCoach} = this.props.gym.report
        const year = this.state.coachQuadrantFilter.year
        const month = this.state.coachQuadrantFilter.month
        const data = []
        scheduleCountByMonthPerCoach.forEach( row => {
            if(row['year(date)'] == year && row['month(date)'] == month) {
                data.push({
                    x: row.course_amount,
                    y: row.customer_amount,
                    coach: row.coach,
                    color: '#8e24aa'
                })
            }
        })
        return data
    }

    coachYearMonthDropdown = () => {
        const {classes} = this.props
        const {scheduleCountByMonthPerCoach} = this.props.gym.report
        const displayText = (year, month) => year + '-' + month
        const yearMonthSet = {}
        scheduleCountByMonthPerCoach.forEach(row => {
            const k = displayText(row['year(date)'], row['month(date)'])
            yearMonthSet[k] = {year: row['year(date)'], month: row['month(date)']}
        })
        const opts = Object.values(yearMonthSet).map( item =>{
            return {
                text: displayText(item.year, item.month),
                onSelect: () => {
                    this.setState({
                        coachQuadrantFilter: item
                    })
                }
            }
        })

        return <SimpleMenu
            icon={<ExpandMore/>}
            textColor={'#999'}
            displayText={displayText(this.state.coachQuadrantFilter.year, this.state.coachQuadrantFilter.month)}
            items={opts} />
    }

    coachQuadrant = () => {
        const {classes} = this.props
        const data = this.getCoachQuadrantData()
        const {xRange, yRange} = utils.getPointEdge(data)
        xRange[0] = 0
        yRange[0] = 0

        const _onHover = (v) => {
            this.setState({chart1Value: v})
        }
        const _onBlur = () => this.setState({chart1Value: null})
        const _hintFormat = (v) => {
            return [
            {
                title: '教练',
                value: this.state.chart1Value.coach.user.name
            },
            {
                title: '课程',
                value: this.state.chart1Value.x
            },{
                title: '客户',
                value: this.state.chart1Value.y
            }]
        }


        return<Card className={classes.coachQuadrantCard}>
                <Typography className={classes.titleUnit + ' ' + classes.chartTitle}>教练分析</Typography>
                <div className={classes.coachQuadrantFilter}>{this.coachYearMonthDropdown()}</div>
                <QuadrantChart
                    title={''}
                    dataSet={data}
                    margin={36}
                    width={250}
                    xRange={xRange}
                    yRange={yRange}
                    xTitle={"课程"}
                    yTitle={"客户"}
                    onHover={_onHover}
                    onBlur={_onBlur}
                    hint={this.state.chart1Value ? <Hint value={this.state.chart1Value} format={_hintFormat} /> : null}
                />

             </Card>
    }


    yearChart = () => {
        const {classes} = this.props
        const rawData = this.aggregateYearData()

        const ascKeys = Object.keys(rawData).reverse()
        const xTickers = []
        let maxCourseCount = 0
        let minCourseCount = Number.MAX_SAFE_INTEGER;

        let maxCustomerCount = 0
        let minCustomerCount = Number.MAX_SAFE_INTEGER;

        const dataCourseCount = ascKeys.map( (k, i) => {
            xTickers.push(rawData[k].monthLabel)
            const value = rawData[k].courseCount
            maxCourseCount = maxCourseCount < value ? value : maxCourseCount
            minCourseCount = minCourseCount > value ? value : minCourseCount
            return {
                x: i,
                y: value
            }
        })
        const dataCustomerCount = ascKeys.map( (k, i) => {
            const value = rawData[k].customerCount
            maxCustomerCount = maxCustomerCount < value ? value : maxCustomerCount
            minCustomerCount = minCustomerCount > value ? value : minCustomerCount
            return {
                x: i,
                y: value
            }
        })


        const deltaCourseCount = Math.floor(maxCourseCount - minCourseCount) * 0.3
        const deltaCustomerCount = Math.floor(maxCustomerCount - minCustomerCount) * 0.3
        const dataSet = [dataCourseCount, dataCustomerCount]
        const domainSet = [
            [minCourseCount - deltaCourseCount, maxCourseCount + deltaCourseCount],
            [minCustomerCount - deltaCustomerCount, maxCustomerCount + deltaCustomerCount]]
        const yTitle = ['课程', '客户']

        const activeIndex = this.state.chart0ActiveIndex ? this.state.chart0ActiveIndex: 0
        const inactiveIndex = 1 - activeIndex
        const _onHover = (v) => {
            this.setState({chart0Value: v})
        }
        const _onBlur = () => this.setState({chart0Value: null})
        const _hintFormat = () => {
            return [{
                title: '课程',
                value: dataCourseCount[this.state.chart0Value.x].y
            },{
                title: '客户',
                value: dataCustomerCount[this.state.chart0Value.x].y
            }]
        }
        return <Card className={classes.yearChartCard}>
                <Typography className={classes.chartTitle}>
                   <span className={activeIndex === 1 ? classes.titleInactive : ''} onClick={()=>this.setState({chart0ActiveIndex: 0})}>
                        {dataSet[0][dataSet[0].length-1].y}
                        <span className={activeIndex === 1 ? classes.titleUnitInactive : classes.titleUnit}>{yTitle[0]}</span>
                    </span>
                    <span className={classes.titleSeparator}>|</span>
                    <span className={activeIndex === 0 ? classes.titleInactive : ''} onClick={()=>this.setState({chart0ActiveIndex: 1})}>
                        {dataSet[1][dataSet[1].length-1].y}
                        <span className={activeIndex === 0 ? classes.titleUnitInactive : classes.titleUnit}>{yTitle[1]}</span>
                    </span>
                </Typography>
                <Typography className={classes.chartSubTitle} color="textSecondary">
                    6个月统计
                </Typography>
                <div style={{ position: 'relative' }}>
                    <div>
                        <XYPlot margin={{right: 30}} width={700} height={200} yDomain={domainSet[inactiveIndex]} className={classes.yearChart}>
                            <YAxis width={40} tickSize={2} tickTotal={5} orientation="right" title={yTitle[inactiveIndex]}/>
                            <GradientDefs>
                                <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#aaa" stopOpacity={0.3}/>
                                <stop offset="80%" stopColor="#aaa" stopOpacity={0.05} />
                                <stop offset="100%" stopColor="#fff" stopOpacity={0} />
                                </linearGradient>
                            </GradientDefs>
                            <AreaSeries
                                color={'url(#blueGradient)'}
                                data={dataSet[inactiveIndex]}
                            />
                        </XYPlot>
                    </div>
                    <div style={{ position: 'absolute', top: 0 }} onClick={()=>this.setState({chart0ActiveIndex: 1-activeIndex})}>
                        <XYPlot margin={{right: 30}} width={700} height={200} yDomain={domainSet[activeIndex]} className={classes.yearChart}>
                            <XAxis tickSize={2} tickFormat={v => xTickers[v]} />
                            <HorizontalGridLines tickTotal={5} style={{strokeDasharray:"2"}}/>
                            <YAxis tickSize={2} tickTotal={5} title={yTitle[activeIndex]}/>
                            <GradientDefs>
                                <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#8e24aa" stopOpacity={0.3}/>
                                <stop offset="80%" stopColor="#8e24aa" stopOpacity={0.05} />
                                <stop offset="100%" stopColor="#fff" stopOpacity={0} />
                                </linearGradient>
                            </GradientDefs>
                            <AreaSeries
                                color={'url(#CoolGradient)'}
                                data={dataSet[activeIndex]}
                            />
                            <LineMarkSeries
                                lineStyle={{
                                    strokeWidth: '2px',
                                    stroke: '#8e24aa'
                                }}
                                markStyle={{
                                    stroke: 'rgba(141,44,168, 0.4)',
                                    strokeWidth: '6px',
                                    fill: '#8e24aa',
                                }}
                                onValueMouseOver={_onHover}
                                onValueMouseOut={_onBlur}
                                data={dataSet[activeIndex]}
                            />
                            {this.state.chart0Value ? <Hint value={this.state.chart0Value} format={_hintFormat} /> : null}
                        </XYPlot>
                    </div>
                </div>
            </Card>
    }

    render(){
        return <React.Fragment>
            {this.yearChart()}
            {this.coachQuadrant()}
        </React.Fragment>
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

const LinkedOverview = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Overview)

export default withStyles(styles)(LinkedOverview)