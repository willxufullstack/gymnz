import React from 'react'
import ColorHash from 'color-hash'
import { withStyles, Button, Divider, Switch } from '@material-ui/core'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditIcon from '@material-ui/icons/Edit'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

const styles = {
    settingRow: {
        display: 'flex',
        marginBottom: 8,
        padding: '4px 0'
    },
    invisible: {
        visibility: 'hidden'
    },
    hover: {
        background: '#fff',
        borderRadius: 4,
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.15)'
    },
    greater: {
        flex: 2,
        textAlign: 'right',
        paddingRight: 8
    },
    amount: {
        flex: 2
    },
    unit: {
        flex: 1
    },
    value: {
        flex: 2,
        textAlign: 'center',
        fontWeight: '500'
    },
    valueUnit: {
        flex: 1
    },
    actionIcon: {
        fontSize: 14
    },
    edit: {
        flex: 1
    },
    delete: {
        flex: 1
    }
}

const SalaryTierSettingRow = ({
    row,
    isEditing,
    onDelete,
    onEdit,
    classes
}) => {
    const [hover, setHover] = useState(false)
    const [showEditParam, setShowEditParam] = useState(false)
    const edit = () => {
        setShowEditParam(true)
    }

    const EditDialog = () => {
        const params = {
            onSave: data => {
                setShowEditParam(false)
                onEdit(data)
            },
            onCancel: () => {
                setShowEditParam(false)
            },
            title: '编辑',
            dialogue: true,
            inputFields: [
                {
                    name: 'amount',
                    label: row.amountUnit,
                    type: 'number',
                    value: row.amount + ''
                },
                {
                    name: 'value',
                    label: row.valueUnit,
                    type: 'number',
                    value: row.value + ''
                },
                {
                    name: 'amountUnit',
                    hide: true,
                    value: row.amountUnit
                },
                {
                    name: 'valueUnit',
                    hide: true,
                    value: row.valueUnit
                }
            ]
        }
        return <CreateNewDialogue open={showEditParam} {...params} />
    }

    return (
        <p
            className={classNames(
                classes.settingRow,
                isEditing && hover && classes.hover
            )}
            onMouseEnter={() => isEditing && setHover(true)}
            onMouseLeave={() => isEditing && setHover(false)}
        >
            <EditDialog />
            <span className={classes.greater}>{'> '}</span>
            <span className={classes.amount}>{row.amount}</span>
            <span className={classes.unit}>{row.amountUnit}</span>
            <span className={classes.value}>{row.value}</span>
            <span className={classes.valueUnit}>{row.valueUnit}</span>
            {isEditing && (
                <span
                    className={classNames(classes.edit, !hover && 'invisible')}
                >
                    <EditIcon onClick={edit} className={classes.actionIcon} />
                </span>
            )}
            {isEditing && (
                <span
                    className={classNames(
                        classes.delete,
                        (!onDelete || !hover) && 'invisible'
                    )}
                >
                    <DeleteOutlineIcon
                        className={classes.actionIcon}
                        onClick={onDelete}
                    />
                </span>
            )}
        </p>
    )
}

export default withStyles(styles)(SalaryTierSettingRow)
