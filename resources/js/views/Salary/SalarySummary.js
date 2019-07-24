import React from "react";
import Button from "-components/CustomButtons/Button.jsx";
import Confirmation from '-components/CustomDialogues/Confirmation';
import MaterialTable from 'material-table';
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import { withStyles } from "@material-ui/core";
import dayjs from 'dayjs';


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

class SalarySummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showNewReimbursement: false,
            showPayConfirmation: false
        };
    }

    handleDateChange = (date) => {
        this.setState({ date }, () => {
            this.props.actions.loadGymSalary(this.props.selectedGym.id, { month: dayjs(this.state.date).format('YYYY-MM') });
        });
    };

    tapPay = (salary) => {
        this.setState({ showPayConfirmation: salary });
    };

    pay = () => {
        // TODO
        this.props.actions.paySalary(this.props.selectedGym.id, this.state.showPayConfirmation.id)
            .then(() => {
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
            { title: 'Name', field: 'coach.user.name' },
            { title: 'Amount', field: 'total' },
            { title: 'Base', field: 'base' },
            { title: 'Tax', field: 'tax', render: rowData => `-${rowData.tax}` },
            { title: 'Course', field: 'course_count', render: rowData => `${rowData.course_fixed} * ${rowData.course_count}` },
            { title: 'Action', render: rowData => rowData.status === 2 ? '' : <Button onClick={() => this.tapPay(rowData)} color='transparentPrimary'>Pay</Button> }
        ];
        const data = this.props.gym.salaryReceipts;
        const dateSelector = (<MuiPickersUtilsProvider utils={DayjsUtils} locale={'zh-cn'}>
            <DatePicker className={this.props.classes.datePicker} format="MM/YYYY" openTo="month" views={["year", "month"]} value={this.state.date} onChange={this.handleDateChange} />
        </MuiPickersUtilsProvider>);
        const btns = (<React.Fragment>
            {dateSelector}
        </React.Fragment>);
        return <div><MaterialTable
            title={btns}
            columns={columns}
            data={data}
            options={{
                search: false,
                paging: false,
            }}
        /></div>;
    };

    componentWillMount() {
        this.props.actions.loadGymSalary(this.props.selectedGym.id, { month: dayjs(this.state.date).format('YYYY-MM') });
    };

    render() {
        return (<React.Fragment>
            {this.state.showPayConfirmation && this.getPayConfirmation()}
            {this.getTable()}
        </React.Fragment>)
    }
}


export default withStyles(styles)(SalarySummary);

