import React from "react";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import Paper from '@material-ui/core/Paper';
import Tabs from "-components/CustomTabs/CustomTabs.jsx";
import Table from "-components/Table/Table.jsx";
import * as utils from "-utils";
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import GridItem from "-components/Grid/GridItem.jsx";
import GridContainer from "-components/Grid/GridContainer.jsx";

class MonthlyReport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            selectedTabIndex: 0
        };
        this.refreshFunMap = [
            this.loadSale,  // refresh sale
            () => { //refresh coach
                let params = utils.getMonthStartEnd(this.state.date);
                params.count = 'coach_id';
                this.props.actions.loadGymScheduleCount(this.props.selectedGym.id, params);
            },
            () => { //refresh customer
                let params = utils.getMonthStartEnd(this.state.date);
                params.count = 'customer_id';
                this.props.actions.loadGymScheduleCount(this.props.selectedGym.id, params);
            },
        ];
    }

    handleDateChange = (date) => {
        this.setState({ date }, () => {
            this.refresh();
        });
    };

    refresh = () => {
        this.refreshFunMap[this.state.selectedTabIndex] && this.refreshFunMap[this.state.selectedTabIndex]();
    };

    loadSale = () => {
        this.props.actions.loadGymOrders(this.props.selectedGym.id, utils.getMonthStartEnd(this.state.date));
    };

    getSaleTab = () => {
        let orders = this.props.gym.report.orders;
        if (!orders) {
            return <p>No Orders</p>;
        }
        let header = ['Price', 'Booked/Total', 'Coach', 'Created'];
        let tableData = orders.map(r => [r.price + '', r.booked_amount + ' / ' + r.course_amount, r.coach.user.name, r.created_at]);

        return <Table classes={{ tableResponsive: 'no-margin-top' }}
            tableHeaderColor='primary'
            tableHead={header}
            tableData={tableData}
        />;
    };

    getScheduleCountByCoachTab = () => {
        let groups = this.props.gym.report.scheduleCountByCoach;
        if (!groups) {
            return <p>No Orders</p>;
        }
        let header = ['Coach', 'Count'];
        let tableData = [];
        let chartData = {
            labels: [],
            series: [],
        };
        groups.forEach(r => {
            tableData.push([r.coach.user.name + '', r.course_amount + '']);
            chartData.labels.push(r.coach.user.name);
            chartData.series.push(r.course_amount);
        });


        let chartOptions = {
            labelInterpolationFnc: function (value) {
                return value
            }
        }

        return <GridContainer alignItems='center'>
            <GridItem xs={12} sm={12} md={8}>
                <Table classes={{ tableResponsive: 'no-margin-top' }}
                    tableHeaderColor='primary'
                    tableHead={header}
                    tableData={tableData}
                /></GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <ChartistGraph
                    className="ct-chart"
                    data={chartData}
                    type="Pie"
                    options={chartOptions}
                /></GridItem>
        </GridContainer >;
    };

    getScheduleCountByCustomerTab = () => {
        let groups = this.props.gym.report.scheduleCountByCustomer;
        if (!groups) {
            return <p>No Orders</p>;
        }
        let header = ['Coach', 'Count'];
        let tableData = groups.map(r => [r.customer.name + '', r.course_amount + '']);

        return <Table classes={{ tableResponsive: 'no-margin-top' }}
            tableHeaderColor='primary'
            tableHead={header}
            tableData={tableData}
        />;
    };

    tapTab = (tabIndex) => {
        this.setState({ selectedTabIndex: tabIndex }, () => {
            this.refresh();
        });
    };

    componentWillMount() {
        this.refresh();
    }

    render() {
        const dateSelector = (<MuiPickersUtilsProvider utils={DayjsUtils} locale={'zh-cn'}>
            <DatePicker format="MM/YYYY" className="report-month-selector" openTo="month" views={["year", "month"]} value={this.state.date} onChange={this.handleDateChange} />
        </MuiPickersUtilsProvider>);

        return (<Paper square>
            <Tabs
                title={dateSelector}
                headerColor="primary"
                onSwitch={this.tapTab}
                tabs={[{
                    tabName: "Sale",
                    tabContent: this.getSaleTab(),
                }, {
                    tabName: "Coach",
                    tabContent: this.getScheduleCountByCoachTab(),
                }, {
                    tabName: "Customer",
                    tabContent: this.getScheduleCountByCustomerTab(),
                }]}
            />
        </Paper>);
    }
}

const mapStoreToProps = (store) => {
    return {
        selectedGym: store.setting.selectedGym,
        gym: store.gym,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const LinkedMonthlyReport = connect(
    mapStoreToProps,
    mapDispatchToProps
)(MonthlyReport);

export default LinkedMonthlyReport;