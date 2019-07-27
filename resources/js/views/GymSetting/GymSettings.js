import React from 'react'
import GridItem from "-components/Grid/GridItem";
import GridContainer from "-components/Grid/GridContainer";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"
import "../../../sass/settings.scss"
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import Label from '@material-ui/icons/Dehaze';
import Edit from '@material-ui/icons/Edit';
import Tabs from "-components/CustomTabs/CustomTabs.jsx";
import Coach from "./Coach";
import Organization from './Organization';
import { Typography, Button, IconButton } from '@material-ui/core';
import Primary from '-components/Typography/Primary';
import CreateNewDialogue from "-components/CustomDialogues/CreateNewDialogue";

class GymSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editGymNameDialogue: false,
            selectedTabIndex: 0,
            selectedGymId: props.selectedGymId || 0,
            workingHours: {
                max: props.setting && props.setting.workingHours && props.setting.workingHours.max ? props.setting.workingHours.max : 28,
                min: props.setting && props.setting.workingHours && props.setting.workingHours.min ? props.setting.workingHours.min : 28
            }
        }
    }

    tapTab = (tabIndex) => {
        this.setState({ selectedTabIndex: tabIndex });
    };

    saveWorkingHours = (value) => {
        this.props.actions.updateGym(
            this.state.selectedGymId,
            {
                setting: {
                    workingHours: value
                }
            }
        )
    };

    getEditGymNameDialogue = () => {
        return <CreateNewDialogue
            onCancel={() => { this.setState({ editGymNameDialogue: false }) }}
            onSave={(data) => {
                this.props.actions.updateGym(this.state.selectedGymId, data)
                    .then(() => { this.setState({ editGymNameDialogue: false }) })
            }}
            inputFields={[
                {
                    name: 'name',
                    label: 'Name',
                    value: this.props.selectedGym.name
                }
            ]}
            dialogue={true}
            title="Edit Gym Name"
        />
    };

    getTimeLabel = (v) => {
        let hour = Math.floor(v / 4);
        let min = ['00', '15', '30', '45'][v % 4];
        return `${hour}:${min}`;
    };

    static getDerivedStateFromProps(props, state) {
        if (props.selectedGymId !== state.selectedGymId) {
            return {
                selectedGymId: props.selectedGymId || 0,
                workingHours: {
                    min: props.setting && props.setting.workingHours && props.setting.workingHours.min ? props.setting.workingHours.min : 28,
                    max: props.setting && props.setting.workingHours && props.setting.workingHours.max ? props.setting.workingHours.max : 28
                }
            };
        }
        return null;
    }
    getSettingTab = () => {
        return (
            <GridContainer>
                {this.state.editGymNameDialogue && this.getEditGymNameDialogue()}
                <GridItem xs={12} sm={12} md={6} classes={{ grid: 'setting-option-block' }}>
                    <Typography variant='subtitle1' paragraph><Label fontSize='small' />Available Time</Typography>
                    <InputRange
                        formatLabel={value => this.getTimeLabel(value)}
                        draggableTrack
                        step={1}
                        maxValue={96}
                        minValue={28}
                        onChange={value => this.setState({ workingHours: value })}
                        onChangeComplete={this.saveWorkingHours}
                        value={this.state.workingHours} />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} classes={{ grid: 'setting-option-block' }}>
                    <Typography variant='subtitle1' paragraph ><Label fontSize='small' />Name</Typography>
                    <Primary className='setting-gym-name'>{this.props.selectedGym.name}<IconButton onClick={() => this.setState({ editGymNameDialogue: true })} ><Edit fontSize="large" /></IconButton></Primary>
                </GridItem>
            </GridContainer>
        );
    }

    render() {
        return <Tabs
            title={'Manage'}
            headerColor="primary"
            onSwitch={this.tapTab}
            tabs={[{
                tabName: 'Coach',
                tabContent: <Coach {...this.props} />
            }, {
                tabName: "Gym",
                tabContent: this.getSettingTab(),
            }, {
                tabName: "Organization",
                tabContent: <Organization {...this.props} />
            }]}
        />
    }
}

const mapStoreToProps = (store) => {
    return {
        gym: store.gym,
        setting: store.setting.selectedGym.setting,
        organization: store.organization,
        selectedGymId: store.setting.selectedGym.id, // TODO this can be removed
        selectedGym: store.setting.selectedGym
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const LinkedGymSettings = connect(
    mapStoreToProps,
    mapDispatchToProps
)(GymSettings);

export default LinkedGymSettings;