import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import '../../../sass/settings.scss'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import connect from 'react-redux/es/connect/connect'
import Coach from './Coach'
import Organization from './Organization'
import {
    Typography,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormControl
} from '@mui/material'
import Confirmation from '-components/CustomDialogues/Confirmation'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import { Switch } from '@mui/material';
import i18N from '../../lang'
import LinkedCsvDataImport from '-views/GymSetting/CsvDataImport'
import QNUploader from '-components/QNUploader/QNUploader'
import LightTabs from '../../components/LightTabs/LightTabs'
import Panel from '../../components/Panel/Panel'
import Titlebar from '../../components/TitleBar/Titlebar'
import RoundButton from '../../components/RoundButton/RoundButton'

const PREFIX = 'GymSettings';

const classes = {
    optionContainer: `${PREFIX}-optionContainer`,
    optionTextValue: `${PREFIX}-optionTextValue`,
    optionTextIntroduction: `${PREFIX}-optionTextIntroduction`,
    shopPicker: `${PREFIX}-shopPicker`,
    resetPwdContainer: `${PREFIX}-resetPwdContainer`,
    bonusSettingRow: `${PREFIX}-bonusSettingRow`,
    bonusSwitch: `${PREFIX}-bonusSwitch`,
    bounsLabel: `${PREFIX}-bounsLabel`,
    inputRange: `${PREFIX}-inputRange`
};

const StyledLinkedCsvDataImport = styled(LinkedCsvDataImport)({
    [`& .${classes.optionContainer}`]: {
        padding: `6px 16px 12px`,
        minHeight: 166,

        '&:hover': {
            boxShadow: '0px 2px 24px rgba(0, 0, 0, 0.1)'
        }
    },
    [`& .${classes.optionTextValue}`]: {
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        fontWeight: '900',
        paddingTop: 12,
        color: '#29aa99'
    },
    [`& .${classes.optionTextIntroduction}`]: {
        fontSize: 12,
        color: '#666',
        display: 'flex',
        alignItems: 'center',
        fontWeight: '500',
        paddingTop: 12
    },
    [`& .${classes.shopPicker}`]: {
        margin: 'auto'
    },
    [`& .${classes.resetPwdContainer}`]: {
        width: '60%',
        margin: 'auto'
    },
    [`& .${classes.bonusSettingRow}`]: {
        display: 'flex'
    },
    [`& .${classes.bonusSwitch}`]: {
        marginLeft: 12
    },
    [`& .${classes.bounsLabel}`]: {
        flex: 1
    },
    [`& .${classes.inputRange}`]: {
        margin: 20
    }
});

