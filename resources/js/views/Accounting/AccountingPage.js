import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import Accounting from './Accounting'
import Reimbursement from './Reimbursement'
import SalarySummary from './SalarySummary'
import SalarySetting from './SalarySetting'
import i18N from '../../lang'
import LightTabs from '../../components/LightTabs/LightTabs'
import { withStyles, Button } from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import dayjs from 'dayjs'
import * as utils from '-utils'

const L = i18N('AccountingPage')
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
    }
}
class AccountingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            selectedTabIndex: 0
        }
    }

    tapTab = tabIndex => {
        this.setState({ selectedTabIndex: tabIndex })
    }

    refresh = () => {
        if (this.props.gym.coaches) {
            this.props.actions.loadCoach(this.props.selectedGym.id)
        }
        this.props.actions.loadGymSalary(this.props.selectedGym.id, {
            month: dayjs(this.state.date).format('YYYY-MM')
        })
        this.props.actions.loadGymReimbursement(
            this.props.selectedGym.id,
            utils.getMonthStartEnd(this.state.date)
        )
        this.props.actions.loadGymAccounting(
            this.props.selectedGym.id,
            utils.getMonthStartEnd(this.state.date)
        )
    }

    componentDidMount() {
        this.refresh()
    }

    handleDateChange = date => {
        this.setState({ date }, this.refresh)
    }

    dateSelector = () => {
        const { classes } = this.props
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>财务</span>
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
            </div>
        )
    }

    render() {
        return (
            <LightTabs
                title={this.dateSelector()}
                onSwitch={this.tapTab}
                tabs={[
                    {
                        tabName: L.salary,
                        tabContent: <SalarySummary date={this.state.date} />
                    },
                    {
                        tabName: L.reimbursement,
                        tabContent: <Reimbursement date={this.state.date} />
                    },
                    {
                        tabName: L.accounting,
                        tabContent: <Accounting date={this.state.date} />
                    },
                    {
                        tabName: L.salarySetting,
                        tabContent: <SalarySetting date={this.state.date} />
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

const LinkedAccountingPage = connect(
    mapStoreToProps,
    mapDispatchToProps
)(AccountingPage)

export default withStyles(styles)(LinkedAccountingPage)
