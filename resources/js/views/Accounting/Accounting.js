import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import { withStyles } from '@material-ui/core'
import Button from '-components/CustomButtons/Button.jsx'
import Add from '@material-ui/icons/Add'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import * as consts from '-const'
import * as utils from '-utils'
import MaterialTable from 'material-table'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'

import i18N from '../../lang'

const L = i18N('Accounting')
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

class Accounting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            showNewExpenditure: false,
            showNewIncome: false
        }
    }

    tapCreateExpenditure = () => {
        this.setState({ showNewExpenditure: true })
    }

    tapCreateIncome = () => {
        this.setState({ showNewIncome: true })
    }

    handleDateChange = date => {
        this.setState({ date }, () => {
            this.props.actions.loadGymAccounting(
                this.props.selectedGym.id,
                utils.getMonthStartEnd(this.state.date)
            )
        })
    }

    saveExpenditure = data => {
        data.amount *= -1
        this.props.actions.createAccountingRow(this.props.selectedGym.id, data)

        this.setState({ showNewExpenditure: false })
    }

    saveIncome = data => {
        this.props.actions.createAccountingRow(this.props.selectedGym.id, data)

        this.setState({ showNewIncome: false })
    }

    getNewIncomeDialogue = () => {
        const params = {
            onSave: this.saveIncome,
            onCancel: () => {
                this.setState({ showNewIncome: false })
            },
            title: L.newIncome,
            dialogue: true,
            inputFields: [
                {
                    name: 'category',
                    label: L.category,
                    options: utils.arrayToOptions(
                        consts.AccoutingIncomeCategoryOptions
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
        return <CreateNewDialogue {...params} />
    }

    getNewExpenditureDialogue = () => {
        const params = {
            onSave: this.saveExpenditure,
            onCancel: () => {
                this.setState({ showNewExpenditure: false })
            },
            title: L.newExpenditure,
            dialogue: true,
            inputFields: [
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
        return <CreateNewDialogue {...params} />
    }

    getTable = () => {
        const columns = [
            { title: L.amount, field: 'amount' },
            { title: L.category, field: 'category' },
            { title: L.detail, field: 'detail' },
            { title: L.operator, field: 'op.name' },
            { title: L.time, field: 'created_at' }
        ]
        const data = this.props.gym.accounting
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
                    size='sm'
                    color='transparentGray'
                    onClick={this.tapCreateIncome}
                >
                    <Add size='sm' /> {L.income}
                </Button>
                <Button
                    size='sm'
                    color='transparentPrimary'
                    onClick={this.tapCreateExpenditure}
                >
                    <Add /> {L.expenditure}
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
        this.props.actions.loadGymAccounting(
            this.props.selectedGym.id,
            utils.getMonthStartEnd(this.state.date)
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.state.showNewExpenditure &&
                    this.getNewExpenditureDialogue()}
                {this.state.showNewIncome && this.getNewIncomeDialogue()}
                {this.getTable()}
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Accounting)
