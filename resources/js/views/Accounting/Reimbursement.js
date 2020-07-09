import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import { withStyles } from '@material-ui/core'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import Confirmation from '-components/CustomDialogues/Confirmation'
import * as consts from '-const'
import * as utils from '-utils'
import i18N from '../../lang'
import RoundButton from '../../components/RoundButton/RoundButton'
import SearchableTable from '../../components/SearchableTable/SearchableTable'

const L = i18N('Reimbursement')
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
    },
    paid: {
        fontSize: 12,
        fontWeight: '900',
        color: '#29aa99',
        marginLeft: 6
    }
}

class Reimbursement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            showNewReimbursement: false,
            showPayConfirmation: false
        }
    }

    getNewReimbursementDialog = () => {
        const fields = {
            onCancel: () => {
                this.setState({ showNewReimbursement: false })
            },
            onSave: data => {
                this.props.actions.createReimbursement(
                    this.props.selectedGym.id,
                    data
                )
                this.setState({ showNewReimbursement: false })
            },
            title: L.createReimbursement,
            dialogue: true,
            inputFields: [
                {
                    name: 'coach_id',
                    label: L.owner,
                    options: this.props.gym.coaches.map(coach => {
                        return { value: coach.id, label: coach.user.name }
                    })
                },
                {
                    name: 'category',
                    label: L.category,
                    options: utils.arrayToOptions(
                        consts.AccoutingExpenditureCategoryOptions
                    )
                },
                {
                    name: 'amount',
                    label: L.amount,
                    type: 'decimal'
                },
                {
                    name: 'detail',
                    label: L.detail,
                    type: 'text'
                }
            ]
        }
        return <CreateNewDialogue {...fields} />
    }

    tapPay = reimbursement => {
        this.setState({ showPayConfirmation: reimbursement })
    }

    pay = () => {
        this.props.actions
            .payReimbursement(
                this.props.selectedGym.id,
                this.state.showPayConfirmation.id
            )
            .then(() => {
                this.setState({ showPayConfirmation: false })
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

    getTable = () => {
        const { classes } = this.props
        const columns = [
            { title: L.amount, field: 'amount' },
            { title: L.category, field: 'category' },
            { title: L.detail, field: 'detail' },
            { title: L.coach, field: 'coach.user.name' },
            { title: L.Time, field: 'created_at' },
            {
                title: '操作',
                render: rowData =>
                    rowData.status === 1 ? (
                        <RoundButton
                            onClick={() => this.tapPay(rowData)}
                            color="#FF8C8C"
                            fontSize="12"
                            variant="outline"
                            label={L.pay}
                        />
                    ) : (
                        <span className={classes.paid}>已支付</span>
                    )
            }
        ]
        const data = this.props.gym.reimbursements
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <RoundButton
                        color="#29aa99"
                        shadow
                        onClick={() =>
                            this.setState({ showNewReimbursement: true })
                        }
                        extend={6}
                        label={'+ 报销'}
                    />
                </div>

                <SearchableTable columns={columns} data={data} />
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.state.showPayConfirmation && this.getPayConfirmation()}
                {this.state.showNewReimbursement &&
                    this.getNewReimbursementDialog()}
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

const LinkedReimbursement = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Reimbursement)

export default withStyles(styles)(LinkedReimbursement)
