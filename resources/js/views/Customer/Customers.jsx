import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import React from 'react'
import dayjs from 'dayjs'
import '../../../sass/customer.scss'
import i18N from '../../lang'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import SearchableTable from '../../components/SearchableTable/SearchableTable'
import RoundButton from '../../components/RoundButton/RoundButton'
import { pinyin } from '-utils'

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
            {
                title: L.name,
                flex: 2,
                render: (row) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    marginRight: 8,
                                    borderRadius: '50%',
                                    backgroundColor: row.sex
                                        ? '#E1F3EC'
                                        : '#FFDFDF'
                                }}
                            />
                            <span style={{flex: 1}}>{row.name}</span>
                        </div>
                    )
                }
            },
            {
                title: '上次训练',
                flex: 2,
                render: row =>
                    row.latest_schedule
                        ? dayjs(row.latest_schedule.date).format('MM/DD')
                        : '- -'
            },
            {
                title: '教练',
                flex: 2,
                render: row =>
                    row.latest_schedule
                        ? row.latest_schedule.coach.user.name
                        : '- -'
            },
            {
                title: '',
                flex: 1,
                visibleOnHover: true,
                render: (row) => (
                    <div>
                        <RoundButton
                            fontSize={12}
                            label={'修改'}
                            variant="outline"
                            color={'#29aa99'}
                            onClick={e => {
                                e.stopPropagation()
                                this.setState({ editProfileDialogue: row })
                            }}
                        />
                    </div>
                )
            }
        ]

        const onSearch = (keyword) => {
            return this.props.gym.customers.filter(
                c =>
                    c.name.indexOf(keyword) >= 0 ||
                    pinyin
                        .getInitChars(c.name)
                        .indexOf(keyword.toLowerCase()) >= 0
            )
        }

        return (
            <div className="customers-page">
                {this.state.editProfileDialogue && <this.editProfileDialog />}
                {
                    <SearchableTable
                        onSearch={onSearch}
                        title={L.customers}
                        columns={columns}
                        data={this.props.gym.customers}
                        onRowClick={this.onRowClick}
                    />
                }
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
