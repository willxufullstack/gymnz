import React from 'react'
import CSVReader from 'react-csv-reader'
import {bindActionCreators} from "redux"
import {connect} from 'react-redux'
import * as Actions from "../../actions"
import LoadingLayer from "-components/LoadingLayer/LoadingLayer"
import MaterialTable from "material-table"
import { withStyles } from '@material-ui/core'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import Button from '-components/CustomButtons/Button.jsx'

const styles = {
    cell: {
        border: 'solid 1px #999'
    },
    sample: {
        fontSize: 12,
        fontWeight: '900',
        marginLeft: 18
    },
    downloadIcon: {
        fontSize: '1rem',
        position: 'relative',
        top: 4
    }
}
class CsvDataImport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            csvData: [],
            batchSize: 100,
            sleepTime: 2000,
            showTable: false,
            saving: false,
            done: false
        }
    }

    sampleData = () => {
        return <React.Fragment>
            <hr/>
            <h4>样例数据  <a style={styles.sample} href='http://static.o2-fit.com/public/import_sample.csv'>下载数据模版<CloudDownloadIcon style={styles.downloadIcon}/></a></h4>
            <table>
                <thead>
                    <tr>
                        <th>价格</th>
                        <th>课程数量</th>
                        <th>有效期(月)</th>
                        <th>创建时间</th>
                        <th>客户姓名</th>
                        <th>客户电话</th>
                        <th>客户性别</th>
                        <th>教练姓名</th>
                        <th>教练电话</th>
                        <th>已上课程</th>
                    </tr>
                    <tr>
                        <th style={styles.cell}>price</th>
                        <th style={styles.cell}>course_amount</th>
                        <th style={styles.cell}>duration</th>
                        <th style={styles.cell}>created_at</th>
                        <th style={styles.cell}>customer_name</th>
                        <th style={styles.cell}>customer_phone</th>
                        <th style={styles.cell}>customer_sex</th>
                        <th style={styles.cell}>coach_name</th>
                        <th style={styles.cell}>coach_phone</th>
                        <th style={styles.cell}>schedules</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.cell}>12000</td>
                        <td style={styles.cell}>30</td>
                        <td style={styles.cell}>12</td>
                        <td style={styles.cell}>2020-01-17</td>
                        <td style={styles.cell}>谢大脚</td>
                        <td style={styles.cell}>13333333333</td>
                        <td style={styles.cell}>男</td>
                        <td style={styles.cell}>陈康</td>
                        <td style={styles.cell}>13211111111</td>
                        <td style={styles.cell}>2019-12-11|2019-12-12</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    }

    dataTable = () => {
        const columns = [
            { title: '姓名', field: 'customer_name' },
            { title: '电话', field: 'customer_phone' },
            { title: '价格', field: 'price' },
            { title: '数量', field: 'course_amount', render: row => row.course_amount},
            { title: '已上', field: 'schedules', render: row => row.schedules ? row.schedules.split('|').length : 0},
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

