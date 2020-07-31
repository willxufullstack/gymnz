import React from 'react'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import connect from 'react-redux/es/connect/connect'
// @material-ui/icons
import Button from '-components/CustomButtons/Button.jsx'
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
            deletingCoach: null
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
            },
            {
                name: 'password',
                type: 'password',
                label: L.password
            }
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
                                        label={item.user.name}
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
                                            this.onChangeHidden(item, 'hidden', e)
                                        }
                                        color="primary"
                                        inputProps={{
                                            'aria-label': 'secondary checkbox'
                                        }}
                                    />
                                </div>
                                <div className={classes.row}>
                                    <span className={classes.rowLabel}>
                                        店铺管理员
                                    </span>
                                    <Switch
                                        checked={!!item.is_gym_manager}
                                        onChange={e =>
                                            this.onChangeHidden(item, 'is_gym_manager', e)
                                        }
                                        color="primary"
                                        inputProps={{
                                            'aria-label': 'secondary checkbox'
                                        }}
                                    />
                                </div>
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

                                    <RoundButton
                                        color="#29aa99"
                                        onClick={this.showResetPasswordConfirmation(
                                            item
                                        )}
                                        fontSize={12}
                                        style={{ margin: '12px 18px' }}
                                        label={L.resetPwd}
                                    />
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
