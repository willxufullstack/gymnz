import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import Tabs from '-components/CustomTabs/CustomTabs.jsx'
import Table from '-components/Table/Table.jsx'
import * as utils from '-utils'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'

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
            // this.refresh()
            this.refershMonthSchedule()
        })
    }

    handleDateChange = date => {
        this.setState({ date }, () => {
            this.refershMonthSchedule()
        })
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

export default LinkedHistory
