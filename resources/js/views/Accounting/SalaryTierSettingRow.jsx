import React from 'react'
import { styled } from '@mui/material/styles';
import ColorHash from 'color-hash'
import { Button, Divider, Switch } from '@mui/material';
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

const PREFIX = 'SalaryTierSettingRow';

const classes = {
    settingRow: `${PREFIX}-settingRow`,
    invisible: `${PREFIX}-invisible`,
    hover: `${PREFIX}-hover`,
    greater: `${PREFIX}-greater`,
    amount: `${PREFIX}-amount`,
    unit: `${PREFIX}-unit`,
    value: `${PREFIX}-value`,
    valueUnit: `${PREFIX}-valueUnit`,
    actionIcon: `${PREFIX}-actionIcon`,
    edit: `${PREFIX}-edit`,
    delete: `${PREFIX}-delete`
};

const Root = styled('p')({
    [`&.${classes.settingRow}`]: {
        display: 'flex',
        marginBottom: 8,
        padding: '4px 0'
    },
    [`& .${classes.invisible}`]: {
        visibility: 'hidden'
    },
    [`& .${classes.hover}`]: {
        background: '#fff',
        borderRadius: 4,
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.15)'
    },
    [`& .${classes.greater}`]: {
        flex: 2,
        textAlign: 'right',
        paddingRight: 8
    },
    [`& .${classes.amount}`]: {
        flex: 2
    },
    [`& .${classes.unit}`]: {
        flex: 1
    },
    [`& .${classes.value}`]: {
        flex: 2,
        textAlign: 'center',
        fontWeight: '500'
    },
    [`& .${classes.valueUnit}`]: {
        flex: 1
    },
    [`& .${classes.actionIcon}`]: {
        fontSize: 14
    },
    [`& .${classes.edit}`]: {
        flex: 1
    },
    [`& .${classes.delete}`]: {
        flex: 1
    }
});

const SalaryTierSettingRow = ({
    row,
    isEditing,
    onDelete,
    onEdit
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
        <Root
            className={classNames(
                classes.settingRow,
                isEditing && hover && classes.hover
            )}
            onMouseEnter={() => isEditing && setHover(true)}
            onMouseLeave={() => isEditing && setHover(false)}
        >
            <EditDialog />
            <span className={classes.greater}>{'≥ '}</span>
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
        </Root>
    );
}

export default (SalaryTierSettingRow)
