import React from 'react'
import MaterialTable from 'material-table'

const styles = {
    datePicker: {
        width: 62,
        position: 'relative',
        top: 5,
        marginRight: 200
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
        super(props)
    }

    getTable = () => {
        const columns = [
            { title: 'Name', field: 'coach.user.name', editable: 'never' },
            { title: 'Base', field: 'base', type: 'numeric' },
            { title: 'Course(Fixed)', field: 'course_fixed', type: 'numeric' },
            { title: 'Course(%)', field: 'course_percentage', type: 'numeric' },
            { title: 'Sale(%)', field: 'sale_percentage', type: 'numeric' },
            { title: 'Tax', field: 'tax', type: 'numeric' }
        ]
        const data = this.props.gym.salarySettings
        return (
            <div>
                <MaterialTable
                    title={'Salary Setting'}
                    columns={columns}
                    data={data}
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                // call update
                                // WARNING: https://github.com/mbrn/material-table/issues/615
                                this.props.actions
                                    .updateGymSalarySetting(
                                        this.props.selectedGym.id,
                                        newData
                                    )
                                    .then(resolve)
                            })
                    }}
                    options={{
                        search: false,
                        paging: false
                    }}
                />
            </div>
        )
    }

    componentWillMount() {
        this.props.actions.loadGymSalarySetting(this.props.selectedGym.id)
    }

    render() {
        return <React.Fragment>{this.getTable()}</React.Fragment>
    }
}

export default SalarySetting