const L = i18N('GymSettings')
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
            enableBossFeedback: props.setting
                ? props.setting.enableBossFeedback
                : false,
            enableAppPlanTemplate: props.setting
                ? props.setting.enableAppPlanTemplate
                : false,
            enableConfirmInPlanPage: props.setting
                ? props.setting.enableConfirmInPlanPage
                : false,
            enableCoachTrain: props.setting
                ? props.setting.enableCoachTrain
                : false,
            logo: props.setting ? props.setting.logo : '',
            planCover:
                props.setting && props.setting.planCover
                    ? props.setting.planCover
                    : 'http://static.o2-fit.com/image/plan_cover_0808.png',
            confirmCover:
                props.setting && props.setting.confirmCover
                    ? props.setting.confirmCover
                    : 'http://static.o2-fit.com/image/summary_cover_0807.png',
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

    swithItem(propName, description, introduction) {
        const { } = this.props
        return (
            <Panel className={classes.optionContainer}>
                <Titlebar color="#89ECC2" label={description} fontSize={16}>
                    <Switch
                        onChange={event => {
                            this.setState(
                                { [propName]: event.target.checked },
                                () => this.saveSetting(propName)
                            )
                        }}
                        checked={!!this.state[propName]}
                        color="primary"
                    />
                </Titlebar>
                <div className={classes.optionTextIntroduction}>
                    {introduction}
                </div>
            </Panel>
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
        this.props.actions.refreshUploadToken()
    }

    saveImageSetting = option => url => {
        this.setState({ [option]: url }, () => this.saveSetting(option))
        this.props.actions.refreshUploadToken()
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
            <FormControl variant="standard" className={this.props.classes.bonusSettingRow}>
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
                <RoundButton
                    color="#29aa99"
                    label={'保存'}
                    onClick={() =>
                        this.saveDianpingShop(selectedShop, selectedShopName)
                    }
                />
            </FormControl>
        );
    }

    getSettingTab = () => {
        const { feature } = this.props.selectedGym
        const { } = this.props

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
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridGap: 24,
                    paddingTop: 20,
                    paddingBottom: 20
                }}
            >
                {this.state.showDisableDianpingConfirmation &&
                    this.getDisableDianpingConfirmation()}
                {this.state.editGymNameDialogue &&
                    this.getEditGymNameDialogue()}
                <Panel className={classes.optionContainer}>
                    <Titlebar
                        fontSize={16}
                        color={'#89ECC2'}
                        label={'设置Logo'}
                        style={{ marginTop: 8 }}
                    >
                        <QNUploader
                            title={'选择图片'}
                            variant="outline"
                            fontSize={12}
                            {...this.props.rootSetting.uploadToken}
                            onSuccess={this.saveLogo}
                            onFail={e => console.log(e)}
                        />
                    </Titlebar>
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                        {this.state.logo && (
                            <img height={90} src={this.state.logo} />
                        )}
                    </div>
                    <div className={classes.optionTextIntroduction}>
                        {'为保证清晰度请保证宽度>400px'}
                    </div>
                </Panel>
                <Panel className={classes.optionContainer}>
                    <Titlebar
                        fontSize={16}
                        color={'#89ECC2'}
                        label={L.name}
                        style={{ marginTop: 8 }}
                    >
                        <RoundButton
                            color="#29aa99"
                            variant="outline"
                            fontSize={12}
                            onClick={() =>
                                this.setState({ editGymNameDialogue: true })
                            }
                            label={'修改'}
                        />
                    </Titlebar>
                    <div className={classes.optionTextValue}>
                        {this.props.selectedGym.name}
                    </div>
                </Panel>
                <Panel className={classes.optionContainer}>
                    <div className={this.props.classes.bonusSettingRow}>
                        <Titlebar
                            fontSize={16}
                            color={'#89ECC2'}
                            label={'大众点评集成'}
                        >
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
                                className={classes.bonusSwitch}
                                checked={
                                    !!this.props.selectedGym.dianping_shop_name
                                }
                                color="primary"
                            />
                        </Titlebar>
                    </div>
                    <div className={classes.optionTextValue}>
                        {this.props.selectedGym.dianping_shop_name
                            ? '店铺: ' +
                              this.props.selectedGym.dianping_shop_name
                            : '未绑定'}
                    </div>
                    <div className={classes.optionTextIntroduction}>
                        {
                            '开启并完成授权后，可以在首页查看您的大众点评店铺的点击，销量，评论等信息。'
                        }
                    </div>
                </Panel>
                {this.swithItem(
                    'disableAppCompleteSchedule',
                    '禁用APP课程完成',
                    '开启后，教练无法在APP完成课程，只能由客户在小程序端以及管理员在Web端完成课程。可以避免教练漏发训练计划。'
                )}
                {this.swithItem(
                    'enableBossFeedback',
                    '老板悄悄话',
                    '开启后，客户可以在小程序中向店长反馈意见'
                )}
                {this.swithItem(
                    'enableCoachTrain',
                    '教练训练记录',
                    '开启后，支持记录教练训练'
                )}
                {this.swithItem(
                    'enableAppPlanTemplate',
                    'APP训练模版',
                    '开启后，教练可以在编写训练计划时使用模版功能。'
                )}
                {this.swithItem(
                    'enableConfirmInPlanPage',
                    '训练计划中确认课程完成',
                    '开启后，客户可以小程序训练计划页面中完成课程。默认完成课程操作在训练总结页面，不使用训练总结可以开启该选项。'
                )}
                {this.swithItem(
                    'enableCancelCompletedSchedule',
                    '允许APP中取消已完成课程',
                    '开启后，教练可以在APP中取消一节已经完成的课程。保持该选项关闭可以防止误操作。'
                )}
                <Panel className={classes.optionContainer}>
                    <Titlebar
                        fontSize={16}
                        color={'#89ECC2'}
                        label={
                            (this.state.bodyMeasureDays
                                ? this.state.bodyMeasureDays
                                : 'N') + '天数据测量提醒'
                        }
                    >
                        <Switch
                            onChange={checked => {
                                const bodyMeasureDays = checked ? 40 : 0
                                this.setState(
                                    { bodyMeasureDays },
                                    this.saveBodyMeasureDays
                                )
                            }}
                            checked={!!this.state.bodyMeasureDays}
                            color="primary"
                        />
                    </Titlebar>
                    <div className={classes.inputRange}>
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
                        <div className={classes.optionTextIntroduction}>
                            {'每隔指定天数自动提醒教练为客户测量记录数据。'}
                        </div>
                    </div>
                </Panel>
                <Panel className={classes.optionContainer}>
                    <Titlebar
                        fontSize={16}
                        color={'#89ECC2'}
                        label={L.availableTime}
                    />
                    <div
                        className={classes.inputRange}
                        style={{ marginTop: 36 }}
                    >
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
                        <div className={classes.optionTextIntroduction}>
                            {'可预约课程的时段。'}
                        </div>
                    </div>
                </Panel>
                <Panel className={classes.optionContainer}>
                    <Titlebar
                        fontSize={16}
                        color={'#89ECC2'}
                        label={
                            '满' +
                            (this.state.bonus ? this.state.bonus : 'N') +
                            '赠1'
                        }
                    >
                        <Switch
                            onChange={checked => {
                                const bonus = checked ? 4 : 0
                                this.setState({ bonus }, this.saveBonus)
                            }}
                            checked={!!this.state.bonus}
                            color="primary"
                        />
                    </Titlebar>
                    <div className={classes.inputRange}>
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
                        <div className={classes.optionTextIntroduction}>
                            {
                                '促销。每个自然月如客户完成指定数量课程自动生成一节赠送课程。'
                            }
                        </div>
                    </div>
                </Panel>
                <Panel className={classes.optionContainer}>
                    <Titlebar
                        fontSize={16}
                        color={'#89ECC2'}
                        label={'小程序训练计划封面'}
                        style={{ marginTop: 8 }}
                    >
                        <QNUploader
                            title={'选择图片'}
                            variant="outline"
                            fontSize={12}
                            noCompress
                            {...this.props.rootSetting.uploadToken}
                            onSuccess={this.saveImageSetting('planCover')}
                            onFail={e => console.log(e)}
                        />
                    </Titlebar>
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                        {this.state.planCover && (
                            <img height={90} src={this.state.planCover} />
                        )}
                    </div>
                    <div className={classes.optionTextIntroduction}>
                        {'图片长宽比5:4（建议>=500*400), 不超过120Kb'}
                    </div>
                </Panel>
                <Panel className={classes.optionContainer}>
                    <Titlebar
                        fontSize={16}
                        color={'#89ECC2'}
                        label={'小程序训练总结封面'}
                        style={{ marginTop: 8 }}
                    >
                        <QNUploader
                            title={'选择图片'}
                            variant="outline"
                            fontSize={12}
                            noCompress
                            {...this.props.rootSetting.uploadToken}
                            onSuccess={this.saveImageSetting('confirmCover')}
                            onFail={e => console.log(e)}
                        />
                    </Titlebar>
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                        {this.state.confirmCover && (
                            <img height={90} src={this.state.confirmCover} />
                        )}
                    </div>
                    <div className={classes.optionTextIntroduction}>
                        {'图片长宽比5:4（建议>=500*400), 不超过120Kb'}
                    </div>
                </Panel>
                {this.swithItem(
                    'enableTV',
                    '启用TV排行榜',
                    '开启后，可以在电视上查看训练排行榜：http://pro.o2-fit.com/tv/' + this.state.selectedGymId
                )}
            </div>
        )
    }

    PasswordResetForm = () => {
        const [showDialog, setShowDialog] = useState(false)

        const params = {
            title: '修改密码',
            onCancel: () => setShowDialog(false),
            onSave: data => {
                const isValid =
                    !!data.currentPwd &&
                    !!data.repeatPwd &&
                    !!data.newPwd &&
                    data.newPwd === data.repeatPwd
                if (!data.isValid) {
                    this.props.actions.showError('输入不合法，请重试。')
                    return
                }

                this.props.actions.changePwd(data.currentPwd, data.newPwd)
            },
            dialogue: true,
            open: showDialog,
            inputFields: [
                {
                    name: 'currentPwd',
                    label: L.currentPwd,
                    type: 'password'
                },
                {
                    name: 'newPwd',
                    label: L.newPwd + '(>=8位)',
                    type: 'password'
                },
                {
                    name: 'repeatPwd',
                    label: L.repeatPwd,
                    type: 'password'
                }
            ]
        }

        return (
            <Panel
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 24
                }}
            >
                <div style={{ display: 'flex', margin: 12 }}>
                    <span
                        style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: '#333',
                            marginRight: 24
                        }}
                    >
                        用户名
                    </span>
                    <span>{username}</span>
                </div>
                <div style={{ display: 'flex' }}>
                    <span
                        style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: '#333',
                            marginRight: 24
                        }}
                    >
                        密码
                    </span>
                    <RoundButton
                        label="修改"
                        color="#29aa99"
                        onClick={() => setShowDialog(true)}
                    />
                </div>
                <CreateNewDialogue {...params} />
            </Panel>
        )
    }

    render() {
        return (
            <LightTabs
                title={'设置'}
                headerColor="primary"
                onSwitch={this.tapTab}
                tabs={[
                    {
                        tabName: L.coach,
                        tabContent: <Coach />
                    },
                    {
                        tabName: L.gym,
                        tabContent: this.getSettingTab()
                    },
                    {
                        tabName: '分店',
                        tabContent: <Organization />,
                        hidden: !hasOrg  // comes from home.blade
                    },
                    {
                        tabName: '账户',
                        tabContent: <this.PasswordResetForm />
                    },
                    {
                        tabName: L.csvDataImport,
                        tabContent: <StyledLinkedCsvDataImport />
                    }
                ]}
            />
        );
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

export default (LinkedGymSettings)
