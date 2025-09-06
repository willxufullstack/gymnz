import React from 'react'
import { styled } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import classNames from 'classnames'
import { pinyin } from '-utils'
import i18N from '../../lang'
import Titlebar from '../TitleBar/Titlebar'
import RoundButton from '../RoundButton/RoundButton'
import dayjs from 'dayjs'
import SearchInput from '../SearchInput/SearchInput'

const PREFIX = 'CustomerSelectionDialogue';

const classes = {
    time: `${PREFIX}-time`,
    searchBox: `${PREFIX}-searchBox`,
    searchBoxInput: `${PREFIX}-searchBoxInput`,
    customerList: `${PREFIX}-customerList`,
    customerName: `${PREFIX}-customerName`,
    customerNameSelected: `${PREFIX}-customerNameSelected`,
    lastDate: `${PREFIX}-lastDate`,
    customerRow: `${PREFIX}-customerRow`,
    selectedCustomer: `${PREFIX}-selectedCustomer`
};

const StyledDialog = styled(Dialog)({
    [`& .${classes.time}`]: {
        color: '#999',
        position: 'relative',
        margin: '0 0 -6px 24px',
        fontSize: 18,
        flex: 1
    },
    [`& .${classes.searchBox}`]: {
        marginTop: 0
    },
    [`& .${classes.searchBoxInput}`]: {
        color: '#9c27b0'
    },
    [`& .${classes.customerList}`]: {
        height: 320
    },
    [`& .${classes.customerName}`]: {
        color: '#333',
        flex: 2,
        '&> span': {
            fontWeight: '700',
            fontSize: 14
        }
    },
    [`& .${classes.customerNameSelected}`]: {
        color: '#29aa99',
        flex: 2,
        '&> span': {
            fontSize: 14,
            color: '#29aa99',
            fontWeight: '700'
        }
    },
    [`& .${classes.lastDate}`]: {
        flex: 3,
        fontWeight: '400 !important',
        paddingLeft: 64,
        fontSize: 14,
        color: '#999'
    },
    [`& .${classes.customerRow}`]: {
        borderRadius: 8,
        '&:hover': {
            backgroundColor: '#F3F3F3'
        }
    },
    [`& .${classes.selectedCustomer}`]: {
        borderRadius: 8,
        backgroundColor: '#fff !important',
        '&> span': {
            fontSize: 14,
            fontWeight: '700',
            color: '#29aa99'
        }
    }
});

const L = i18N('CustomerSelectionDialogue')

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
        const { } = this.props
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

    onSearchKeyChanged = v => {
        this.setState({
            selectedCustomer: null,
            input: v
        })
    }

    render() {
        const { title, time, onCancel, } = this.props
        return (
            <StyledDialog open={this.props.open} onClose={onCancel} fullWidth={true}>
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
            </StyledDialog>
        );
    }
}

export default (CustomerSelectionDialogue)
