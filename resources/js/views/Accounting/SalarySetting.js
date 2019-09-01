import React from 'react'
import MaterialTable from 'material-table'
import i18N from '../../lang'

const L = i18N('SalarySetting')
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
            { title: L.name, field: 'coach.user.name', editable: 'never' },
            { title: L.base, field: 'base', type: 'numeric' },
            { title: L.courseFixed, field: 'course_fixed', type: 'numeric' },
            { title: L.coursePercent, field: 'course_percentage', type: 'numeric' },
            { title: L.salePercent, field: 'sale_percentage', type: 'numeric' },
            { title: L.tax, field: 'tax', type: 'numeric' }
        ]
        const data = this.props.gym.salarySettings
        return (
            <div>
                <MaterialTable
                    title={L.salarySetting}
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
