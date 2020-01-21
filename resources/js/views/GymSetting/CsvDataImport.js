import React from 'react'
import CSVReader from 'react-csv-reader';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as Actions from "../../actions";
import LoadingLayer from "-components/LoadingLayer/LoadingLayer";
import MaterialTable from "material-table";
import { withStyles } from '@material-ui/core'
import Button from '-components/CustomButtons/Button.jsx'

const styles = {
}
class CsvDataImport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            csvData: [],
            batchSize: 1000,
            sleepTime: 2000,
            showTable: false,
            saving: false,
            done: false
        }
    }

    sampleData = () => {
        return <React.Fragment>
            <hr/>
            <h4>样例数据</h4>
            <p>price,course_amount,duration,created_at,customer_name,customer_phone,customer_sex,coach_name,coach_phone</p>
            <p>22,5,3,2020-01-17,客户A,13333333333,1,教练A,13211111111</p>
            <p>33,6,3,2020-01-17,客户B,13344444444,1,教练B,13222222222</p>
        </React.Fragment>
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
                title={'预览'}
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
        this.setState({saving: true});
    }

    onFileSelected = data => {
        const header = data.shift();
        let result = data.map(row => {
            return row.reduce(function (result, field, index) {
                result[header[index]] = field;
                return result;
            }, {})
        });
        this.setState({
            showTable: true,
            csvData: result
        });
    };

    runImport = async () => {
        this.setState({saving: true})
        const data = this.state.csvData
        for (let i = 0; i < data.length; i += this.state.batchSize) {
            const batch = data.slice(i, i + this.state.batchSize)
            this.props.actions.csvDataImport(
                this.props.selectedGym.id,
                batch
            );
            await new Promise(r => setTimeout(r, this.state.sleepTime))
        }
        this.setState({
            saving: false,
            done: true
        })
    }

    render() {
        return (
            <div>
                {this.state.saving && <LoadingLayer/>}
                <p>{this.state.done && '已完成'}</p>
                <p>{!this.state.done && !this.state.showTable && '请选择CSV文件'}</p>
                <p>{!this.state.done && this.state.showTable && <Button onClick={this.runImport} color='primary'>开始导入</Button>}</p>
                {!this.state.done && <CSVReader
                    label=''
                    onFileLoaded={this.onFileSelected}
                />}
                {this.state.showTable ? this.dataTable() : this.sampleData()}
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

export default withStyles(styles)(LinkedCsvDataImport);

