import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import * as utils from '-utils'
import dayjs from 'dayjs'
import Card from '@material-ui/core/Card';
import { withStyles } from "@material-ui/core";
import {
    XYPlot,
    XAxis,
    YAxis,
    AreaSeries,
    HorizontalGridLines,
    LineMarkSeries,
    GradientDefs,
    VerticalBarSeries
  } from 'react-vis'
import {CardContent} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

const styles = {
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
    yearChartCard: {
        maxWidth: 740,
        marginTop: 20,
        paddingLeft: 0,
        paddingTop: 16
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
            date: dayjs(),
            yearChartData: []
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
                        <XYPlot margin={{right: 20}} width={700} height={200} yDomain={domainSet[activeIndex]} className={classes.yearChart}>
                            <XAxis tickSize={2} tickFormat={v => xTickers[v]} />
                            <HorizontalGridLines tickTotal={5} style={{strokeDasharray:"2"}}/>
                            <YAxis tickSize={2} tickTotal={3} title={yTitle[activeIndex]}/>
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
                                data={dataSet[activeIndex]}
                            />
                        </XYPlot>
                    </div>
                    <div style={{ position: 'absolute', top: 0 }}>
                        <XYPlot margin={{right: 20}} width={700} height={200} yDomain={domainSet[inactiveIndex]} className={classes.yearChart}>
                            <YAxis tickSize={2} tickTotal={3} orientation="right" title={yTitle[inactiveIndex]}/>
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
                </div>
            </Card>
    }

    render(){
        return this.yearChart()
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