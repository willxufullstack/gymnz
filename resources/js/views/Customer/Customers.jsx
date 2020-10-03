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
import ExpandMore from '@material-ui/icons/ExpandMore'
import SimpleMenu from '-components/SimpleMenu/SimpleMenu'
import { withStyles, Tooltip } from '@material-ui/core'
import { pinyin } from '-utils'

const L = i18N('Customers')

const styles = {
    filterBar: {
        display: 'flex',
        height: 36,
        width: '100%'
    },
    filterItem: {
        maxWidth: 150,
        marginLeft: 32
    },
    filterItemFlex: {
        flex: 1,
        marginLeft: 32
    },
    filterTitle: {
        width: 60,
        lineHeight: '12px',
        textAlign: 'left',
        fontSize: 12,
        color: '#999'
    },
    filterDropdownIcon: {
        marginLeft: 6
    }
}
class Customers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editProfileDialogue: false,
            coachFilter: '所有'
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

    coachFilter = () => {
        const { classes } = this.props
        const filters = {
            所有: '所有'
        }

        this.props.gym.customers.forEach(customer => {
            if (customer.latest_schedule) {
                filters[customer.latest_schedule.coach.user.name] =
                    customer.latest_schedule.coach.user.name
            }
        })

        const opts = Object.keys(filters).map(k => ({
            text: filters[k],
            onSelect: () => this.setState({ coachFilter: k })
        }))
        return (
            <div>
            <span>教练</span>
            <SimpleMenu
                icon={
                    <ExpandMore
                        fontSize="small"
                        className={classes.filterDropdownIcon}
                    />
                }
                textColor={'#333'}
                fontSize={'12px'}
                displayText={filters[this.state.coachFilter]}
                items={opts}
            />
           </div>
        )
    }

    render() {
        const filteredCustomers = () => {
            if (this.state.coachFilter === '所有') {
                return this.props.gym.customers
            }
            return this.props.gym.customers.filter(
                c =>
                    c.latest_schedule &&
                    c.latest_schedule.coach.user.name === this.state.coachFilter
            )
        }

        const unfinished = () => {
            let count = 0
            let price = 0
            filteredCustomers().forEach(c => {
                if (c.stock) {
                    count += c.stock.unfinished_count
                    price += c.stock.unfinished_price
                }
            })

            return <span style={{fontWeight:'400', color: '#666', fontSize: 12}}>{count + ' / ' + (price / 10000).toFixed(2) + 'w'}</span>
        }

        const expired = () => {
            let count = 0
            let price = 0
            filteredCustomers().forEach(c => {
                if (c.stock) {
                    count += c.stock.expired_count
                    price += c.stock.expired_price
                }
            })

            return <span style={{fontWeight:'400', color: '#666', fontSize: 12}}>{count + ' / ' + (price / 10000).toFixed(2) + 'w'}</span>
        }


        const columns = [
            {
                title: <div>{L.name}<br /><span style={{fontWeight: '400', color: '#666', fontSize: 12}}>{filteredCustomers().length}</span></div>,
                flex: 1,
                render: row => {
                    return (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flex: 1
                            }}
                        >
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    marginRight: 8,
                                    borderRadius: '50%',
                                    backgroundColor: row.sex
                                        ? '#C6D3FF'
                                        : '#FFDFDF'
                                }}
                            />
                            <span style={{ flex: 1 }}>{row.name}</span>
                        </div>
                    )
                }
            },
            {
                title: '月热度',
                flex: 2,
                render: row => {
                    const bgColor = v => (v === 0 ? '#ececec' : '#29aa99')
                    const opacity = v => (v === 0 ? 1 : Math.ceil(v / 2) * 0.25)
                    if (row.monthMap) {
                        return (
                            <Tooltip title={row.monthMap.join(' · ')}>
                                <div>
                                    {row.monthMap.map((v, i) => (
                                        <span
                                            key={i + ''}
                                            style={{
                                                borderRadius: 2,
                                                display: 'inline-block',
                                                height: 8,
                                                width: 8,
                                                marginLeft: 1,
                                                background: bgColor(v),
                                                opacity: opacity(v)
                                            }}
                                        />
                                    ))}
                                </div>
                            </Tooltip>
                        )
                    }
                    return <div />
                }
            },
            // {
            //     title: '电话',
            //     flex: 1,
            //     field: 'email'
            // },
            {
                title: '上次训练',
                flex: 1,
                render: row =>
                    row.latest_schedule
                        ? dayjs(row.latest_schedule.date).format('MM/DD')
                        : '- -'
            },
            {
                title: this.coachFilter(),
                flex: 1,
                render: row =>
                    row.latest_schedule
                        ? row.latest_schedule.coach.user.name
                        : '- -'
            },
            {
                title: <div>{'库存课程 / 总价'}<br />{unfinished()}</div>,
                flex: 2,
                render: row =>
                    row.stock
                        ? (row.stock.unfinished_count ? row.stock.unfinished_count : '-') +
                          '/' +
                          (row.stock.unfinished_price ? Math.floor(row.stock.unfinished_price) : '-')
                        : '- -'
            },
            {
                title: <div>{'过期课程 / 总价'}<br />{expired()}</div>,
                flex: 2,
                render: row =>
                    row.stock
                        ? (row.stock.expired_count ? row.stock.expired_count : '-') +
                          '/' +
                          (row.stock.expired_price ? Math.floor(row.stock.expired_price) : '-')
                        : '- -'
            },
            {
                title: '',
                flex: 1,
                visibleOnHover: true,
                render: row => (
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

        const onSearch = keyword => {
            return filteredCustomers().filter(
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
                        data={filteredCustomers()}
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

export default withStyles(styles)(LinkedCustomers)
