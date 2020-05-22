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
import {
    Typography,
    IconButton,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormControl
} from '@material-ui/core'
import Primary from '-components/Typography/Primary'
import Confirmation from '-components/CustomDialogues/Confirmation'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import CustomInput from '-components/CustomInput/CustomInput.jsx'
import { withStyles } from '@material-ui/core'
import i18N from '../../lang'
import Switch from 'react-switch'
import LinkedCsvDataImport from '-views/GymSetting/CsvDataImport'
import QNUploader from '-components/QNUploader/QNUploader'

const L = i18N('GymSettings')
const styles = {
    shopPicker: {
        margin: 'auto'
    },
    resetPwdContainer: {
        width: '60%',
        margin: 'auto'
    },
    bonusSettingRow: {
        display: 'flex'
    },
    bonusSwitch: {
        marginLeft: 12
    },
    bounsLabel: {
        flex: 1
    }
}
class GymSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDisableDianpingConfirmation: false,
            showIntegrateDianpingFrame: false,
            showDianpingShopPicker: false,
            editGymNameDialogue: false,
            selectedTabIndex: 0,
            selectedShop: null,
            selectedGymId: props.selectedGymId || 0,
            passwordRest: {
                currentPwd: '',
                newPwd: '',
                repeatPwd: ''
            },
            bonus:
                props.setting && props.setting.bonus ? props.setting.bonus : 0,
            bodyMeasureDays:
                props.setting && props.setting.bodyMeasureDays
                    ? props.setting.bodyMeasureDays
                    : 0,
            disableAppCompleteSchedule: props.setting
                ? props.setting.disableAppCompleteSchedule
                : false,
            enableAppPlanTemplate: props.setting
                ? props.setting.enableAppPlanTemplate
                : false,
            enableConfirmInPlanPage: props.setting
                ? props.setting.enableConfirmInPlanPage
                : false,
            logo: props.setting ? props.setting.logo : '',
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

    componentDidMount() {
        window.addEventListener('message', this)
        this.props.actions.refreshUploadToken()
    }

    componentWillUnmount() {
        window.removeEventListener('message', this)
    }

    handleEvent(e) {
        if (e.type === 'message') {
            this.onDianpingAuthSuccess(event)
        }
    }

    swithItem(propName, description) {
        return (
            <GridItem
                xs={12}
                sm={12}
                md={6}
                classes={{ grid: 'setting-option-block' }}
            >
                <div className={this.props.classes.bonusSettingRow}>
                    <Typography
                        variant="subtitle1"
                        paragraph
                        className={this.props.classes.bounsLabel}
                    >
                        <Label fontSize="small" />
                        {description}
                    </Typography>
                    <Switch
                        onChange={ v => {
                            this.setState(
                                { [propName]: v },
                                () => this.saveSetting(propName)
                            )
                        }}
                        className={this.props.classes.bonusSwitch}
                        checked={!!this.state[propName]}
                        onColor="#ab47bc"
                        onHandleColor="#ab47bc"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="react-switch"
                    />
                </div>
            </GridItem>
        )
    }

    onDianpingAuthSuccess(event) {
        console.log(`Received message: ${event.data}`)
        // save session
        this.props.actions
            .authDianping(event.data.state, event.data.auth_code)
            .then(() =>
                this.setState({
                    showDianpingShopPicker: true,
                    showIntegrateDianpingFrame: false
                })
            )
    }

    tapTab = tabIndex => {
        this.setState({ selectedTabIndex: tabIndex })
    }

    saveWorkingHours = value => {
        const setting = {
            ...this.props.selectedGym.setting,
            workingHours: value
        }
        this.props.actions.updateGym(this.state.selectedGymId, {
            setting
        })
    }
    saveBonus = () => {
        const setting = {
            ...this.props.selectedGym.setting,
            bonus: this.state.bonus
        }
        this.props.actions.updateGym(this.state.selectedGymId, {
            setting
        })
    }

    saveEnableConfirmInPlanPage = () => {
        const setting = {
            ...this.props.selectedGym.setting,
            enableConfirmInPlanPage: this.state.enableConfirmInPlanPage
        }
        this.props.actions.updateGym(this.state.selectedGymId, {
            setting
        })
    }

    saveLogo = url => {
        this.setState({ logo: url }, () => this.saveSetting('logo'))
    }

    saveSetting = option => {
        const setting = {
            ...this.props.selectedGym.setting,
            [option]: this.state[option]
        }
        this.props.actions.updateGym(this.state.selectedGymId, {
            setting
        })
    }

    saveBodyMeasureDays = () => {
        const setting = {
            ...this.props.selectedGym.setting,
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

    getDisableDianpingConfirmation = () => {
        return (
            <Confirmation
                message={'确定要解除与大众点评的绑定吗？'}
                onConfirm={() => this.saveDianpingShop('', '')}
                onCancel={() => {
                    this.setState({ showDisableDianpingConfirmation: false })
                }}
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

    saveDianpingShop = (selectedShop, selectedShopName) => {
        this.props.actions
            .updateGym(this.state.selectedGymId, {
                dianping_shop_id: selectedShop,
                dianping_shop_name: selectedShopName
            })
            .then(() => {
                this.setState({
                    showDisableDianpingConfirmation: false,
                    showDianpingShopPicker: false,
                    showIntegrateDianpingFrame: false
                })
            })
    }
    shopPicker = shops => {
        const selectedShop = this.state.selectedShop
            ? this.state.selectedShop
            : shops[0].open_shop_uuid
        const shopObj = shops.find(shop => shop.open_shop_uuid === selectedShop)
        const shopName = shop =>
            shop.branchname + '/' + shop.shopname + '/' + shop.cityname
        const selectedShopName = shopName(shopObj)

        return (
            <FormControl className={this.props.classes.bonusSettingRow}>
                <Typography variant="subtitle1" paragraph>
                    请选择要绑定的商铺
                </Typography>
                <RadioGroup
                    value={selectedShop}
                    onChange={event =>
                        this.setState({ selectedShop: event.target.value })
                    }
                >
                    {shops.map(shop => (
                        <FormControlLabel
                            key={shop.open_shop_uuid}
                            value={shop.open_shop_uuid}
                            control={<Radio />}
                            label={shopName(shop)}
                        />
                    ))}
                </RadioGroup>
                <Button
                    color="primary"
                    onClick={() =>
                        this.saveDianpingShop(selectedShop, selectedShopName)
                    }
                >
                    保存
                </Button>
            </FormControl>
        )
    }

    getSettingTab = () => {
        const { feature } = this.props.selectedGym

        if (this.state.showDianpingShopPicker) {
            return this.shopPicker(this.props.gym.dianpingShopList)
        }

        if (this.state.showIntegrateDianpingFrame) {
            const url =
                'https://e.dianping.com/dz-open/merchant/auth?app_key=b3d5ba23ab19eaf1&state=' +
                this.state.selectedGymId
            return (
                <iframe
                    style={{ minWidth: '100%', minHeight: 625 }}
                    src={url}
                />
            )
        }

        return (
            <GridContainer>
                {this.state.showDisableDianpingConfirmation &&
                    this.getDisableDianpingConfirmation()}
                {this.state.editGymNameDialogue &&
                    this.getEditGymNameDialogue()}
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <Typography variant="subtitle1" paragraph>
                        <Label fontSize="small" />
                        {L.name}
                    </Typography>
                    <Primary className="setting-gym-name">
                        {this.props.selectedGym.name}
                        <IconButton
                            onClick={() =>
                                this.setState({ editGymNameDialogue: true })
                            }
                        >
                            <Edit fontSize="large" />
                        </IconButton>
                    </Primary>
                </GridItem>
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <Typography variant="subtitle1" paragraph>
                        <Label fontSize="small" />
                        {'设置Logo（为保证清晰度请保证宽度>400px)'}
                    </Typography>
                    <Primary className="setting-gym-name">
                        {this.state.logo && <img src={this.state.logo} />}
                        <QNUploader
                            title={'选择图片'}
                            color="transparentPrimary"
                            {...this.props.rootSetting.uploadToken}
                            onSuccess={this.saveLogo}
                            onFail={e => console.log(e)}
                        />
                    </Primary>
                </GridItem>
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <div className={this.props.classes.bonusSettingRow}>
                        <Typography
                            variant="subtitle1"
                            paragraph
                            className={this.props.classes.bounsLabel}
                        >
                            <Label fontSize="small" />
                            大众点评集成
                        </Typography>
                        <Switch
                            onChange={enableDianping => {
                                if (enableDianping) {
                                    this.setState({
                                        showIntegrateDianpingFrame: true
                                    })
                                } else {
                                    this.setState({
                                        showDisableDianpingConfirmation: true
                                    })
                                }
                            }}
                            className={this.props.classes.bonusSwitch}
                            checked={
                                !!this.props.selectedGym.dianping_shop_name
                            }
                            onColor="#ab47bc"
                            onHandleColor="#ab47bc"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                            className="react-switch"
                        />
                    </div>
                    <Primary className="setting-gym-name">
                        {this.props.selectedGym.dianping_shop_name
                            ? '店铺: ' +
                              this.props.selectedGym.dianping_shop_name
                            : ''}
                    </Primary>
                </GridItem>
                {this.swithItem('disableAppCompleteSchedule','禁用APP课程完成')}
                {this.swithItem('enableAppPlanTemplate', '启用APP训练模版')}
                {this.swithItem('enableConfirmInPlanPage','训练计划中确认课程完成')}
                {this.swithItem('enableCancelCompletedSchedule','允许APP中取消已完成课程')}
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <div className={this.props.classes.bonusSettingRow}>
                        <Typography
                            variant="subtitle1"
                            paragraph
                            className={this.props.classes.bounsLabel}
                        >
                            <Label fontSize="small" />
                            {this.state.bodyMeasureDays
                                ? this.state.bodyMeasureDays
                                : 'N'}{' '}
                            天数据测量提醒
                        </Typography>
                        <Switch
                            onChange={checked => {
                                const bodyMeasureDays = checked ? 40 : 0
                                this.setState(
                                    { bodyMeasureDays },
                                    this.saveBodyMeasureDays
                                )
                            }}
                            className={this.props.classes.bonusSwitch}
                            checked={!!this.state.bodyMeasureDays}
                            onColor="#ab47bc"
                            onHandleColor="#ab47bc"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                            className="react-switch"
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
                <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    classes={{ grid: 'setting-option-block' }}
                >
                    <Typography variant="subtitle1" paragraph>
                        <Label fontSize="small" />
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
                    <div className={this.props.classes.bonusSettingRow}>
                        <Typography
                            variant="subtitle1"
                            paragraph
                            className={this.props.classes.bounsLabel}
                        >
                            <Label fontSize="small" />满{' '}
                            {this.state.bonus ? this.state.bonus : 'N'} 赠1
                        </Typography>
                        <Switch
                            onChange={checked => {
                                const bonus = checked ? 4 : 0
                                this.setState({ bonus }, this.saveBonus)
                            }}
                            className={this.props.classes.bonusSwitch}
                            checked={!!this.state.bonus}
                            onColor="#ab47bc"
                            onHandleColor="#ab47bc"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                            className="react-switch"
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
                    color="primary"
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
                headerColor="primary"
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
                        tabContent: <LinkedCsvDataImport />
                    }
                ]}
            />
        )
    }
}

const mapStoreToProps = store => {
    return {
        gym: store.gym,
        rootSetting: store.setting,
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
