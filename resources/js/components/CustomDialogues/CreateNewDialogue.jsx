import React from 'react'
import { styled } from '@mui/material/styles';
import connect from 'react-redux/es/connect/connect'
// core components
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import i18N from '../../lang'
import Titlebar from '../TitleBar/Titlebar'
import { TextField, MenuItem } from '@mui/material'
import RoundButton from '../RoundButton/RoundButton'
import QNUploader from "-components/QNUploader/QNUploader";

const PREFIX = 'CreateNewDialogue';

const classes = {
    form: `${PREFIX}-form`,
    noMargin: `${PREFIX}-noMargin`,
    inputFields: `${PREFIX}-inputFields`,
    textFieldInput: `${PREFIX}-textFieldInput`,
    textFieldInputLabel: `${PREFIX}-textFieldInputLabel`,
    textFieldInputIcon: `${PREFIX}-textFieldInputIcon`,
    textFieldInputUnderline: `${PREFIX}-textFieldInputUnderline`,
    actions: `${PREFIX}-actions`
};

const StyledDialog = styled(Dialog)({
    [`& .${classes.form}`]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [`& .${classes.noMargin}`]: {
        margin: 0
    },
    [`& .${classes.inputFields}`]: {
        margin: '0 8% 18px',
        width: '84%'
    },
    [`& .${classes.textFieldInput}`]: {
        fontSize: 14
    },
    [`& .${classes.textFieldInputLabel}`]: {
        fontSize: 14,
        color: '#aaa'
    },
    [`& .${classes.textFieldInputIcon}`]: {
        color: '#ccc'
    },
    [`& .${classes.textFieldInputUnderline}`]: {
        '&:before': {
            borderColor: '#d3d3d3'
        },
        '&:after': {
            borderColor: '#29aa99'
        },
        '&:hover:not(.Mui-disabled):before': {
            borderColor: '#29aa99'
        },
        '& svg': {
            color: '#aaa'
        }
    },
    [`& .${classes.actions}`]: {
        padding: 24,
        justifyContent: 'center'
    }
});

const L = i18N('CreateNewDialogue')

class CreateNewDialogue extends React.Component {
    constructor(props) {
        super(props)
        let data = {}
        this.explainedFields().forEach(field => {
            data[field.name] = field.value !== undefined ? field.value : ''
        })
        this.state = data
    }

    cancel = e => {
        this.props.onCancel()
        e.stopPropagation()
    }

    save = e => {
        e.stopPropagation()
        let data = {}
        Object.keys(this.state).forEach(k => {
            if (this.state[k] && !k.startsWith('__')) {
                data[k] = this.state[k]
                if (data[k].label) {
                    data[k] = data[k].value
                }
            }
        })
        this.setState({ __show: false })
        this.props.onSave(data)
    }

    onChange = field => e => {
        let changed = {}
        const value = e.currentTarget.value
            ? e.currentTarget.value
            : e.currentTarget.dataset.value
        changed[field.name] = value
        this.setState(changed)
        if (field.onChange) {
            field.onChange(value)
        }
    }

    getLabel = field => {
        return field.label
            ? field.label
            : field.name.charAt(0).toUpperCase() + field.name.slice(1)
    }

    getInputType = field => {
        if (!field.type) {
            return 'text'
        }
        if (field.type === 'phone') {
            return 'number'
        }
        return field.type
    }

    isValid = field => {
        let validateFunc = v => true
        if (field.validation) {
            validateFunc = field.validation
        } else {
            let t = field.type ? field.type.toLowerCase() : ''
            switch (t) {
                case 'password':
                    validateFunc = v => v && v.length >= 8
                    break
                case 'number':
                    validateFunc = v => v && v.length && /^-?\d+$/.test(v)
                    break
                case 'decimal':
                    validateFunc = v => v && v.length && /^[\d\.]+$/.test(v)
                    break
                case 'phone':
                    validateFunc = v =>
                        v && v.length && /^[1]([3-9])[0-9]{9}$/.test(v)
                    break
                case 'file':
                    validateFunc = v =>
                        v && v.length && /^[a-zA-Z0-9].+\.[a-zA-Z]{3,}$/.test(v)
                    break
                case 'email':
                    validateFunc = v =>
                        v &&
                        v.length &&
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
                    break
                default:
                    validateFunc = v => {
                        return v !== undefined && v
                    }
            }
        }
        return validateFunc(this.state[field.name] + '')
    }

    explainedFields = () => {
        const explained = []
        this.props.inputFields.forEach(field => {
            if (field.customers) {
                this.customerRow(field).forEach(row => explained.push(row))
            } else {
                explained.push(field)
            }
        })
        return explained
    }

    saveFile = field => e => {
        this.setState({ [field.name]: e })
        field.refreshToken()
    }

