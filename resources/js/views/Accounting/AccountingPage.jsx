import React from 'react'
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import Accounting from './Accounting'
import Reimbursement from './Reimbursement'
import SalarySummary from './SalarySummary'
import SalarySetting from './SalarySetting'
import i18N from '../../lang'
import LightTabs from '../../components/LightTabs/LightTabs'
import { Button } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore'
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import * as utils from '-utils'

const PREFIX = 'AccountingPage';

const classes = {
    filterItem: `${PREFIX}-filterItem`,
    filterTitle: `${PREFIX}-filterTitle`,
    filterDropdownIcon: `${PREFIX}-filterDropdownIcon`
};

const StyledSalarySetting = styled(SalarySetting)({
    [`& .${classes.filterItem}`]: {
        maxWidth: 150,
        marginLeft: 24,
        marginTop: 8
    },
    [`& .${classes.filterTitle}`]: {
        width: 60,
        lineHeight: '12px',
        textAlign: 'left',
        fontSize: 12,
        color: '#999'
    },
    [`& .${classes.filterDropdownIcon}`]: {
        marginLeft: 6
    }
});

const L = i18N('AccountingPage')
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
        const { } = this.props
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>财务</span>
                <div className={classes.filterItem}>
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale={'zh-cn'}
                    >
                        <DatePicker
                            enableAccessibleFieldDOMStructure={false}
                            format="MM/YYYY"
                            slots={{
                                textField: React.forwardRef(function DateButton(props, ref) {
                                    const { onClick, value } = props
                                    return (
                                        <Button
                                            ref={ref}
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
                                    )
                                })
                            }}
                            className={classes.dateFilter}
                            style={{
                                maxWidth: 60,
                                position: 'relative'
                            }}
                            openTo="month"
                            views={['year', 'month']}
                            value={dayjs(this.state.date)}
                            onChange={this.handleDateChange}
                            autoOk
                        />
                    </LocalizationProvider>
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
                        tabContent: <StyledSalarySetting date={this.state.date} />
                    }
                ]}
            />
        );
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

export default (LinkedAccountingPage)
