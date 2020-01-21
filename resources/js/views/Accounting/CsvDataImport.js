import React from 'react'
import CSVReader from 'react-csv-reader';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as Actions from "../../actions";
import LoadingLayer from "-components/LoadingLayer/LoadingLayer";
import MaterialTable from "material-table";

class CsvDataImport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            csvData: [],
            batchSize: 1000,
            sleepTime: 2000,
            showTable: false,
            saving: false
        }
    }

    dataTable = () => {
        const columns = [
            { title: '姓名', field: 'customer_name' },
            { title: '电话', field: 'customer_phone' },
            { title: '价格', field: 'price' },
            { title: '数量', field: 'course_amount' },
            { title: '有效期（月）', field: 'duration' },
            { title: '创建时间', field: 'created_at', render: row => row.created_at.substr(0, 10) },
            { title: '教练', field: 'coach_name' }
        ]

        return (<div className='customers-page' >
            <MaterialTable
                title={'已上传'}
                columns={columns}
                data={this.state.csvData}
                options={{
                    pageSize: 10,
                    pageSizeOptions: [],
                    search: false
                }}
            />
        </div>);
    }

    /**
     * save data by batch
     *
     **/
    saveData = async data => {
        this.setState({saving: true});
        for (let i = 0; i < data.length; i += this.state.batchSize) {
            const batch = data.slice(i, i + this.state.batchSize);
            this.props.actions.csvDataImport(
                this.props.selectedGym.id,
                batch
            );
            await new Promise(r => setTimeout(r, this.state.sleepTime));
        }
    }

    handleForce = data => {
        const header = data.shift();
        let result = data.map(row => {
            return row.reduce(function (result, field, index) {
                result[header[index]] = field;
                return result;
            }, {})
        });
        this.saveData(result).then(() => {
            this.setState({
                saving: false,
                showTable: true,
                csvData: result
            });
        });
    };

    render() {
        return (
            <div>
                {this.state.saving && <LoadingLayer/>}
                {!this.state.csvData.length && <div className="csv_data_import">
                    <CSVReader
                        cssClass="react-csv-input"
                        label="请选择订单csv文件"
                        onFileLoaded={this.handleForce}
                    />
                </div>}
                {this.state.showTable && this.dataTable()}
            </div>
        )
    }
}

const mapStoreToProps = store => {
    return {
        selectedGym: store.setting.selectedGym,
        gym: store.gym
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const LinkedCsvDataImport = connect(
    mapStoreToProps,
    mapDispatchToProps
)(CsvDataImport);

export default LinkedCsvDataImport;

