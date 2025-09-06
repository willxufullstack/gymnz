import React from 'react'
import { styled } from '@mui/material/styles';
import ColorHash from 'color-hash'
import { Card, CardHeader, Avatar, CardContent } from '@mui/material';
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import CreateIcon from '@mui/icons-material/Create'
import { useState, useEffect } from 'react'
import i18N from '../../lang'
import SalaryTierSettingItem from './SalaryTierSettingItem'
import Panel from '../../components/Panel/Panel'
import Titlebar from '../../components/TitleBar/Titlebar'

const PREFIX = 'SalarySettingItem';

const classes = {
    cardContent: `${PREFIX}-cardContent`,
    simpleRow: `${PREFIX}-simpleRow`,
    option: `${PREFIX}-option`,
    value: `${PREFIX}-value`,
    editIcon: `${PREFIX}-editIcon`,
    editIconContainer: `${PREFIX}-editIconContainer`,
    editIconContainerPlaceholder: `${PREFIX}-editIconContainerPlaceholder`
};

const StyledPanel = styled(Panel)({
    [`& .${classes.cardContent}`]: {
        paddingTop: 0
    },
    [`& .${classes.simpleRow}`]: {
        display: 'flex',
        fontSize: 14,
        lineHeight: '28px',
        padding: '6px 8px',
        color: '#333',
        borderRadius: 4,
        '&:hover': {
            background: '#F3F3F3'
        }
    },
    [`& .${classes.option}`]: {
        flex: 1,
        fontWeight: '900'
    },
    [`& .${classes.value}`]: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: '18%',
        fontWeight: '500'
    },
    [`& .${classes.editIcon}`]: {
        fontSize: 14,
        color: '#fff'
    },
    [`& .${classes.editIconContainer}`]: {
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
    [`& .${classes.editIconContainerPlaceholder}`]: {
        width: 26,
        height: 26
    }
});

const L = i18N('SalarySetting')

class SalarySettingItem extends React.Component {
    constructor(props) {
        super(props)
    }

    SimpleRow = ({ data,  onSave }) => {
        // const { data, } = this.props
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
            col: 1,
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

    saleRow = () => {
        let setting = JSON.parse(this.props.data.sale_configuration)
        if (!setting || !setting.mode) {
            setting = {
                mode: 'unified',
                rows: [
                    {
                        amount: 0,
                        amountUnit: '元',
                        value: this.props.data.sale_percentage,
                        valueUnit: '%'
                    }
                ]
            }
        }

        const save = updated => {
            const newSetting = {
                ...this.props.data,
                sale_configuration: JSON.stringify(updated)
            }
            this.props.onSave(newSetting)
        }

        return (
            <SalaryTierSettingItem
                setting={setting}
                label={'销提'}
                onSaveSetting={save}
            />
        )
    }

    courseFixedRow = () => {
        let setting = JSON.parse(this.props.data.course_fixed_configuration)
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

        const save = updated => {
            const newSetting = {
                ...this.props.data,
                course_fixed_configuration: JSON.stringify(updated)
            }
            this.props.onSave(newSetting)
        }

        return (
            <SalaryTierSettingItem
                setting={setting}
                label={'课提'}
                onSaveSetting={save}
            />
        )
    }

    render() {
        const { data, } = this.props
        const color = new ColorHash().hex(data.coach.user.name)
        const options = {
            base: L.base,
            course_fixed: L.courseFixed,
            course_trial: '课提(体验课)',
            course_free: L.courseFree,
            course_percentage: L.coursePercent,
            finished_percentage: '完课提成(%)',
            tax: L.tax
        }
        return (
            <StyledPanel style={{ margin: 12 }}>
                <CardHeader
                    title={<Titlebar color={'#89ECC2'} fontSize={20} label={data.coach.user.name} />}
                />
                <CardContent className={classes.cardContent}>
                    {Object.keys(options).map(opt => {
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
                    <this.saleRow />
                </CardContent>
            </StyledPanel>
        );
    }
}

export default (SalarySettingItem)
