import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import React from 'react'
import MaterialTable from 'material-table'
import '../../../sass/customer.scss'
import i18N from '../../lang'
import Button from '-components/CustomButtons/Button.jsx'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'

const L = i18N('Customers')
class Customers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editProfileDialogue: false
        }
    }

    getCustomerListData = () => {
        return this.props.gym.customers.map(c => [
            c.name,
            c.email,
            c.sex ? L.male : L.female
        ])
    }

    onRowClick = (_, row) => {
        let customerId = row.id
        this.props.history.push({ pathname: `customer/${customerId}` })
    }

    editProfileDialog = () => {
        return (
            <CreateNewDialogue
                col={1}
                onCancel={() => {
                    this.setState({ editProfileDialogue: false })
                }}
                onSave={data => {
                    this.props.actions
                        .updateCustomerProfile(
                            this.props.selectedGym.id,
                            this.state.editProfileDialogue.id,
                            data
                        )
                        .then(() => {
                            this.setState({ editProfileDialogue: false })
                        })
                }}
                inputFields={[
                    {
                        name: 'name',
                        label: '姓名',
                        value: this.state.editProfileDialogue.name
                    },
                    {
                        name: 'email',
                        label: '电话',
                        value: this.state.editProfileDialogue.email
                    },
                    {
                        name: 'sex',
                        label: '性别',
                        options: [
                            { value: 0, label: '女' },
                            { value: 1, label: '男' }
                        ],
                        value: this.state.editProfileDialogue.sex
                    }
                ]}
                dialogue={true}
                title={'修改客户信息'}
            />
        )
    }

    render() {
        const columns = [
            { title: L.name, field: 'name' },
            { title: L.phone, field: 'email' },
            {
                title: L.sex,
                field: 'sex',
                render: row => (row.sex ? L.male : L.female)
            },
            {
                title: '操作',
                render: row => (
                    <Button
                        size="sm"
                        color="transparentPrimary"
                        onClick={e => {
                            e.stopPropagation()
                            this.setState({ editProfileDialogue: row })
                        }}
                    >
                        {'修改'}
                    </Button>
                )
            }
        ]

        return (
            <div className="customers-page">
                {this.state.editProfileDialogue && <this.editProfileDialog />}
                <MaterialTable
                    title={L.customers}
                    columns={columns}
                    data={this.props.gym.customers}
                    onRowClick={this.onRowClick}
                    options={{
                        pageSize: 10,
                        pageSizeOptions: []
                    }}
                    localization={{
                        body: {
                            emptyDataSourceMessage: L.emptyDataSourceMessage
                        },
                        toolbar: {
                            searchTooltip: L.searchTooltip,
                            searchPlaceholder: L.searchPlaceholder
                        }
                    }}
                />
            </div>
        )
    }
}

const mapStoreToProps = store => {
    return {
        selectedGym: store.setting.selectedGym,
        gym: store.gym
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const LinkedCustomers = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Customers)

export default LinkedCustomers
