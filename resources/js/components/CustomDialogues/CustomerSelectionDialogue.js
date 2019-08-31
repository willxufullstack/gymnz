import React from "react";
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '-components/CustomButtons/Button';
import { withStyles } from '@material-ui/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CustomInput from "-components/CustomInput/CustomInput.jsx";
import { pinyin } from "-utils";
import Typography from '@material-ui/core/Typography';
import i18N from '../../lang'

const L = i18N('CustomerSelectionDialogue')
const styles = {
    dialogTitle: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    title: {
        background: '#9c27b0',
        color: 'white',
        padding: '12px 24px'
    },
    searchBox: {
        marginTop: 0
    },
    searchBoxInput: {
        color: '#9c27b0',
    },
    customerList: {
        height: 320,
    },
    customerName: {
        color: '#666'
    },
    selectedCustomer: {
        height: 80,
        boxShadow: '0 1px 12px 0 rgba(0, 0, 0, 0.14)'
    },
};

class CustomerSelectionDialogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomer: null,
            input: ''
        }
    }

    onTapCustomer = (selectedCustomer) => () => {
        this.setState({ selectedCustomer });
    };

    getCustomerRow = (customer) => {
        const { classes } = this.props;
        return this.state.selectedCustomer && customer.id === this.state.selectedCustomer.id ?
            <ListItem key={customer.id} className={classes.selectedCustomer}>
                <ListItemText className={classes.customerName} primary={customer.name} />
                <ListItemSecondaryAction>
                    <Button color='primary' onClick={() => this.props.onSelect(this.state.selectedCustomer)}>{L.schedule}</Button>
                </ListItemSecondaryAction>
            </ListItem>
            :
            <ListItem key={customer.id} onClick={this.onTapCustomer(customer)} button>
                <ListItemText className={classes.customerName} primary={customer.name} />
            </ListItem>;
    };

    filteredCustomer = () => {
        if (!this.state.input) {
            return this.props.customers;
        }
        return this.props.customers.filter(c => pinyin.getInitChars(c.name).indexOf(this.state.input.toLowerCase()) >= 0);
    };

    onSearchKeyChanged = (e) => {
        this.setState({
            selectedCustomer: null,
            input: e.currentTarget.value
        });
    };

    render() {
        const { title, onCancel, classes } = this.props;

        return (<Dialog open={true} onClose={onCancel} fullWidth={true}>
            <Typography className={classes.title}>{title}</Typography>
            <DialogTitle className={classes.dialogTitle}>
                <CustomInput
                    id={'Search'}
                    formControlProps={{
                        fullWidth: true,
                        className: classes.searchBox,
                    }}
                    inputProps={{
                        value: this.state.input,
                        onChange: this.onSearchKeyChanged,
                        placeholder: L.search,
                        className: classes.searchBoxInput
                    }}
                />
            </DialogTitle>
            <DialogContent>
                <List className={classes.customerList}>
                    {this.filteredCustomer().map(customer => this.getCustomerRow(customer))}
                </List>
            </DialogContent>
        </Dialog>);
    }
}

export default withStyles(styles)(CustomerSelectionDialogue);
