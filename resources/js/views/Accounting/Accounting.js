import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions'
import { withStyles } from "@material-ui/core";
import Button from "-components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add";
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue';
import * as consts from '-const';
import * as utils from '-utils';
import MaterialTable from 'material-table';
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";


const styles = {
    datePicker: {
        width: 62,
        position: 'relative',
        top: 5,
        marginRight: 200,
    },
    actionBtn: {
        float: 'right'
    },
    search: {
        borderBottomColor: '#9c27b0'
    }
}

class Accounting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
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

    handleDateChange = (date) => {
        this.setState({ date }, () => {
            this.props.actions.loadGymAccounting(this.props.selectedGym.id, utils.getMonthStartEnd(this.state.date));
        });
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

    getTable = () => {
        const columns = [
            { title: 'Amount', field: 'amount' },
            { title: 'Category', field: 'category' },
            { title: 'Detail', field: 'detail' },
            { title: 'Operator', field: 'op.name' },
            { title: 'Time', field: 'created_at' },
        ];
        const data = this.props.gym.accounting;
        const dateSelector = (<MuiPickersUtilsProvider utils={DayjsUtils} locale={'zh-cn'}>
            <DatePicker className={this.props.classes.datePicker} format="MM/YYYY" openTo="month" views={["year", "month"]} value={this.state.date} onChange={this.handleDateChange} />
        </MuiPickersUtilsProvider>);
        const btns = (<React.Fragment>
            {dateSelector}
            <Button size='sm' color='transparentGray' onClick={this.tapCreateIncome}><Add size='sm' /> Income</Button>
            <Button size='sm' color='transparentPrimary' onClick={this.tapCreateExpenditure}><Add /> Expenditure</Button>
        </React.Fragment>);
        return <div><MaterialTable
            title={btns}
            columns={columns}
            data={data}
        /></div>;
    };

    componentWillMount() {
        this.props.actions.loadGymAccounting(this.props.selectedGym.id, utils.getMonthStartEnd(this.state.date));
    }

    render() {
        return (<React.Fragment>
            {this.state.showNewExpenditure && this.getNewExpenditureDialogue()}
            {this.state.showNewIncome && this.getNewIncomeDialogue()}
            {!this.state.showNewExpenditure && !this.state.showNewIncome && this.getTable()}
        </React.Fragment>)
    }
}

export default withStyles(styles)(Accounting);
