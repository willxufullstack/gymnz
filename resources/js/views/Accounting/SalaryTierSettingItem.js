import React from 'react'
import ColorHash from 'color-hash'
import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    withStyles,
    Button,
    Divider,
    Switch
} from '@material-ui/core'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import CreateIcon from '@material-ui/icons/Create'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'
import { useState, useEffect } from 'react'
import i18N from '../../lang'
import classNames from 'classnames'
import SalaryTierSettingRow from './SalaryTierSettingRow'

const styles = {
    container: {
        fontSize: 14,
        padding: '6px 8px',
        color: '#333',
        position: 'relative',
        '&:hover': {
            background: '#F3F3F3',
            borderRadius: 4
        }
    },
    editing: {
        background: '#F3F3F3',
        borderRadius: 4
    },
    invisible: {
        visibility: 'hidden'
    },
    editIconContainer: {
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
    editIcon: {
        fontSize: 14,
        color: '#fff'
    },
    label: {
        fontWeight: '900',
        paddingRight: 4,
        borderRight: '2px solid #aaa'
    },
    mode: {
        marginLeft: 8,
        color: '#fff',
        border: '2px solid #FFCF73',
        fontSize: 10,
        padding: '0 4px',
        background: '#FF9900',
        borderRadius: '4px',
        fontWeight: 900,
        height: 20,
        lineHeight: '16px'
    },
    titleRow: {
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center'
    },
    modeToggle: {
        marginLeft: 8
    },
    buttonRow: {
        display: 'flex',
        margin: '6px 18px'
    },
    cancelBtn: {
        flex: 1,
        color: '#FF5050',
        fontWeight: '900'
    },
    saveBtn: {
        flex: 1,
        color: '#4fd2c2',
        fontWeight: '900'
    },
    divider: {
        width: 96,
        margin: '16px auto 6px;'
    },
    modeToggleContainer: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center'
    },
    modeSwithValue: {
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
    checked: {
        left: 14
    },
    unchecked: {
        left: 26
    }
}

const SalaryTierSettingItem = ({ classes, setting, label, onSaveSetting }) => {
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

    const ModeSwitch = withStyles({
        root: {
            width: 46,
            height: 20,
            padding: 0,
            display: 'flex'
        },
        switchBase: {
            padding: 4,
            color: '#fff',
            borderColor: '#FDC794',
            '&$checked': {
                transform: 'translateX(25px)',
                color: '#fff',
                '& + $track': {
                    opacity: 1,
                    backgroundColor: '#FF9900'
                }
            }
        },
        thumb: {
            width: 12,
            height: 12,
            boxShadow: 'none'
        },
        track: {
            borderRadius: 20 / 2,
            opacity: 1,
            backgroundColor: '#FF9900',
            border: '2px solid #FDC794'
        },
        checked: {}
    })(Switch)

    return (
        <React.Fragment>
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
                            />
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
        </React.Fragment>
    )
}

export default withStyles(styles)(SalaryTierSettingItem)
