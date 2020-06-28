import React from 'react'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import { pinyin } from '-utils'
import i18N from '../../lang'
import Titlebar from '../TitleBar/Titlebar'
import RoundButton from '../RoundButton/RoundButton'
import dayjs from 'dayjs'
import SearchInput from '../SearchInput/SearchInput'

const L = i18N('CustomerSelectionDialogue')
const styles = {
    time: {
        color: '#999',
        position: 'relative',
        margin: '0 0 -6px 24px',
        fontSize: 18,
        flex: 1
    },
    searchBox: {
        marginTop: 0
    },
    searchBoxInput: {
        color: '#9c27b0'
    },
    customerList: {
        height: 320
    },
    customerName: {
        color: '#333',
        flex: 2,
        '&> span': {
            fontWeight: '700',
            fontSize: 14
        }
    },
    customerNameSelected: {
        color: '#29aa99',
        flex: 2,
        '&> span': {
            fontSize: 14,
            color: '#29aa99',
            fontWeight: '700'
        }
    },
    lastDate: {
        flex: 3,
        fontWeight: '400 !important',
        paddingLeft: 64,
        fontSize: 14,
        color: '#999'
    },
    customerRow: {
        borderRadius: 8,
        '&:hover': {
            backgroundColor: '#F3F3F3'
        }
    },
    selectedCustomer: {
        borderRadius: 8,
        backgroundColor: '#fff !important',
        '&> span': {
            fontSize: 14,
            fontWeight: '700',
            color: '#29aa99'
        }
    }
}

class CustomerSelectionDialogue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCustomer: null,
            input: ''
        }
    }

    onTapCustomer = selectedCustomer => () => {
        this.setState({ selectedCustomer })
    }

    getCustomerRow = customer => {
        const { classes } = this.props
        const selected =
            this.state.selectedCustomer &&
            customer.id === this.state.selectedCustomer.id
        const lastDate = customer.latest_schedule
            ? dayjs(customer.latest_schedule.date).format('MM/DD')
            : '- -'
        return (
            <ListItem
                onClick={this.onTapCustomer(customer)}
                key={customer.id}
                button
                disableRipple
                className={
                    selected ? classes.selectedCustomer : classes.customerRow
                }
            >
                <ListItemText
                    className={
                        selected
                            ? classes.customerNameSelected
                            : classes.customerName
                    }
                    primary={customer.name}
                />
                <span className={classes.lastDate}>{lastDate}</span>
                <RoundButton
                    color="#29aa99"
                    label={L.schedule}
                    extend={8}
                    shadow
                    style={{ visibility: selected ? 'visible' : 'hidden', opacity: selected ? 1 : 0, transition: 'opacity 0.15s linear, visibility 0.15s linear' }}
                    onClick={() =>
                        customer && this.props.onSelect(this.state.selectedCustomer)
                    }
                />
            </ListItem>
        )
    }

    filteredCustomer = () => {
        if (!this.state.input) {
            return this.props.customers || []
        }
        return this.props.customers.filter(
            c =>
                c.name.indexOf(this.state.input) >= 0 ||
                pinyin
                    .getInitChars(c.name)
                    .indexOf(this.state.input.toLowerCase()) >= 0
        )
    }

    onSearchKeyChanged = e => {
        this.setState({
            selectedCustomer: null,
            input: e.currentTarget.value
        })
    }

    render() {
        const { title, time, onCancel, classes } = this.props
        return (
            <Dialog open={this.props.open} onClose={onCancel} fullWidth={true}>
                <DialogTitle>
                    <Titlebar label={title} style={{ padding: '0' }}>
                        <React.Fragment>
                            <div className={classes.time}>{time}</div>
                            <SearchInput
                                onChange={this.onSearchKeyChanged}
                                value={this.state.input}
                                placeholder={'姓名/首字母'}
                            />
                        </React.Fragment>
                    </Titlebar>
                </DialogTitle>
                <DialogContent style={{ paddingTop: 0 }}>
                    <List className={classes.customerList}>
                        {this.filteredCustomer().map(customer =>
                            this.getCustomerRow(customer)
                        )}
                    </List>
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(CustomerSelectionDialogue)
