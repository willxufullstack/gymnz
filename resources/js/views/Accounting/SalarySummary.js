import React from 'react'
import Button from '-components/CustomButtons/Button.jsx'
import Confirmation from '-components/CustomDialogues/Confirmation'
import MaterialTable from 'material-table'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import { withStyles } from '@material-ui/core'
import dayjs from 'dayjs'
import Done from '@material-ui/icons/CheckCircle'
import Pay from '@material-ui/icons/PlayCircleOutline'
import Success from '-components/Typography/Success.jsx'
import i18N from '../../lang'

const L = i18N('SalarySummary')
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

class SalarySummary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            showNewReimbursement: false,
            showPayConfirmation: false
        }
    }

    handleDateChange = date => {
        this.setState({ date }, () => {
            this.props.actions.loadGymSalary(this.props.selectedGym.id, {
                month: dayjs(this.state.date).format('YYYY-MM')
            })
        })
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

    getTable = () => {
        const columns = [
            {
                title: 'KPI',
                field: 'kpi',
                editable: 'never',
                cellStyle: {
                    width: 80,
                    maxWidth: 80
                },
                headerStyle: {
                    width: 80,
                    maxWidth: 80
                }
            },
            {
                title: L.name,
                field: 'coach.user.name',
                editable: 'never',
                cellStyle: {
                    width: 120,
                    maxWidth: 120
                },
                headerStyle: {
                    width: 120,
                    maxWidth: 120
                }
            },
            {
                title: L.baseTax,
                field: 'tax',
                editable: 'never',
                cellStyle: {
                    width: 160,
                    maxWidth: 160
                },
                headerStyle: {
                    width: 160,
                    maxWidth: 160
                },
                render: rowData => `${rowData.base} - ${rowData.tax}`
            },
            {
                title: '销售',
                field: 'sale',
                editable: 'never'
            },
            {
                title: '课程(含体验/赠课)',
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
                field: 'free_course_count',
                editable: 'never'
            },
            { title: L.adjustment, field: 'adjustment' },
            { title: L.comments, field: 'adjustment_reason' },
            {
                title: '合计',
                field: 'total',
                editable: 'never',
                cellStyle: {
                    width: 100,
                    maxWidth: 100
                },
                headerStyle: {
                    width: 80,
                    maxWidth: 80
                }
            },
            {
                title: '',
                editable: 'never',
                render: rowData =>
                    rowData.status === 2 ? (
                        <Success>
                            <Done />
                        </Success>
                    ) : (
                        <Button
                            onClick={() => this.tapPay(rowData)}
                            color="transparentPrimary"
                        >
                            <Pay />
                            {L.pay}
                        </Button>
                    )
            }
        ]
        const data = this.props.gym.salaryReceipts
        const dateSelector = (
            <MuiPickersUtilsProvider utils={DayjsUtils} locale={'zh-cn'}>
                <DatePicker
                    className={this.props.classes.datePicker}
                    format="MM/YYYY"
                    openTo="month"
                    views={['year', 'month']}
                    value={this.state.date}
                    onChange={this.handleDateChange}
                />
            </MuiPickersUtilsProvider>
        )
        const btns = <React.Fragment>{dateSelector}</React.Fragment>
        return (
            <div>
                <MaterialTable
                    title={btns}
                    columns={columns}
                    data={data}
                    options={{
                        search: false,
                        paging: false
                    }}
                    editable={
                        data.filter(r => r.status === 1).length //disable edit all rows have been archived
                            ? {
                                  isEditable: rowData => rowData.status === 1,
                                  onRowUpdate: (newData, oldData) =>
                                      new Promise((resolve, reject) => {
                                          // WARNING: https://github.com/mbrn/material-table/issues/615
                                          this.props.actions
                                              .updateSalaryReceipt(
                                                  this.props.selectedGym.id,
                                                  newData
                                              )
                                              .then(resolve)
                                      })
                              }
                            : null
                    }
                />
            </div>
        )
    }

    componentWillMount() {
        this.props.actions.loadGymSalary(this.props.selectedGym.id, {
            month: dayjs(this.state.date).format('YYYY-MM')
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.showPayConfirmation && this.getPayConfirmation()}
                {this.getTable()}
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(SalarySummary)
