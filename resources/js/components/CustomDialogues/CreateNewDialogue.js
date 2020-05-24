import React from 'react'
import Select from 'react-select'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridItem from '-components/Grid/GridItem.jsx'
import GridContainer from '-components/Grid/GridContainer.jsx'
import CustomInput from '-components/CustomInput/CustomInput.jsx'
import Button from '-components/CustomButtons/Button.jsx'
import Card from '-components/Card/Card.jsx'
import CardHeader from '-components/Card/CardHeader.jsx'
import CardBody from '-components/Card/CardBody.jsx'
import CardFooter from '-components/Card/CardFooter.jsx'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import i18N from '../../lang'

const L = i18N('CreateNewDialogue')

const styles = {
    noMargin: {
        margin: 0
    },
    dialogueTitle: {
        borderBottom: '1px solid #ccc'
    },
    cardCategoryWhite: {
        color: 'rgba(255,255,255,.62)',
        margin: '0',
        fontSize: '14px',
        marginTop: '0',
        marginBottom: '0'
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: '300',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: '3px',
        textDecoration: 'none'
    },
    formSelection: {
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10
    }
}

class CreateNewDialogue extends React.Component {
    constructor(props) {
        super(props)
        let data = {}
        this.explainedFields().forEach(field => {
            data[field.name] = field.value || ''
            if(field.options) {
                data[field.name] = field.options.find( opt => opt.value === field.value) || ''
            }
        })
        this.state = data
    }

    cancel = (e) => {
        this.props.onCancel()
        e.stopPropagation()
    }

    save = (e) => {
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
        this.setState({__show: false})
        this.props.onSave(data)
    }

    onChange = field => e => {
        let changed = {}
        changed[field.name] = e.currentTarget.value
        this.setState(changed)
        if (field.onChange) {
            field.onChange(e.currentTarget.value)
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
                    validateFunc = v => v.length >= 8
                    break
                case 'number':
                    validateFunc = v => v.length && /^\d+$/.test(v)
                    break
                case 'decimal':
                    validateFunc = v => v.length && /^[\d\.]+$/.test(v)
                    break
                case 'phone':
                    validateFunc = v =>
                        v.length && /^[1]([3-9])[0-9]{9}$/.test(v)
                    break
                case 'email':
                    validateFunc = v =>
                        v.length &&
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
                    break
                default:
                    validateFunc = v => {
                        let value = v
                        if (v.value) {
                            value = v.value
                        }
                        return !!value
                    }
            }
        }
        return validateFunc(this.state[field.name])
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

    customerRow = field => {
        const names = {
            name: field.columns.name || 'name',
            sex: field.columns.sex || 'sex',
            phone: field.columns.phone || 'phone'
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
                validation: v => v.length > 0,
                onChange: text => {
                    const customer = field.customers.find(c => c.name === text)
                    if (customer) {
                        this.setState({
                            [names.sex]: sexOpt(customer.sex),
                            [names.phone]: customer.email
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
            }
        ]
    }

    inputRow = ({ field }) => {
        return (
            <GridItem
                gridClass={field.hide && 'hide'}
                key={field.name}
                xs={12}
                sm={12}
                md={12}
            >
                <CustomInput
                    style={styles.noMargin}
                    labelText={this.getLabel(field)}
                    id={field.name.replace(/ /, '-')}
                    formControlProps={{
                        fullWidth: true
                    }}
                    error={
                        this.state[field.name]
                            ? !this.isValid(field)
                            : undefined
                    }
                    success={
                        this.state[field.name] ? this.isValid(field) : undefined
                    }
                    inputProps={{
                        type: this.getInputType(field),
                        value: this.state[field.name],
                        onChange: this.onChange(field),
                        placeholder: field.placeholder || ''
                    }}
                />
            </GridItem>
        )
    }

    optionsRow = ({ field }) => {
        const { classes } = this.props
        return (
            <GridItem
                gridClass={field.hide && 'hide'}
                key={field.name}
                xs={12}
                sm={12}
                md={12}
            >
                <Select
                    className={'form-selection ' + classes.formSelection}
                    options={field.options}
                    onChange={opt => {
                        this.setState({ [field.name]: opt })
                        this.isValid(field)
                    }}
                    placeholder={this.getLabel(field)}
                    value={this.state[field.name]}
                />
            </GridItem>
        )
    }

    getCard = () => {
        const { classes } = this.props
        return (
            <GridContainer alignItems="center" justify={'center'}>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>
                                {this.props.title}
                            </h4>
                            <p className={classes.cardCategoryWhite}>
                                {this.props.subtitle || ''}
                            </p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
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
                                    return (
                                        <this.inputRow
                                            key={field.name}
                                            field={field}
                                        />
                                    )
                                })}
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button onClick={this.cancel}>{L.cancel}</Button>
                            <Button
                                disabled={
                                    !this.props.allowEmpty &&
                                    !this.explainedFields().reduce(
                                        (preValue, curValue) => {
                                            return (
                                                !!preValue &&
                                                this.isValid(curValue)
                                            )
                                        },
                                        true
                                    )
                                }
                                onClick={this.save}
                                color="primary"
                            >
                                {L.save}
                            </Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        )
    }

    getDialogue = () => {
        const { classes } = this.props
        return (
            <Dialog
                fullWidth={true}
                open={this.props.open === undefined ? true : this.props.open}
                onClose={this.cancel}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle
                    id="form-dialog-title"
                    style={styles.dialogueTitle}
                >
                    {this.props.title}
                </DialogTitle>
                <DialogContent style={{minHeight: this.props.minHeight}}>
                    <DialogContentText>
                        {this.props.subtitle || ''}
                    </DialogContentText>
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
                        return <this.inputRow key={field.name} field={field} />
                    })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.cancel} color="transparentGray">
                        {L.cancel}
                    </Button>
                    <Button
                        disabled={
                            !this.props.allowEmpty &&
                            !this.explainedFields().reduce(
                                (preValue, curValue) => {
                                    return !!preValue && this.isValid(curValue)
                                },
                                true
                            )
                        }
                        onClick={this.save}
                        color="primary"
                    >
                        {L.save}
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    render() {
        return this.props.dialogue ? this.getDialogue() : this.getCard()
    }
}

CreateNewDialogue.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    inputFields: PropTypes.array,
    title: PropTypes.string
}

export default withStyles(styles)(CreateNewDialogue)
