import React from 'react'
import { styled } from '@mui/material/styles';
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import * as consts from '-const'
import * as utils from '-utils'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

import i18N from '../../lang'
import SearchableTable from '../../components/SearchableTable/SearchableTable'
import RoundButton from '../../components/RoundButton/RoundButton'

const PREFIX = 'Accounting';

const classes = {
    datePicker: `${PREFIX}-datePicker`,
    actionBtn: `${PREFIX}-actionBtn`,
    search: `${PREFIX}-search`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')({
    [`& .${classes.datePicker}`]: {
        width: 62,
        position: 'relative',
        top: 5,
        marginRight: 200
    },
    [`& .${classes.actionBtn}`]: {
        float: 'right'
    },
    [`& .${classes.search}`]: {
        borderBottomColor: '#9c27b0'
    }
});

const L = i18N('Accounting')

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
            { title: L.operator, render: row => row.op.name },
            { title: L.time, field: 'created_at' }
        ]
        const data = this.props.gym.accounting
        const btns = (
            <div style={{display: 'flex'}}>
                <RoundButton
                    color="#29aa99"
                    shadow
                    onClick={this.tapCreateExpenditure}
                    label={'+ ' + L.expenditure}
                    style={{marginRight: 24}}
                    extend={6}
                />
                <RoundButton
                    color="#999"
                    shadow
                    onClick={this.tapCreateIncome}
                    label={'+ ' + L.income}
                    extend={6}
                />
            </div>
        )
        return (
            <div>
                {btns}
                <SearchableTable columns={columns} data={data} />
            </div>
        )
    }

    render() {
        return (
            <Root>
                {this.state.showNewExpenditure &&
                    this.getNewExpenditureDialogue()}
                {this.state.showNewIncome && this.getNewIncomeDialogue()}
                {this.getTable()}
            </Root>
        );
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

const LinkedAccounting = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Accounting)

export default (LinkedAccounting)
