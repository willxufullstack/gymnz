import "../../../sass/customer.scss"
import React from 'react';
import Button from "-components/CustomButtons/Button.jsx";
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue';
import dayjs from "dayjs";

const options = [
    {
        option: 'Weight',
        unit: 'kg'
    }
]

class CustomerDataSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddDialogue: false
        };
    }

    optionToInputField = (opt) => {
        return {
            name: opt.option,
            label: opt.option,
            type: 'decimal',
            placeholder: opt.unit,
        }
    };

    save = (items, opts, date = null) => {
        if (!date) {
            date = dayjs().format('YYYY-MM-DD');
        }
        let data = Object.keys(items).map((k) => {
            let target = opts.find((opt) => opt.option === k);
            target.value = Number(items[k]);
            target.date = date;
            return target;
        });
        this.props.actions.batchCreateCustomerBodyData(this.props.customerId, data);
    };

    render() {
        if (this.state.showAddDialogue) {
            let params = {
                title: 'Data',
                onSave: (data) => { this.save(data, options) },
                onCancel: () => { },
                inputFields: options.map(this.optionToInputField)
            }
            return <CreateNewDialogue {...params} />;
        }
        return <Button color='primary' onClick={() => this.setState({ showAddDialogue: true })}>ADD</Button>;
    }
}

export default CustomerDataSection;
