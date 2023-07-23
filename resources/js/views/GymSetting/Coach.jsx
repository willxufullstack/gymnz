import React from 'react'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import connect from 'react-redux/es/connect/connect'
// @material-ui/icons
import Add from '@material-ui/icons/Add'
// core components
import '../../../sass/coach.scss'
import classNames from 'classnames'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import Confirmation from '-components/CustomDialogues/Confirmation'
import i18N from '../../lang'
import { Switch, withStyles } from '@material-ui/core'
import Panel from '../../components/Panel/Panel'
import RoundButton from '../../components/RoundButton/RoundButton'
import Titlebar from '../../components/TitleBar/Titlebar'
import QNUploader from '-components/QNUploader/QNUploader'

const L = i18N('Coach')
const styles = {
    coachContainer: {
        '&:hover': {
            boxShadow: '0px 2px 24px rgba(0, 0, 0, 0.1)'
        },

        '&:hover .bottom': {
            visibility: 'visible',
            opacity: 1
        }
    },
    avatar: {
        width: "4rem",
        borderRadius: 4,
    },
    header: {
        padding: '8px 12px',
        fontSize: 16,
        fontWeight: '900',
        display: 'flex',
        alignItems: 'center'
    },
    row: {
        padding: '2px 16px',
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: '#666'
    },
    rowLabel: {
        flex: 1,
        fontSize: 14,
        fontWeight: '700'
    },
    bottom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 0.15s linear, visibility 0.15s linear'
    },
    newCoach: {
        margin: 'auto',
        fontSize: 72,
        color: '#aaa',
        cursor: 'pointer',
        transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',

        '&:hover': {
            color: '#29aa99'
        }
    }
}
class Coach extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resetPasswordConfirmation: false,
            showDeleteConfirmation: false,
            resendInviteConfirmation: false,
            deletingCoach: null,
            editDescDialog: false
        }
    }

    componentWillMount() {
        if (this.props.selectedGym.id) {
            this.props.actions.loadCoach(this.props.selectedGym.id)
        }
    }

    showNewCoach = () => {
        this.props.actions.showNewCoach()
    }

    showResetPasswordConfirmation = coach => () => {
        this.setState({ resetPasswordConfirmation: coach })
    }

    showResendInviteConfirmation = coach => () => {
        this.setState({ resendInviteConfirmation: coach })
    }

    hideResendInviteConfirmation = () => {
        this.setState({ resendInviteConfirmation: false })
    }

    hideResetPasswordConfirmation = () => {
        this.setState({ resetPasswordConfirmation: false })
    }

    showDeleteCoachConfirmation = deletingCoach => () => {
        this.setState({ showDeleteConfirmation: true, deletingCoach })
    }

    hideDeleteCoachConfirmation = () => {
        this.setState({ showDeleteConfirmation: false })
    }

    deleteCoach = () => {
        this.props.actions
            .deleteCoach(this.props.selectedGym.id, this.state.deletingCoach.id)
            .then(() => {
                this.setState({ showDeleteConfirmation: false })
            })
    }

    resetCoachPwd = () => {
        this.props.actions
            .resetCoachPwd(
                this.props.selectedGym.id,
                this.state.resetPasswordConfirmation.id
            )
            .then(() => {
                this.setState({ resetPasswordConfirmation: false })
            })
    }

    resendInvite = () => {
        this.props.actions
            .resendInvite(
                this.props.selectedGym.id,
                this.state.resendInviteConfirmation.id
            )
            .then(this.hideResendInviteConfirmation)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            nextProps.selectedGym.id &&
            nextProps.selectedGym.id !== this.props.selectedGym.id
        ) {
            this.props.actions.loadCoach(nextProps.selectedGym.id)
            return true
        }
        return (
            nextProps.gym !== this.props.gym ||
            this.state.showDeleteConfirmation !==
                nextState.showDeleteCoachConfirmation
        )
    }

    onChangeHidden(coach, field, event) {
        const newCoach = {
            [field]: event.target.checked
        }
        this.props.actions
            .updateCoach(this.props.selectedGym.id, coach.id, newCoach)
            .then(() => {
                this.props.actions.loadCoach(this.props.selectedGym.id)
            })
    }

    editDescDialog = () => {
        return (
            <CreateNewDialogue
                col={1}
                onCancel={() => {
                    this.setState({ editDescDialog: false })
                }}
                onSave={data => {
                    this.props.actions
                        .updateCoach(
                            this.props.selectedGym.id,
                            this.state.editDescDialog.id,
                            data
                        )
                        .then(() => {
                            this.setState({ editDescDialog: false })
                            this.props.actions.loadCoach(this.props.selectedGym.id)
                        })
                }}
                inputFields={[
                    {
                        name: 'description',
                        label: '描述',
                        value: this.state.editDescDialog.description
                    },
                ]}
                dialogue={true}
                title={'修改描述'}
            />
        )
    }

    render() {
        const deleteCoachParams = {
            message:
                this.state.deletingCoach &&
                L.removeConfirm + this.state.deletingCoach.user.name + '?',
            onCancel: this.hideDeleteCoachConfirmation,
            onConfirm: this.deleteCoach
        }
        const resetPasswordConfirmation = {
            message: this.state.resetPasswordConfirmation && L.resetConfirm,
            onCancel: this.hideResetPasswordConfirmation,
            onConfirm: this.resetCoachPwd
        }

        const resendInviteConfirmation = {
            message:
                this.state.resendInviteConfirmation && '确定要重发邀请吗？',
            onCancel: this.hideResendInviteConfirmation,
            onConfirm: this.resendInvite
        }

        const coachFields = [
            {
                name: 'name',
                label: L.name
            },
            {
                name: 'sex',
                label: L.sex,
                options: [
                    { value: 0, label: L.female },
                    { value: 1, label: L.male }
                ]
            },
            {
                name: 'phone',
                type: 'phone',
                label: L.phone
            }
            // {
            //     name: 'password',
            //     type: 'password',
            //     label: L.password
            // }
        ]

        const { classes } = this.props
        return (
            <React.Fragment>
                {this.state.showDeleteConfirmation && (
                    <Confirmation {...deleteCoachParams} />
                )}
                {this.state.resetPasswordConfirmation && (
                    <Confirmation {...resetPasswordConfirmation} />
                )}
                {this.state.resendInviteConfirmation && (
                    <Confirmation {...resendInviteConfirmation} />
                )}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridGap: 24,
                        paddingTop: 20,
                        paddingBottom: 20
                    }}
                >
                    {this.props.gym.coaches.map(item => {
                        return (
                            <Panel
                                key={item.id}
                                className={classes.coachContainer}
                            >
                                <div
                                    className={classNames(
                                        classes.header,
                                        item.hidden && 'disabled'
                                    )}
                                >
                                    <Titlebar
                                        fontSize={20}
                                        color={
                                            item.user.sex
                                                ? '#C6D3FF'
                                                : '#FFDFDF'
                                        }
                                        label={
                                            item.user.name +
                                            (item.invite_at ? '（未激活)' : '')
                                        }
                                    />
                                </div>
                                <div className={classes.row} style={{marginTop: "0.5rem", marginBottom:"0.5rem"}}>
                                    <img src={item.user.avatar} className={classes.avatar}/>
                                    <div style={{flex: 1}}></div>
                                    <QNUploader
                                        title={'上传头像'}
                                        variant="outline"
                                        fontSize={12}
                                        {...this.props.rootSetting.uploadToken}
                                        onSuccess={(url)=>{
                                            this.props.actions
                                            .updateCoach(this.props.selectedGym.id, item.id, {
                                                avatar: url
                                            })
                                            .then(() => {
                                                this.props.actions.loadCoach(this.props.selectedGym.id)
                                            })
                                        }}
                                        onFail={e => console.log(e)}
                                    />
                                </div>
                                <div className={classes.row} style={{marginTop: "0.5rem", marginBottom:"0.5rem"}}>
                                    <span className={classes.rowLabel}>
                                       {item.user.description ?? "暂无介绍"}
                                    </span>
                                    <RoundButton
                                        color="#999"
                                        variant="outline"
                                        onClick={() => {
                                            this.setState({ editDescDialog: item })
                                        }}
                                        fontSize={12}
                                        label={'修改介绍'}
                                        />
                                </div>
                                <div className={classes.row}>
                                    <span className={classes.rowLabel}>
                                        电话
                                    </span>
                                    <span>{item.user.email}</span>
                                </div>
                                <div className={classes.row}>
                                    <span className={classes.rowLabel}>
                                        在日程中隐藏
                                    </span>
                                    <Switch
                                        checked={!!item.hidden}
                                        onChange={e =>
                                            this.onChangeHidden(
                                                item,
                                                'hidden',
                                                e
                                            )
                                        }
                                        color="primary"
                                        inputProps={{
                                            'aria-label': 'secondary checkbox'
                                        }}
                                    />
                                </div>
                                { hasOrg == 1 && (
                                    <div className={classes.row}>
                                        <span className={classes.rowLabel}>
                                            店长
                                        </span>
                                        <Switch
                                            checked={!!item.is_gym_manager}
                                            onChange={e =>
                                                this.onChangeHidden(
                                                    item,
                                                    'is_gym_manager',
                                                    e
                                                )
                                            }
                                            color="primary"
                                            inputProps={{
                                                'aria-label':
                                                    'secondary checkbox'
                                            }}
                                        />
                                    </div>
                                )}
                                <div
                                    className={classNames(
                                        classes.bottom,
                                        'bottom'
                                    )}
                                >
                                    <RoundButton
                                        color="#999"
                                        variant="outline"
                                        onClick={this.showDeleteCoachConfirmation(
                                            item
                                        )}
                                        fontSize={12}
                                        label={L.delete}
                                        style={{ margin: '12px 18px' }}
                                    />

                                    {!item.invite_at && (
                                        <RoundButton
                                            color="#29aa99"
                                            onClick={this.showResetPasswordConfirmation(
                                                item
                                            )}
                                            fontSize={12}
                                            style={{ margin: '12px 18px' }}
                                            label={L.resetPwd}
                                        />
                                    )}

                                    {item.invite_at && (
                                        <RoundButton
                                            color="#29aa99"
                                            onClick={this.showResendInviteConfirmation(
                                                item
                                            )}
                                            fontSize={12}
                                            style={{ margin: '12px 18px' }}
                                            label={'重发邀请'}
                                        />
                                    )}
                                </div>
                            </Panel>
                        )
                    })}
                    {/*here add new coach*/}

                    <Add
                        onClick={this.showNewCoach}
                        className={classes.newCoach}
                    />
                </div>

                {/* create coach dialogue */}
                {this.props.gym.showNewCoach && (
                    <CreateNewDialogue
                        onCancel={this.props.actions.cancelNewCoach}
                        onSave={data => {
                            this.props.actions.createCoach(
                                this.props.selectedGym.id,
                                data
                            )
                        }}
                        dialogue={true}
                        inputFields={coachFields}
                        title={L.createCoach}
                    />
                )}
                {this.state.editDescDialog && <this.editDescDialog />}
            </React.Fragment>
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

const LinkedCoach = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Coach)

export default withStyles(styles)(LinkedCoach)
