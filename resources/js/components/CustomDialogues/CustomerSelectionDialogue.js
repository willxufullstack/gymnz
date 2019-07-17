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

const styles = {
    customerList: {
        maxHeight: 360,
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
            selectedCustomer: null
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
                    <Button color='transparentPrimary' onClick={() => this.props.onSelect(this.state.selectedCustomer)}>Save</Button>
                </ListItemSecondaryAction>
            </ListItem>
            :
            <ListItem key={customer.id} onClick={this.onTapCustomer(customer)} button>
                <ListItemText className={classes.customerName} primary={customer.name} />
            </ListItem>;
    }

    render() {
        const { title, customers, onCancel, classes } = this.props;

        return (<Dialog open={true} onClose={onCancel} fullWidth={true}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                <List className={classes.customerList}>
                    {customers.map(customer => this.getCustomerRow(customer))}
                </List>
            </DialogContent>
        </Dialog>);
    }
}

export default withStyles(styles)(CustomerSelectionDialogue);
