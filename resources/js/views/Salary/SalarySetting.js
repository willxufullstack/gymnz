import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions'
import { withStyles } from "@material-ui/core";
import MaterialTable from 'material-table';


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

class SalarySetting extends React.Component {
    constructor(props) {
        super(props);
    }

    getTable = () => {
        const columns = [
            { title: 'Name', field: 'coach.user.name' },
            { title: 'Base', field: 'base' },
            { title: 'Course(Fixed)', field: 'course_fixed' },
            { title: 'Course(%)', field: 'course_percentage' },
            { title: 'Sale(%)', field: 'sale_percentage' },
        ];
        const data = this.props.salarySettings;
        return <div><MaterialTable
            title={'Salary Setting'}
            columns={columns}
            data={data}
            options={
                {
                    search: false,
                    paging: false,
                }
            }
        /></div>;
    };

    componentWillMount() {
        this.props.actions.loadGymSalarySetting(this.props.selectedGym.id);
    }

    render() {
        return (<React.Fragment>
            {this.getTable()}
        </React.Fragment>)
    }
}

export default SalarySetting;