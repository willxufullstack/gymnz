import React from 'react'
import { styled } from '@mui/material/styles';
import { Button, Divider, Switch } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import SalaryTierSettingRow from './SalaryTierSettingRow'

const PREFIX = 'SalaryTierSettingItem';

const classes = {
    root: `${PREFIX}-root`,
    switchBase: `${PREFIX}-switchBase`,
    thumb: `${PREFIX}-thumb`,
    track: `${PREFIX}-track`,
    checked: `${PREFIX}-checked`,
    container: `${PREFIX}-container`,
    editing: `${PREFIX}-editing`,
    invisible: `${PREFIX}-invisible`,
    editIconContainer: `${PREFIX}-editIconContainer`,
    editIcon: `${PREFIX}-editIcon`,
    label: `${PREFIX}-label`,
    mode: `${PREFIX}-mode`,
    titleRow: `${PREFIX}-titleRow`,
    modeToggle: `${PREFIX}-modeToggle`,
    buttonRow: `${PREFIX}-buttonRow`,
    cancelBtn: `${PREFIX}-cancelBtn`,
    saveBtn: `${PREFIX}-saveBtn`,
    divider: `${PREFIX}-divider`,
    modeToggleContainer: `${PREFIX}-modeToggleContainer`,
    modeSwithValue: `${PREFIX}-modeSwithValue`,
    checked2: `${PREFIX}-checked2`,
    unchecked: `${PREFIX}-unchecked`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')({
    [`& .${classes.container}`]: {
        fontSize: 14,
        padding: '6px 8px',
        color: '#333',
        position: 'relative',
        '&:hover': {
            background: '#F3F3F3',
            borderRadius: 4
        }
    },
    [`& .${classes.editing}`]: {
        background: '#F3F3F3',
        borderRadius: 4
    },
    [`& .${classes.invisible}`]: {
        visibility: 'hidden'
    },
    [`& .${classes.editIconContainer}`]: {
        position: 'absolute',
        right: 8,
        top: 6,
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
    [`& .${classes.editIcon}`]: {
        fontSize: 14,
        color: '#fff'
    },
    [`& .${classes.label}`]: {
        fontWeight: '900',
        paddingRight: 4,
        borderRight: '2px solid #aaa'
    },
    [`& .${classes.mode}`]: {
        marginLeft: 8,
        color: '#fff',
        border: '2px solid #FFCF73',
        fontSize: 10,
        padding: '0 4px',
        background: '#FF9900',
        borderRadius: '4px',
        fontWeight: 900,
        height: 20,
        lineHeight: '16px',
        alignItems: 'center',
        display: 'flex'
    },
    [`& .${classes.titleRow}`]: {
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center'
    },
    [`& .${classes.modeToggle}`]: {
        marginLeft: 8
    },
    [`& .${classes.buttonRow}`]: {
        display: 'flex',
        margin: '6px 18px'
    },
    [`& .${classes.cancelBtn}`]: {
        flex: 1,
        color: '#FF5050',
        fontWeight: '900'
    },
    [`& .${classes.saveBtn}`]: {
        flex: 1,
        color: '#4fd2c2',
        fontWeight: '900'
    },
    [`& .${classes.divider}`]: {
        width: 96,
        margin: '16px auto 6px;'
    },
    [`& .${classes.modeToggleContainer}`]: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center'
    },
    [`& .${classes.modeSwithValue}`]: {
        position: 'absolute',
        zIndex: 100,
        fontWeight: '900',
        color: '#fff',
        height: 20,
        lineHeight: '20px',
        fontSize: 10,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    [`& .${classes.checked2}`]: {
        left: 18,
        top: 3
    },
    [`& .${classes.unchecked}`]: {
        left: 30,
        top: 3
    }
});

const SalaryTierSettingItem = ({  setting, label, onSaveSetting }) => {
    const [mode, setMode] = useState(setting.mode)
    const [rows, setRows] = useState([...setting.rows.map(row => ({ ...row }))])
    const [showEdit, setShowEdit] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const modeText = mode === 'tier' ? '阶梯' : '均一'

    const onSwitchMode = () => {
        setMode(mode === 'tier' ? 'normal' : 'tier')
    }

    const onSave = () => {
        const newSetting = {
            ...setting,
            mode,
            rows: rows.map(row => {
                return {
                    ...row,
                    amount: parseInt(row.amount),
                    value: parseInt(row.value)
                }
            })
        }
        onSaveSetting(newSetting)
        setIsEditing(false)
    }

    const onCancel = () => {
        setRows([...setting.rows.map(row => ({ ...row }))])
        setIsEditing(false)
    }

    const editRow = (index, data) => {
        const newRows = [...rows]
        newRows[index] = data
        setRows(newRows)
    }

    const addRow = () => {
        const newRows = [...rows]
        newRows.push({ ...newRows[newRows.length - 1] })
        setRows(newRows)
    }

    const removeRow = index => {
        const newRows = [...rows]
        newRows.splice(index, 1)
        setRows(newRows)
    }

    const ModeSwitch = Switch

    return (
        <Root>
            <Divider className={classes.divider} variant="middle" />
            <div
                className={classNames(
                    classes.container,
                    isEditing && classes.editing
                )}
                onMouseEnter={() => setShowEdit(true)}
                onMouseLeave={() => setShowEdit(false)}
            >
                <div
                    className={classNames({
                        [classes.editIconContainer]: true,
                        [classes.invisible]: !showEdit && !isEditing
                    })}
                >
                    {!isEditing && (
                        <CreateIcon
                            onClick={() => setIsEditing(true)}
                            className={classes.editIcon}
                        />
                    )}
                    {isEditing && (
                        <AddIcon
                            onClick={() => addRow()}
                            className={classes.editIcon}
                        />
                    )}
                </div>
                <div className={classes.titleRow}>
                    <span className={classes.label}>{label} </span>
                    {!isEditing && (
                        <span className={classes.mode}>{modeText}</span>
                    )}
                    {isEditing && (
                        <div className={classes.modeToggleContainer}>
                            <span
                                className={classNames(
                                    classes.modeSwithValue,
                                    mode === 'tier'
                                        ? classes.checked
                                        : classes.unchecked
                                )}
                                onClick={onSwitchMode}
                            >
                                {modeText}
                            </span>
                            <ModeSwitch
                                onChange={onSwitchMode}
                                className={classes.modeToggle}
                                checked={mode === 'tier'}
                                classes={{
                                    root: classes.root,
                                    switchBase: classes.switchBase,
                                    thumb: classes.thumb,
                                    track: classes.track,
                                    checked: classes.checked
                                }} />
                        </div>
                    )}
                </div>
                <div>
                    {rows.map((row, index) => (
                        <SalaryTierSettingRow
                            key={index}
                            row={row}
                            isEditing={isEditing}
                            onEdit={data => editRow(index, data)}
                            onDelete={
                                rows.length > 1 && index === rows.length - 1
                                    ? () => removeRow(index)
                                    : null
                            }
                        />
                    ))}
                </div>
                {isEditing && (
                    <div className={classes.buttonRow}>
                        <Button
                            onClick={onCancel}
                            className={classes.cancelBtn}
                            size="small"
                        >
                            <CloseIcon fontSize="small" />
                            取消
                        </Button>
                        <Button
                            onClick={onSave}
                            className={classes.saveBtn}
                            size="small"
                        >
                            <DoneAllIcon fontSize="small" />
                            保存
                        </Button>
                    </div>
                )}
            </div>
        </Root>
    );
}

export default (SalaryTierSettingItem)
