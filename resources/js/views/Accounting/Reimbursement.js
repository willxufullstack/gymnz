import React from "react";
import { withStyles } from "@material-ui/core";
import Button from "-components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add";
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue';
import Confirmation from '-components/CustomDialogues/Confirmation';
import Pay from '@material-ui/icons/PlayCircleOutline';
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


class Reimbursement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showNewReimbursement: false,
            showPayConfirmation: false
        };
    }

    getNewReimbursementDialog = () => {
        const fields = {
            onCancel: () => {
                this.setState({ showNewReimbursement: false });
            },
            onSave: (data) => {
                this.props.actions.createReimbursement(this.props.selectedGym.id, data)
                    .then(() => {
                        this.setState({ showNewReimbursement: false });
                    });
            },
            title: 'Create Reimbursement',
            dialogue: true,
            inputFields: [{
                name: 'coach_id',
                label: 'Owner',
                options: this.props.gym.coaches.map((coach) => { return { value: coach.id, label: coach.user.name } }),
            }, {
                name: 'category',
                label: 'Category',
                options: utils.arrayToOptions(consts.AccoutingExpenditureCategoryOptions),
            }, {
                name: 'amount',
                label: 'Amount',
                type: 'decimal'
            }, {
                name: 'detail',
                label: 'Detail',
                type: 'text',
            }]
        };
        return <CreateNewDialogue {...fields} />
    };

    handleDateChange = (date) => {
        this.setState({ date }, () => {
            this.props.actions.loadGymReimbursement(this.props.selectedGym.id, utils.getMonthStartEnd(this.state.date));
        });
    };

    tapPay = (reimbursement) => {
        this.setState({ showPayConfirmation: reimbursement });
    };

    pay = () => {
        this.props.actions.payReimbursement(this.props.selectedGym.id, this.state.showPayConfirmation.id)
        .then(()=>{
            this.setState({ showPayConfirmation: false });
        });
    };

    getPayConfirmation = () => {
        return <Confirmation
            message='Have you finished the payment?'
            onConfirm={this.pay}
            onCancel={() => { this.setState({ showPayConfirmation: false }) }}
        />;
    };

    getTable = () => {
        const columns = [
            { title: 'Amount', field: 'amount' },
            { title: 'Category', field: 'category' },
            { title: 'Detail', field: 'detail' },
            { title: 'Operator', field: 'op.name' },
            { title: 'Time', field: 'created_at' },
            { title: '', render: rowData => <Button onClick={() => this.tapPay(rowData)} color='transparentPrimary'><Pay/>Pay</Button> }
        ];
        const data = this.props.gym.reimbursements;
        const dateSelector = (<MuiPickersUtilsProvider utils={DayjsUtils} locale={'zh-cn'}>
            <DatePicker className={this.props.classes.datePicker} format="MM/YYYY" openTo="month" views={["year", "month"]} value={this.state.date} onChange={this.handleDateChange} />
        </MuiPickersUtilsProvider>);
        const btns = (<React.Fragment>
            {dateSelector}
            <Button color='transparentPrimary' size='sm' onClick={() => this.setState({ showNewReimbursement: true })}><Add />Reimbursement</Button>
        </React.Fragment>);
        return <div><MaterialTable
            title={btns}
            columns={columns}
            data={data}
        /></div>;
    };

    componentWillMount() {
        this.props.actions.loadGymReimbursement(this.props.selectedGym.id, utils.getMonthStartEnd(this.state.date));
    };

    render() {
        return (<React.Fragment>
            {this.state.showPayConfirmation && this.getPayConfirmation()}
            {this.state.showNewReimbursement && this.getNewReimbursementDialog()}
            {this.getTable()}
        </React.Fragment>)
    }
}

export default withStyles(styles)(Reimbursement);
