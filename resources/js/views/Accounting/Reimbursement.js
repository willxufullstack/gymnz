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

}

class Reimbursement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showNewReimbursement: false,
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

    render() {
        return (<React.Fragment>
            {this.state.showNewReimbursement && this.getNewReimbursementDialog()}
            <Button onClick={() => this.setState({ showNewReimbursement: true })}><Add />Reimbursement</Button>
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

const LinkedReimbursement = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Reimbursement);

export default withStyles(styles)(LinkedReimbursement);
