import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/gym';
import Button from "-components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add";
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue';
import * as consts from '-const';
import * as utils from '-utils';

class Accounting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewExpenditure: false,
            showNewIncome: false
        };
    }

    tapCreateExpenditure = () => {
        this.setState({ showNewExpenditure: true });
    };

    tapCreateIncome = () => {
        this.setState({ showNewIncome: true });
    };

    saveExpenditure = (data) => {
        data.amount *= -1;
        this.props.actions.createAccountingRow(this.props.selectedGym.id, data)
            .then(() => {
                this.setState({ showNewExpenditure: false });
            });
    }

    saveIncome = (data) => {
        this.props.actions.createAccountingRow(this.props.selectedGym.id, data)
            .then(() => {
                this.setState({ showNewIncome: false });
            });
    }

    getNewIncomeDialogue = () => {
        const params = {
            onSave: this.saveExpenditure,
            onCancel: () => {
                this.setState({ showNewIncome: false });
            },
            title: 'New Expenditure',
            inputFields: [{
                name: 'category',
                label: 'Category',
                options: utils.arrayToOptions(consts.AccoutingIncomeCategoryOptions),
            }, {
                name: 'amount',
                label: 'Amount',
                type: 'decimal'
            }, {
                name: 'detail',
                label: 'detail',
                type: 'text',
            }]
        };
        return <CreateNewDialogue {...params} />;
    };

    getNewExpenditureDialogue = () => {
        const params = {
            onSave: this.saveExpenditure,
            onCancel: () => {
                this.setState({ showNewExpenditure: false });
            },
            title: 'New Expenditure',
            inputFields: [{
                name: 'category',
                label: 'Category',
                options: utils.arrayToOptions(consts.AccoutingExpenditureCategoryOptions),
            }, {
                name: 'amount',
                label: 'Amount',
                type: 'decimal'
            }, {
                name: 'detail',
                label: 'detail',
                type: 'text',
            }]
        };
        return <CreateNewDialogue {...params} />;
    };

    render() {
        return (<React.Fragment>
            {this.state.showNewExpenditure && this.getNewExpenditureDialogue()}
            {this.state.showNewIncome && this.getNewIncomeDialogue()}
            <Button color='primary' onClick={this.tapCreateExpenditure}><Add /> Expenditure</Button>
            <Button color='transparentPrimary' onClick={this.tapCreateIncome}><Add /> Income</Button>
        </React.Fragment>)
    }
}

const mapStoreToProps = (store) => {
    return {
        gym: store.gym,
        selectedGym: store.setting.selectedGym
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const LinkedAccounting = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Accounting);

export default LinkedAccounting;