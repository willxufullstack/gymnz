import React from "react";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
// react plugin for creating charts
import Paper from '@material-ui/core/Paper';
import Tabs from "-components/CustomTabs/CustomTabs.jsx";
import SalarySetting from "./SalarySetting";
import SalarySummary from "./SalarySummary";

class Salary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTabIndex: 0
        };
        this.refreshFunMap = [
            () => {
            },
        ];
    }

    refresh = () => {
        this.refreshFunMap[this.state.selectedTabIndex] && this.refreshFunMap[this.state.selectedTabIndex]();
    };

    getSettingTab = () => {
        return <SalarySetting actions={this.props.actions} selectedGym={this.props.selectedGym} salarySettings={this.props.gym.salarySettings} />;
    };

    getSummaryTab = () => {
        return <SalarySummary {...this.props} />;
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
        return (<Paper square>
            <Tabs
                title={'Salary'}
                headerColor="primary"
                onSwitch={this.tapTab}
                tabs={[{
                    tabName: "Summary",
                    tabContent: this.getSummaryTab(),
                }, {
                    tabName: "Setting",
                    tabContent: this.getSettingTab(),
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

const LinkedSalary = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Salary);

export default LinkedSalary;