    customerRow = field => {
        const names = {
            name: field.columns.name || 'name',
            sex: field.columns.sex || 'sex',
            phone: field.columns.phone || 'phone',
            birthday: field.columns.birthday || 'birthday'
        }
        const sexOpt = value => {
            const labels = ['女', '男']
            return {
                label: labels[parseInt(value)],
                value: parseInt(value)
            }
        }
        return [
            {
                name: names.name,
                label: '姓名',
                validation: v => v && v.length > 0,
                onChange: text => {
                    const customer = field.customers.find(c => c.name === text)
                    if (customer) {
                        this.setState({
                            [names.sex]: customer.sex,
                            [names.phone]: customer.email,
                            [names.birthday]: customer.birthday
                        })
                    }
                }
            },
            {
                name: names.phone,
                type: 'phone',
                label: '电话'
            },
            {
                name: names.sex,
                label: '性别',
                options: [{ value: 0, label: '女' }, { value: 1, label: '男' }]
            },
            {
                name: names.birthday,
                label: '生日',
                type: 'date'
            }
        ]
    }

    inputRow = ({ field, }) => {
        return (
            <TextField
                variant="standard"
                fullWidth
                className={classes.inputFields}
                id={field.name.replace(/ /, '-')}
                label={this.getLabel(field)}
                onChange={this.onChange(field)}
                value={this.state[field.name]}
                type={this.getInputType(field)}
                placeholder={field.placeholder || ''}
                style={{ display: field.hide ? 'none' : 'block' }}
                InputProps={{
                    classes: {
                        root: classes.textFieldInput,
                        underline: classes.textFieldInputUnderline
                    }
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.textFieldInputLabel
                    }
                }}
                error={
                    this.state[field.name] ? !this.isValid(field) : undefined
                } />
        );
    }

    optionsRow = ({ field }) => {
        const { } = this.props

        return (
            <TextField
                variant="standard"
                fullWidth
                select
                className={classes.inputFields}
                id={field.name.replace(/ /, '-')}
                label={this.getLabel(field)}
                onChange={this.onChange(field)}
                value={this.state[field.name]}
                type={this.getInputType(field)}
                placeholder={field.placeholder || ''}
                style={{ display: field.hide ? 'none' : 'block' }}
                InputProps={{
                    classes: {
                        root: classes.textFieldInput,
                        underline: classes.textFieldInputUnderline
                    }
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.textFieldInputLabel
                    }
                }}
                error={
                    this.state[field.name] ? !this.isValid(field) : undefined
                }>
                {field.options.map(option => (
                    <MenuItem
                        key={option.value}
                        value={option.value}
                        disableRipple
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        );
    }

    fileRow = ({ field, classes}) => {
        return (
            <div className={classes.inputFields}>
                <QNUploader
                    title={'上传文档(PDF)'}
                    variant="outline"
                    fontSize={12}
                    onSuccess={this.saveFile(field)}
                    onFail={e => console.log(e)}
                    type="file"
                    {...this.props.setting.uploadToken}
                />
                <div style={{ position: 'relative', left: 120, top: -23 }}>
                    {this.state[field.name]}
                </div>
            </div>
        )
    }

    getDialogue = () => {
        const {  col } = this.props
        return (
            <StyledDialog
                fullWidth={true}
                open={this.props.open === undefined ? true : this.props.open}
                onClose={this.cancel}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle>
                    <Titlebar
                        label={this.props.title}
                        style={{ padding: '0' }}
                    />
                </DialogTitle>
                <DialogContent style={{ minHeight: this.props.minHeight }}>
                    <form
                        className={classes.form}
                        autoComplete="off"
                        style={{
                            gridTemplateColumns: `repeat(${
                                this.explainedFields().length <= 4 ? 1 : 2
                            }, 1fr)`
                        }}
                    >
                        {this.explainedFields().map(field => {
                            // selection list
                            if (field.options) {
                                return (
                                    <this.optionsRow
                                        key={field.name}
                                        field={field}
                                    />
                                )
                            }
                            if( field.type === 'file') {
                                return (
                                    <this.fileRow
                                        key={field.name}
                                        field={field}
                                        classes={classes}
                                    />
                                )
                            }
                            return (
                                <this.inputRow
                                    key={field.name}
                                    field={field}
                                    classes={classes}
                                />
                            )
                        })}
                    </form>
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <RoundButton
                        shadow
                        extend={12}
                        color="#29aa99"
                        onClick={this.save}
                        fontSize={16}
                        label={L.save}
                        disabled={
                            !this.props.allowEmpty &&
                            !this.explainedFields().reduce(
                                (preValue, curValue) => {
                                    return !!preValue && this.isValid(curValue)
                                },
                                true
                            )
                        }
                    />
                </DialogActions>
            </StyledDialog>
        );
    }

    render() {
        // return this.props.dialogue ? this.getDialogue() : this.getCard()
        return this.getDialogue()
    }
}

const mapStoreToProps = store => {
    return {
        setting: store.setting,
    }
}

const LinkedCreateNewDialogue = connect(
    mapStoreToProps
)(CreateNewDialogue)

export default (LinkedCreateNewDialogue)
