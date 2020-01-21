import React from 'react'
import CSVReader from 'react-csv-reader';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as Actions from "../../actions";
import LoadingLayer from "-components/LoadingLayer/LoadingLayer";

class CsvDataImport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            csvData: [],
            batchSize: 1000,
            sleepTime: 2000
        }
    }

    /**
     * save data by batch
     *
     **/
    saveData = async data => {
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
        this.setState({
            csvData: data
        });
        const header = data.shift();
        let result = data.map(row => {
            return row.reduce(function (result, field, index) {
                result[header[index]] = field;
                return result;
            }, {})
        });
        // call api to save
        this.saveData(result).then(() => {
            console.log(" done !")
        });
    };

    render() {
        return (

            <div>
                {(this.props.gym.loading) && <LoadingLayer/>}
                <div className="csv_data_import">
                    <CSVReader
                        cssClass="react-csv-input"
                        label="请选择订单csv文件"
                        onFileLoaded={this.handleForce}
                    />
                </div>
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

