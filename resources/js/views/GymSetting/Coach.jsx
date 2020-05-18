import React from 'react'
// @material-ui/icons
import Button from '-components/CustomButtons/Button.jsx'
import Add from '@material-ui/icons/Add'
// core components
import GridItem from '-components/Grid/GridItem.jsx'
import GridContainer from '-components/Grid/GridContainer.jsx'
import Card from '-components/Card/Card.jsx'
import CardHeader from '-components/Card/CardHeader.jsx'
import CardIcon from '-components/Card/CardIcon.jsx'
import CardFooter from '-components/Card/CardFooter.jsx'
import '../../../sass/coach.scss'
import CardBody from '-components/Card/CardBody'
import classNames from 'classnames'
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import Confirmation from '-components/CustomDialogues/Confirmation'
import i18N from '../../lang'
import {Switch} from '@material-ui/core'

const L = i18N('Coach')
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

    onChangeHidden(coach, event) {
        const newCoach = {
            hidden: event.target.checked
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

        return (
            <React.Fragment>
                {this.state.showDeleteConfirmation && (
                    <Confirmation {...deleteCoachParams} />
                )}
                {this.state.resetPasswordConfirmation && (
                    <Confirmation {...resetPasswordConfirmation} />
                )}
                <div
                    className={classNames({ loading: this.props.gym.loading })}
                >
                    {
                        <GridContainer>
                            {this.props.gym.coaches.map(item => {
                                return (
                                    <GridItem
                                        key={item.id}
                                        xs={12}
                                        sm={4}
                                        md={3}
                                        lg={3}
                                    >
                                        <Card>
                                            <CardBody>
                                                <h3>{item.user.name}</h3>
                                                <h4>{item.user.email}</h4>
                                                <p>隐藏<span style={{float:'right', position: 'relative', top: -8}}><Switch
                                                    checked={!!item.hidden}
                                                    onChange={(e) => this.onChangeHidden(item, e)}
                                                    name="checkedA"
                                                    color="primary"
                                                    inputProps={{
                                                        'aria-label':
                                                            'secondary checkbox'
                                                    }}
                                                /></span></p>
                                            </CardBody>
                                            <CardFooter
                                                stats
                                                style={{ marginTop: 0 }}
                                            >
                                                <Button
                                                    size="sm"
                                                    color="transparentGray"
                                                    onClick={this.showDeleteCoachConfirmation(
                                                        item
                                                    )}
                                                >
                                                    {L.delete}
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    color="transparentPrimary"
                                                    onClick={this.showResetPasswordConfirmation(
                                                        item
                                                    )}
                                                >
                                                    {L.resetPwd}
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </GridItem>
                                )
                            })}
                            {/*here add new coach*/}
                            <Button
                                color="transparentGray"
                                justIcon
                                round
                                className="new-coach-btn"
                                onClick={this.showNewCoach}
                            >
                                <Add />
                            </Button>
                        </GridContainer>
                    }
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
                </div>
            </React.Fragment>
        )
    }
}

export default Coach
