import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions'
import Accounting from './Accounting';
import Reimbursement from './Reimbursement';
import SalarySummary from './SalarySummary';
import SalarySetting from './SalarySetting';
import Tabs from "-components/CustomTabs/CustomTabs.jsx";
import i18N from '../../lang'

const L = i18N('AccountingPage')
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
            title={''}
            headerColor="primary"
            onSwitch={this.tapTab}
            tabs={[{
                tabName: L.salary,
                tabContent: <SalarySummary {...this.props}/>
            }, {
                tabName: L.reimbursement,
                tabContent: <Reimbursement {...this.props}/>,
            }, {
                tabName: L.accounting,
                tabContent: <Accounting {...this.props}/>,
            },{
                tabName: L.salarySetting,
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
