import '../../../sass/customer.scss'
import React from 'react'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import dayjs from 'dayjs'
import ChartistGraph from 'react-chartist'
import MaterialTable from 'material-table'
import { withStyles, Dialog, Divider } from '@material-ui/core'
import i18N from '../../lang'
import RoundButton from '../../components/RoundButton/RoundButton'
import Panel from '../../components/Panel/Panel'
import Titlebar from '../../components/TitleBar/Titlebar'

const L = i18N('CustomerDataSection')
const styles = {
    chartCard: {
        margin: 4,
        padding: 12
    },
    chartListContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)'
    },
    dialogueBody: {
        padding: '0 20px'
    }
}

class CustomerDataSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addDialogueField: false,
            editingOption: null
        }
    }

    optionToInputField = opt => {
        return {
            name: opt.option,
            label: opt.option + '(' + opt.unit + ')',
            type: 'decimal',
            placeholder: opt.unit
        }
    }

    getInputField = tar => {
        if (!tar) {
            return this.props.options.map(this.optionToInputField)
        }
        return this.props.options
            .filter(opt => opt.option === tar)
            .map(this.optionToInputField)
    }

    save = (items, opts, date = null) => {
        if (!date) {
            date = dayjs().format('YYYY-MM-DD')
        }
        let data = Object.keys(items).map(k => {
            let target = opts.find(opt => opt.option === k)
            target.value = Number(items[k])
            target.date = date
            return target
        })
        this.setState({ addDialogueField: null })
        this.props.actions
            .batchCreateCustomerBodyData(this.props.customerId, data)
            .then(() => {
                this.props.actions.loadGroupedCustomerBodyData(
                    this.props.customerId
                )
            })
    }

    componentWillMount() {
        this.props.actions.loadGroupedCustomerBodyData(this.props.customerId)
    }

    getLineChart = data => {
        const chartData = {
            series: [data.map(row => row.value)],
            labels: data.map(row => dayjs(row.date).format('MM/DD'))
        }
        return (
            <ChartistGraph className="ct-chart" data={chartData} type="Line" />
        )
    }

    getCreateDialogue = () => {
        let params = {
            title: L.data,
            col: 1,
            dialogue: true,
            allowEmpty: true,
            onSave: data => {
                this.save(data, this.props.options)
            },
            onCancel: () => {
                this.setState({ addDialogueField: null })
            },
            inputFields: this.state.addDialogueField
        }
        return <CreateNewDialogue {...params} />
    }

    getEditDialogue = () => {
        let dataSet = this.props.data.find(
            r => r.option === this.state.editingOption
        )
        let { data } = dataSet
        const columns = [
            { title: L.date, field: 'date', editable: 'never' },
            { title: L.value, field: 'value', type: 'numeric' }
        ]
        return (
            <Dialog
                fullWidth
                open={true}
                scroll="body"
                onClose={() => this.setState({ editingOption: false })}
            >
                <MaterialTable
                    title={dataSet.option + ' / ' + dataSet.unit}
                    data={data}
                    columns={columns}
                    editable={{
                        isDeletable: rowData => true,
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                this.props.actions
                                    .updateCustomerBodyData(
                                        this.props.customerId,
                                        newData.id,
                                        newData
                                    )
                                    .then(() => {
                                        this.props.actions.loadGroupedCustomerBodyData(
                                            this.props.customerId
                                        )
                                        resolve()
                                    })
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                this.props.actions
                                    .deleteCustomerBodyData(
                                        this.props.customerId,
                                        oldData.id
                                    )
                                    .then(() => {
                                        this.props.actions.loadGroupedCustomerBodyData(
                                            this.props.customerId
                                        )
                                        resolve()
                                    })
                            })
                    }}
                    options={{
                        search: false,
                        actionsColumnIndex: -1
                    }}
                />
            </Dialog>
        )
    }

    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                {this.state.addDialogueField && this.getCreateDialogue()}
                {this.state.editingOption && this.getEditDialogue()}
                <div style={{ display: 'flex', marginBottom: 8 }}>
                    <RoundButton
                        label={'+  ' + L.addFull}
                        shadow
                        color="#29aa99"
                        fontSize={12}
                        onClick={() =>
                            this.setState({
                                addDialogueField: this.getInputField()
                            })
                        }
                    />
                </div>
                <Divider light style={{ marginBottom: 8 }} />
                <div className={classes.chartListContainer}>
                    {this.props.data &&
                        this.props.data.map(data => (
                            <Panel
                                key={data.option}
                                className={classes.chartCard}
                            >
                                <Titlebar
                                    noVr
                                    fontSize={18}
                                    description={data.unit}
                                    label={data.option}
                                >
                                    <div style={{ display: 'flex' }}>
                                        <RoundButton
                                            color="#999"
                                            fontSize="12"
                                            variant="text"
                                            onClick={() =>
                                                this.setState({
                                                    editingOption: data.option
                                                })
                                            }
                                            label={'✎ ' + L.edit}
                                        />
                                        <RoundButton
                                            style={{ marginLeft: 12 }}
                                            color="#29aa99"
                                            fontSize="12"
                                            variant="text"
                                            onClick={() =>
                                                this.setState({
                                                    addDialogueField: this.getInputField(
                                                        data.option
                                                    )
                                                })
                                            }
                                            label={'+ ' + L.add}
                                        />
                                    </div>
                                </Titlebar>
                                {this.getLineChart(data.data)}
                            </Panel>
                        ))}
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(CustomerDataSection)
