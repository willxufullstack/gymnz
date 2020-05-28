import React from 'react'
import ColorHash from 'color-hash'
import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    withStyles
} from '@material-ui/core'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import CreateIcon from '@material-ui/icons/Create'
import { useState, useEffect } from 'react'
import i18N from '../../lang'
import SalaryTierSettingItem from './SalaryTierSettingItem'

const L = i18N('SalarySetting')

const styles = {
    cardContent: {
        paddingTop: 0
    },
    simpleRow: {
        display: 'flex',
        fontSize: 14,
        padding: '6px 8px',
        color: '#333',
        '&:hover': {
            background: '#F3F3F3',
            borderRadius: 4
        }
    },
    option: {
        flex: 1,
        fontWeight: '900'
    },
    value: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: '18%',
        fontWeight: '500'
    },
    editIcon: {
        fontSize: 14,
        color: '#fff'
    },
    editIconContainer: {
        padding: 4,
        width: 20,
        height: 20,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#4fd2c2',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.15)'
    },
    editIconContainerPlaceholder: {
        width: 20,
        height: 20
    }
}

class SalarySettingItem extends React.Component {
    constructor(props) {
        super(props)
    }

    getNewIncomeDialogue = () => {
        return <CreateNewDialogue {...params} />
    }

    SimpleRow = ({ data, classes, onSave }) => {
        // const { data, classes } = this.props
        const [showEdit, setShowEdit] = useState(false)
        const [showModal, setShowModal] = useState(false)
        const hide = () => {
            setShowModal(false)
        }

        const params = {
            onSave: updated => {
                hide()
                onSave({ ...this.props.data, ...updated })
            },
            onCancel: hide,
            title: data.label,
            dialogue: true,
            inputFields: [
                {
                    name: data.option,
                    label: data.label,
                    type: 'number',
                    value: data.value + ''
                }
            ]
        }
        return (
            <div
                className={classes.simpleRow}
                onMouseEnter={() => setShowEdit(true)}
                onMouseLeave={() => setShowEdit(false)}
                onClick={() => {
                    setShowEdit(false)
                    setShowModal(true)
                }}
            >
                <CreateNewDialogue open={showModal} {...params} />
                <div className={classes.option}>{data.label}</div>
                <div className={classes.value}>{data.value}</div>
                <div
                    className={
                        showEdit
                            ? classes.editIconContainer
                            : classes.editIconContainerPlaceholder
                    }
                >
                    <CreateIcon className={classes.editIcon} />
                </div>
            </div>
        )
    }

    get simpleOptions() {
        return {
            base: L.base,
            course_trial: '课提(体验课)',
            course_free: L.courseFree,
            course_percentage: L.coursePercent,
            sale_percentage: L.salePercent,
            tax: L.tax
        }
    }

    courseFixedRow = () => {
        let setting = this.props.data.course_fixed_configuration
        if (!setting || !setting.mode) {
            setting = {
                mode: 'unified',
                rows: [
                    {
                        amount: 0,
                        amountUnit: '节',
                        value: this.props.data.course_fixed,
                        valueUnit: '元'
                    }
                ]
            }
        }

        const save = (updated) => {
            const newSetting = { ...this.props.data, course_fixed_configuration : JSON.stringify(updated) }
            this.props.onSave(newSetting)
        }

        return <SalaryTierSettingItem setting={setting} label={'课提'} onSaveSetting={save} />
    }

    render() {
        const { data, classes } = this.props
        const color = new ColorHash().hex(data.coach.user.name)
        const options = {
            base: L.base,
            course_fixed: L.courseFixed,
            course_trial: '课提(体验课)',
            course_free: L.courseFree,
            course_percentage: L.coursePercent,
            sale_percentage: L.salePercent,
            tax: L.tax
        }
        return (
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar
                            style={{ backgroundColor: color }}
                            aria-label="recipe"
                        >
                            {data.coach.user.name.substr(0, 1)}
                        </Avatar>
                    }
                    title={data.coach.user.name}
                    subheader={data.coach.user.email}
                />
                <CardContent className={classes.cardContent}>
                    {Object.keys(this.simpleOptions).map(opt => {
                        return (
                            <this.SimpleRow
                                key={opt}
                                data={{
                                    label: options[opt],
                                    option: opt,
                                    value: data[opt]
                                }}
                                onSave={this.props.onSave}
                                classes={classes}
                            />
                        )
                    })}
                    <this.courseFixedRow />
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(SalarySettingItem)
