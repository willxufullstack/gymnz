import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import React from "react";;
import MaterialTable from 'material-table';
import "../../../sass/customer.scss"

class Customers extends React.Component {
    constructor(props) {
        super(props);
    }

    getCustomerListData = () => {
        return this.props.gym.customers.map(c => [c.name, c.email, c.sex ? 'M' : 'F']);
    };

    onRowClick = (_, row) => {
        let customerId = row.id;
        this.props.history.push({ pathname: `customer/${customerId}` });
    };

    render() {
        const header = ['Name', 'Email', 'Sex'];
        const columns = [
            { title: 'Name', field: 'name' },
            { title: 'Phone', render: row => row.email.split('@')[0] },
            { title: 'Sex', field: 'sex', render: row => row.sex ? 'M' : 'F' }
        ]

        return (<div className='customers-page' >
            <MaterialTable
                title='Customers'
                columns={columns}
                data={this.props.gym.customers}
                onRowClick={this.onRowClick}
                options={{
                    pageSize: 10,
                    pageSizeOptions: []
                }}
            />
        </div>);
    }
}

const mapStoreToProps = (store) => {
    return {
        selectedGym: store.setting.selectedGym,
        gym: store.gym,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const LinkedCustomers = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Customers);

export default LinkedCustomers;