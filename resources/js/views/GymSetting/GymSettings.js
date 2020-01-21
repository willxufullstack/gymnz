import React from 'react'
import GridItem from '-components/Grid/GridItem'
import GridContainer from '-components/Grid/GridContainer'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import '../../../sass/settings.scss'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import connect from 'react-redux/es/connect/connect'
import Label from '@material-ui/icons/Dehaze'
import Edit from '@material-ui/icons/Edit'
import Tabs from '-components/CustomTabs/CustomTabs.jsx'
import Coach from './Coach'
import Organization from './Organization'
import Button from '-components/CustomButtons/Button.jsx'
import { Typography, IconButton } from '@material-ui/core'
import Primary from '-components/Typography/Primary'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import CustomInput from '-components/CustomInput/CustomInput.jsx'
import { withStyles } from '@material-ui/core'
import i18N from '../../lang'
import Switch from 'react-switch'
import LinkedCsvDataImport from "-views/Accounting/CsvDataImport";

const L = i18N('GymSettings')
const styles = {
    resetPwdContainer: {
        width: '60%',
        margin: 'auto'
    },
    bonusSettingRow: {
        display: 'flex'
    },
    bonusSwitch: {
        marginLeft: 12,
    },
    bounsLabel: {
        flex: 1
    }
}
class GymSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editGymNameDialogue: false,
            selectedTabIndex: 0,
            selectedGymId: props.selectedGymId || 0,
            passwordRest: {
                currentPwd: '',
                newPwd: '',
                repeatPwd: ''
            },
            bonus: props.setting && props.setting.bonus ? props.setting.bonus : 0,
            bodyMeasureDays: props.setting && props.setting.bodyMeasureDays ? props.setting.bodyMeasureDays : 0,
            disableAppCompleteSchedule: props.setting ? props.setting.disableAppCompleteSchedule : false,
            workingHours: {
                max:
                    props.setting &&
                    props.setting.workingHours &&
                    props.setting.workingHours.max
                        ? props.setting.workingHours.max
                        : 28,
                min:
                    props.setting &&
                    props.setting.workingHours &&
                    props.setting.workingHours.min
                        ? props.setting.workingHours.min
                        : 28
            }
        }
    }

    tapTab = tabIndex => {
        this.setState({ selectedTabIndex: tabIndex })
    }

    saveWorkingHours = value => {
        const setting = { ...this.props.selectedGym.setting,
            workingHours: value
        }
        this.props.actions.updateGym(this.state.selectedGymId, {
            setting
        })
    }
    saveBonus = () => {
        const setting = { ...this.props.selectedGym.setting,
            bonus: this.state.bonus
        }
        this.props.actions.updateGym(this.state.selectedGymId, {
            setting
        })
    }

    saveDisableAppCompleteSchedule = () => {
        const setting = { ...this.props.selectedGym.setting,
            disableAppCompleteSchedule: this.state.disableAppCompleteSchedule
        }
        this.props.actions.updateGym(this.state.selectedGymId, {
            setting
        })
    }

    saveBodyMeasureDays = () => {
        const setting = { ...this.props.selectedGym.setting,
            bodyMeasureDays: this.state.bodyMeasureDays
        }
        this.props.actions.updateGym(this.state.selectedGymId, {
            setting
        })
    }

    getEditGymNameDialogue = () => {
        return (
            <CreateNewDialogue
                onCancel={() => {
                    this.setState({ editGymNameDialogue: false })
                }}
                onSave={data => {
                    this.props.actions
                        .updateGym(this.state.selectedGymId, data)
                        .then(() => {
                            this.setState({ editGymNameDialogue: false })
                        })
                }}
                inputFields={[
                    {
                        name: 'name',
                        label: L.name,
                        value: this.props.selectedGym.name
                    }
                ]}
                dialogue={true}
                title={L.editName}
            />
        )
    }

    getTimeLabel = v => {
        let hour = Math.floor(v / 4)
        let min = ['00', '15', '30', '45'][v % 4]
        return `${hour}:${min}`
    }

    static getDerivedStateFromProps(props, state) {
        if (props.selectedGymId !== state.selectedGymId) {
            return {
                selectedGymId: props.selectedGymId || 0,
                workingHours: {
                    min:
                        props.setting &&
                        props.setting.workingHours &&
                        props.setting.workingHours.min
                            ? props.setting.workingHours.min
                            : 28,
                    max:
                        props.setting &&
                        props.setting.workingHours &&
                        props.setting.workingHours.max
                            ? props.setting.workingHours.max
                            : 28
                }
            }
        }
        return null
    }
    getSettingTab = () => {
        const { feature } = this.props.selectedGym
        return (
            <GridContainer>
                {this.state.editGymNameDialogue &&
                    this.getEditGymNameDialogue()}
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <Typography variant='subtitle1' paragraph>
                        <Label fontSize='small' />
                        {L.availableTime}
                    </Typography>
                    <InputRange
                        formatLabel={value => this.getTimeLabel(value)}
                        draggableTrack
                        step={1}
                        maxValue={96}
                        minValue={28}
                        onChange={value =>
                            this.setState({ workingHours: value })
                        }
                        onChangeComplete={this.saveWorkingHours}
                        value={this.state.workingHours}
                    />
                </GridItem>
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <Typography variant='subtitle1' paragraph>
                        <Label fontSize='small' />
                        {L.name}
                    </Typography>
                    <Primary className='setting-gym-name'>
                        {this.props.selectedGym.name}
                        <IconButton
                            onClick={() =>
                                this.setState({ editGymNameDialogue: true })
                            }
                        >
                            <Edit fontSize='large' />
                        </IconButton>
                    </Primary>
                </GridItem>
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <div className={this.props.classes.bonusSettingRow}>
                        <Typography variant='subtitle1' paragraph className={this.props.classes.bounsLabel}>
                            <Label fontSize='small' />
                            满 {this.state.bonus ? this.state.bonus : 'N'} 赠1
                        </Typography>
                        <Switch
                            onChange={(checked)=>{
                                const bonus = checked ? 4 : 0
                                this.setState({bonus}, this.saveBonus)
                            }}
                            className={this.props.classes.bonusSwitch}
                            checked={!!this.state.bonus}
                            onColor='#ab47bc'
                            onHandleColor='#ab47bc'
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                            activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                            height={20}
                            width={48}
                            className='react-switch'
                        />
                    </div>
                    {!!this.state.bonus && (
                        <InputRange
                            step={1}
                            maxValue={15}
                            minValue={4}
                            onChange={v => {
                                this.setState({ bonus: v })
                            }}
                            onChangeComplete={this.saveBonus}
                            value={this.state.bonus}
                        />
                    )}
                </GridItem>
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <div className={this.props.classes.bonusSettingRow}>
                        <Typography variant='subtitle1' paragraph className={this.props.classes.bounsLabel}>
                            <Label fontSize='small' />
                            禁用APP课程完成
                        </Typography>
                        <Switch
                            onChange={(disableAppCompleteSchedule)=>{
                                this.setState({disableAppCompleteSchedule}, this.saveDisableAppCompleteSchedule)
                            }}
                            className={this.props.classes.bonusSwitch}
                            checked={!!this.state.disableAppCompleteSchedule}
                            onColor='#ab47bc'
                            onHandleColor='#ab47bc'
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                            activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                            height={20}
                            width={48}
                            className='react-switch'
                        />
                    </div>
                </GridItem>
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <div className={this.props.classes.bonusSettingRow}>
                        <Typography variant='subtitle1' paragraph className={this.props.classes.bounsLabel}>
                            <Label fontSize='small' />
                            {this.state.bodyMeasureDays ? this.state.bodyMeasureDays : 'N'} 天数据测量提醒
                        </Typography>
                        <Switch
                            onChange={(checked)=>{
                                const bodyMeasureDays = checked ? 40 : 0
                                this.setState({bodyMeasureDays}, this.saveBodyMeasureDays)
                            }}
                            className={this.props.classes.bonusSwitch}
                            checked={!!this.state.bodyMeasureDays}
                            onColor='#ab47bc'
                            onHandleColor='#ab47bc'
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                            activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                            height={20}
                            width={48}
                            className='react-switch'
                        />
                    </div>
                    {!!this.state.bodyMeasureDays && (
                        <InputRange
                            step={10}
                            maxValue={90}
                            minValue={30}
                            onChange={v => {
                                this.setState({ bodyMeasureDays: v })
                            }}
                            onChangeComplete={this.saveBodyMeasureDays}
                            value={this.state.bodyMeasureDays}
                        />
                    )}
                </GridItem>
            </GridContainer>
        )
    }

    passwordResetForm = () => {
        const onInput = field => e => {
            let passwordRest = { ...this.state.passwordRest }
            passwordRest[field] = e.currentTarget.value
            this.setState({ passwordRest })
        }
        const isValid =
            !!this.state.passwordRest.currentPwd &&
            !!this.state.passwordRest.repeatPwd &&
            !!this.state.passwordRest.newPwd &&
            this.state.passwordRest.newPwd === this.state.passwordRest.repeatPwd
        return (
            <div className={this.props.classes.resetPwdContainer}>
                <CustomInput
                    labelText={L.currentPwd}
                    id={L.currentPwd}
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        type: 'password',
                        value: this.state.passwordRest.currentPwd,
                        onChange: onInput('currentPwd')
                    }}
                />
                <CustomInput
                    labelText={L.newPwd}
                    id={L.newPwd}
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        type: 'password',
                        value: this.state.passwordRest.newPwd,
                        onChange: onInput('newPwd')
                    }}
                />
                <CustomInput
                    labelText={L.repeatPwd}
                    id={L.repeatPwd}
                    formControlProps={{
                        fullWidth: true
                    }}
                    error={
                        this.state.passwordRest.repeatPwd !==
                        this.state.passwordRest.newPwd
                    }
                    inputProps={{
                        type: 'password',
                        value: this.state.passwordRest.repeatPwd,
                        onChange: onInput('repeatPwd')
                    }}
                />
                <Button
                    disabled={!isValid}
                    style={{ marginTop: 16 }}
                    color='primary'
                    fullWidth={true}
                    onClick={() => {
                        this.props.actions.changePwd(
                            this.state.passwordRest.currentPwd,
                            this.state.passwordRest.newPwd
                        )
                    }}
                >
                    {L.save}
                </Button>
            </div>
        )
    }

    render() {
        return (
            <Tabs
                title={''}
                headerColor='primary'
                onSwitch={this.tapTab}
                tabs={[
                    {
                        tabName: L.coach,
                        tabContent: <Coach {...this.props} />
                    },
                    {
                        tabName: L.gym,
                        tabContent: this.getSettingTab()
                    },
                    {
                        tabName: L.organization,
                        tabContent: <Organization {...this.props} />
                    },
                    {
                        tabName: L.resetPwd,
                        tabContent: this.passwordResetForm()
                    },
                    {
                        tabName: L.csvDataImport,
                        tabContent: <LinkedCsvDataImport/>
                    }
                ]}
            />
        )
    }
}

const mapStoreToProps = store => {
    return {
        gym: store.gym,
        setting: store.setting.selectedGym.setting,
        organization: store.organization,
        selectedGymId: store.setting.selectedGym.id, // TODO this can be removed
        selectedGym: store.setting.selectedGym
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const LinkedGymSettings = connect(
    mapStoreToProps,
    mapDispatchToProps
)(GymSettings)

export default withStyles(styles)(LinkedGymSettings)
