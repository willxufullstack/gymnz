import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import React from "react";;
import MaterialTable from 'material-table';
import "../../../sass/customer.scss"
import i18N from '../../lang'

const L = i18N('Customers')
class Customers extends React.Component {
    constructor(props) {
        super(props);
    }

    getCustomerListData = () => {
        return this.props.gym.customers.map(c => [c.name, c.email, c.sex ? L.male : L.female]);
    };

    onRowClick = (_, row) => {
        let customerId = row.id;
        this.props.history.push({ pathname: `customer/${customerId}` });
    };

    render() {
        const columns = [
            { title: L.name, field: 'name' },
            { title: L.phone, field: 'email' },
            { title: L.sex, field: 'sex', render: row => row.sex ? L.male : L.female }
        ]

        return (<div className='customers-page' >
            <MaterialTable
                title={L.customers}
                columns={columns}
                data={this.props.gym.customers}
                onRowClick={this.onRowClick}
                options={{
                    pageSize: 10,
                    pageSizeOptions: []
                }}
                localization={{
                    body: {
                        emptyDataSourceMessage: L.emptyDataSourceMessage
                    },
                    toolbar: {
                        searchTooltip: L.searchTooltip,
                        searchPlaceholder: L.searchPlaceholder
                    }

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