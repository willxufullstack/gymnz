

import React from "react";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";

import Paper from '@material-ui/core/Paper';
import Tabs from "-components/CustomTabs/CustomTabs.jsx";
import Table from "-components/Table/Table.jsx";
import * as utils from "-utils";

class MonthlyReport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            selectedTabIndex: 0
        };
    }

    loadSale = () => {
        this.props.actions.loadGymOrders(this.props.selectedGym.id, utils.getMonthStartEnd(this.state.date));
    };

    getSaleTab = () => {
        if(this.state.selectedTabIndex !== 0) {
            return 'hide';
        }
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
        if(this.state.selectedTabIndex !== 1) {
            return 'hide';
        }
        let groups = this.props.gym.report.scheduleCountByCoach;
        if (!groups) {
            return <p>No Orders</p>;
        }
        let header = ['Coach', 'Count'];
        let tableData = groups.map(r => [r.coach.user.name + '', r.course_amount + '']);

        return <Table classes={{ tableResponsive: 'no-margin-top' }}
            tableHeaderColor='primary'
            tableHead={header}
            tableData={tableData}
        />;
    };

    getScheduleCountByCustomerTab = () => {
        if(this.state.selectedTabIndex !== 2) {
            return 'hide';
        }

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
        this.setState({selectedTabIndex: tabIndex});
        let params = utils.getMonthStartEnd(this.state.date);
        switch (tabIndex) {
            case 0:
                this.loadSale();
                break;
            case 1:
                params.count = 'coach_id';
                this.props.actions.loadGymScheduleCount(this.props.selectedGym.id, params);
                break;

            case 2:
                params.count = 'customer_id';
                this.props.actions.loadGymScheduleCount(this.props.selectedGym.id, params);
                break;

            default:
                break;
        }
    };

    componentWillMount() {
        this.loadSale(this.state.date);
    }

    render() {
        return (<Paper square>
            <Tabs
                title={'Orders'}
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