import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions'
import Accounting from './Accounting';
import Reimbursement from './Reimbursement';
import SalarySummary from './SalarySummary';
import SalarySetting from './SalarySetting';
import Tabs from "-components/CustomTabs/CustomTabs.jsx";



class AccountingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTabIndex: 0,
        };
    }

    tapTab = (tabIndex) => {
        this.setState({ selectedTabIndex: tabIndex });
    };

    render() {
        return <Tabs
            title={'Finance'}
            headerColor="primary"
            onSwitch={this.tapTab}
            tabs={[{
                tabName: 'Salary',
                tabContent: <SalarySummary {...this.props}/>
            }, {
                tabName: "Reimbursement",
                tabContent: <Reimbursement {...this.props}/>,
            }, {
                tabName: "Accounting",
                tabContent: <Accounting {...this.props}/>,
            },{
                tabName: 'Salary Setting',
                tabContent: <SalarySetting {...this.props}/>
            },]}
        />;

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

const LinkedAccountingPage = connect(
    mapStoreToProps,
    mapDispatchToProps
)(AccountingPage);

export default LinkedAccountingPage;
