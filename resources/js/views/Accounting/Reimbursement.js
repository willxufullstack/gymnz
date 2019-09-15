import React from 'react'
import { withStyles } from '@material-ui/core'
import Button from '-components/CustomButtons/Button.jsx'
import Add from '@material-ui/icons/Add'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import Confirmation from '-components/CustomDialogues/Confirmation'
import Pay from '@material-ui/icons/PlayCircleOutline'
import * as consts from '-const'
import * as utils from '-utils'
import MaterialTable from 'material-table'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import i18N from '../../lang'

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

    handleDateChange = date => {
        this.setState({ date }, () => {
            this.props.actions.loadGymReimbursement(
                this.props.selectedGym.id,
                utils.getMonthStartEnd(this.state.date)
            )
        })
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
        const columns = [
            { title: L.amount, field: 'amount' },
            { title: L.category, field: 'category' },
            { title: L.detail, field: 'detail' },
            { title: L.operator, field: 'op.name' },
            { title: L.Time, field: 'created_at' },
            {
                title: '',
                render: rowData => (
                    <Button
                        onClick={() => this.tapPay(rowData)}
                        color='transparentPrimary'
                    >
                        <Pay />
                        {L.pay}
                    </Button>
                )
            }
        ]
        const data = this.props.gym.reimbursements
        const dateSelector = (
            <MuiPickersUtilsProvider utils={DayjsUtils} locale={'zh-cn'}>
                <DatePicker
                    className={this.props.classes.datePicker}
                    format='MM/YYYY'
                    openTo='month'
                    views={['year', 'month']}
                    value={this.state.date}
                    onChange={this.handleDateChange}
                />
            </MuiPickersUtilsProvider>
        )
        const btns = (
            <React.Fragment>
                {dateSelector}
                <Button
                    color='transparentPrimary'
                    size='sm'
                    onClick={() =>
                        this.setState({ showNewReimbursement: true })
                    }
                >
                    <Add />
                    {L.reimbursement}
                </Button>
            </React.Fragment>
        )
        return (
            <div>
                <MaterialTable title={btns} columns={columns} data={data} />
            </div>
        )
    }

    componentWillMount() {
        if(this.props.gym.coaches) {
            this.props.actions.loadCoach(this.props.selectedGym.id)
        }
        this.props.actions.loadGymReimbursement(
            this.props.selectedGym.id,
            utils.getMonthStartEnd(this.state.date)
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

export default withStyles(styles)(Reimbursement)
