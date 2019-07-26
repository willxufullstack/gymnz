import "../../../sass/customer.scss"
import React from 'react';
import Button from "-components/CustomButtons/Button.jsx";
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue';
import dayjs from "dayjs";
import ChartistGraph from "react-chartist";
import Muted from "-components/Typography/Muted.jsx";
import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";
import MaterialTable from 'material-table';
import { Card, CardContent, withStyles, Typography, Dialog } from "@material-ui/core";

const styles = {
    chartCard: {
        paddingTop: 0
    },
    chartHeaderContainer: {
        display: 'flex',
        marginTop: -12
    },
    chartHeaderLeft: {
        flex: 1,
        display: 'inherit'
    },
    chartOption: {
        lineHeight: '40px',
        fontWeight: 600
    },
    chartUnit: {
        fontSize: 12,
        lineHeight: '40px',
        marginLeft: 10,
        fontWeight: 600
    }
};

class CustomerDataSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addDialogueField: false,
            editingOption: null
        };
    }

    optionToInputField = (opt) => {
        return {
            name: opt.option,
            label: opt.option,
            type: 'decimal',
            placeholder: opt.unit,
        }
    };

    getInputField = (tar) => {
        if (!tar) {
            return this.props.options.map(this.optionToInputField);
        }
        return this.props.options.filter(opt => opt.option === tar).map(this.optionToInputField);
    };

    save = (items, opts, date = null) => {
        if (!date) {
            date = dayjs().format('YYYY-MM-DD');
        }
        let data = Object.keys(items).map((k) => {
            let target = opts.find((opt) => opt.option === k);
            target.value = Number(items[k]);
            target.date = date;
            return target;
        });
        this.props.actions.batchCreateCustomerBodyData(this.props.customerId, data)
            .then(() => {
                this.setState({ addDialogueField: null });
                this.props.actions.loadGroupedCustomerBodyData(this.props.customerId);
            });
    };

    componentWillMount() {
        this.props.actions.loadGroupedCustomerBodyData(this.props.customerId);
    };

    getLineChart = (data) => {
        const chartData = {
            series: [
                data.map(row => row.value)
            ],
            labels: data.map(row => dayjs(row.date).format('MM/DD'))
        }
        return <ChartistGraph
            className="ct-chart"
            data={chartData}
            type="Line"
        />;
    };

    getCreateDialogue = () => {
        let params = {
            title: 'Data',
            onSave: (data) => {
                this.save(data, this.props.options);
            },
            onCancel: () => { this.setState({ addDialogueField: null }) },
            inputFields: this.state.addDialogueField
        };
        return <CreateNewDialogue {...params} />;
    };

    getEditDialogue = () => {
        let dataSet = this.props.data.find(r => r.option === this.state.editingOption);
        let { data } = dataSet;
        const columns = [
            { title: 'Date', field: 'date', editable: 'never' },
            { title: 'Value', field: 'value', type: 'numeric' },
        ];
        return <Dialog fullWidth open={true} onClose={() => this.setState({ editingOption: false })} >
            <MaterialTable
                title={dataSet.option + ' / ' + dataSet.unit}
                data={data}
                columns={columns}
                editable={{
                    isDeletable: (rowData) => true,
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            this.props.actions.updateCustomerBodyData(this.props.customerId, newData.id, newData)
                                .then(() => {
                                    this.props.actions.loadGroupedCustomerBodyData(this.props.customerId);
                                    resolve();
                                })
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            this.props.actions.deleteCustomerBodyData(this.props.customerId, oldData.id)
                                .then(() => {
                                    this.props.actions.loadGroupedCustomerBodyData(this.props.customerId);
                                    resolve();
                                })
                        }),
                }}
                options={{
                    search: false,
                    actionsColumnIndex: -1,
                }}
            />
        </Dialog>;

    };


    render() {
        const { classes } = this.props;
        if (this.state.addDialogueField) {
            return this.getCreateDialogue();
        }
        return <React.Fragment>
            {this.state.editingOption && this.getEditDialogue()}
            {this.props.data &&
                this.props.data.map(data =>
                    <Card key={data.option} classes={{ root: classes.chartCard }}>
                        <CardContent>
                            <div className={classes.chartHeaderContainer}>
                                <div className={classes.chartHeaderLeft}>
                                    <Typography variant='h6' className={classes.chartOption}>{data.option}</Typography>
                                    <Muted className={classes.chartUnit}>{data.unit}</Muted>
                                </div>
                                <Button color='transparentGray' size='sm' onClick={() => this.setState({ editingOption: data.option })}><Edit /> Edit </Button>
                                <Button color='transparentPrimary' size='sm' onClick={() => this.setState({ addDialogueField: this.getInputField(data.option) })}><Add /> ADD </Button>
                            </div>
                            {this.getLineChart(data.data)}
                        </CardContent>
                    </Card>)}
            <Button style={{ marginTop: 16 }} color='transparentPrimary' fullWidth={true} onClick={() => this.setState({ addDialogueField: this.getInputField() })}><Add /> ADD FULL DATA</Button>
        </React.Fragment>;

    }
}

export default withStyles(styles)(CustomerDataSection);
