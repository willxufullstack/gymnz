import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import Confirmation from '-components/CustomDialogues/Confirmation'
import { withStyles } from '@material-ui/core'
import dayjs from 'dayjs'
import i18N from '../../lang'
import SearchableTable from '../../components/SearchableTable/SearchableTable'
import RoundButton from '../../components/RoundButton/RoundButton'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'

const L = i18N('SalarySummary')
const styles = {
    paid: {
        fontSize: 12,
        fontWeight: '900',
        color: '#29aa99',
        marginLeft: 24
    }
}

class SalarySummary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showNewReimbursement: false,
            showPayConfirmation: false,
            showAdjustDialogue: false
        }
    }

    tapPay = salary => {
        this.setState({ showPayConfirmation: salary })
    }

    pay = () => {
        // TODO
        this.props.actions
            .paySalary(
                this.props.selectedGym.id,
                this.state.showPayConfirmation.id
            )
            .then(() => {
                this.setState({ showPayConfirmation: false }, () => {
                    this.props.actions.loadGymSalary(
                        this.props.selectedGym.id,
                        { month: dayjs(this.state.date).format('YYYY-MM') }
                    )
                })
            })
    }

    getPayConfirmation = () => {
        return (
            <Confirmation
                message={L.payConfirm}
                onConfirm={this.pay}
                onCancel={() => {
                    this.setState({ showPayConfirmation: false })
                }}
            />
        )
    }

    getAdjustDialogue = () => {
        const params = {
            onSave: newData => {
                this.props.actions.updateSalaryReceipt(
                    this.props.selectedGym.id,
                    newData
                )
                this.setState({ showAdjustDialogue: false })
            },
            onCancel: () => {
                this.setState({ showAdjustDialogue: false })
            },
            title: '调整',
            dialogue: true,
            col: 1,
            inputFields: [
                {
                    name: 'id',
                    label: 'id',
                    value: this.state.showAdjustDialogue.id,
                    hide: true
                },
                {
                    name: 'adjustment',
                    label: '调整金额',
                    type: 'number'
                },
                {
                    name: 'adjustment_reason',
                    label: '调整原因'
                }
            ]
        }
        return <CreateNewDialogue {...params} />
    }

    getTable = () => {
        const { classes } = this.props
        const columns = [
            {
                title: L.name,
                render: rowData => rowData.coach.user.name
            },
            {
                title: 'KPI',
                field: 'kpi'
            },
            {
                title: L.baseTax,
                field: 'tax',
                render: rowData => `${rowData.base} - ${rowData.tax}`
            },
            {
                title: '销售',
                field: 'sale',
                editable: 'never'
            },
            {
                title: '课程(含体验/赠课)',
                flex: 2,
                field: 'course_count',
                editable: 'never'
            },
            {
                title: '体验课',
                field: 'trial_course_count',
                editable: 'never'
            },
            {
                title: '赠课',
                field: 'free_course_count'
            },
            { title: L.adjustment, field: 'adjustment' },
            { title: L.comments, field: 'adjustment_reason' },
            {
                title: '合计',
                field: 'total'
            },
            {
                title: '操作',
                flex: 2,
                render: rowData =>
                    rowData.status === 2 ? (
                        <span className={classes.paid}>已支付</span>
                    ) : (
                        <React.Fragment>
                            <RoundButton
                                onClick={() =>
                                    this.setState({
                                        showAdjustDialogue: rowData
                                    })
                                }
                                color="#999"
                                variant="text"
                                fontSize={12}
                                label={'调整'}
                            />
                            <RoundButton
                                onClick={() => this.tapPay(rowData)}
                                color="#FF8C8C"
                                variant="outline"
                                fontSize={12}
                                style={{ marginLeft: 4 }}
                                label={L.pay}
                            />
                        </React.Fragment>
                    )
            }
        ]
        return (
            <SearchableTable
                columns={columns}
                data={this.props.gym.salaryReceipts}
            />
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.state.showAdjustDialogue && this.getAdjustDialogue()}
                {this.state.showPayConfirmation && this.getPayConfirmation()}
                {this.getTable()}
            </React.Fragment>
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

const LinkedSalarySummary = connect(
    mapStoreToProps,
    mapDispatchToProps
)(SalarySummary)

export default withStyles(styles)(LinkedSalarySummary)
