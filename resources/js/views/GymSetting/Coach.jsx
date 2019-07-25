import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Button from "-components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add"
// core components
import GridItem from "-components/Grid/GridItem.jsx";
import GridContainer from "-components/Grid/GridContainer.jsx";
import Card from "-components/Card/Card.jsx";
import CardHeader from "-components/Card/CardHeader.jsx";
import CardIcon from "-components/Card/CardIcon.jsx";
import CardFooter from "-components/Card/CardFooter.jsx";
import "../../../sass/coach.scss"
import CardBody from "-components/Card/CardBody";
import classNames from "classnames"
import CreateNewDialogue from "-components/CustomDialogues/CreateNewDialogue";
import Confirmation from "-components/CustomDialogues/Confirmation";

class Coach extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteConfirmation: false,
            deletingCoach: null,
        };
    }

    componentWillMount() {
        if (this.props.selectedGym.id) {
            this.props.actions.loadCoach(this.props.selectedGym.id);
        }
    }

    showNewCoach = () => {
        this.props.actions.showNewCoach();
    };

    showDeleteCoachConfirmation = (deletingCoach) => () => {
        this.setState({ showDeleteConfirmation: true, deletingCoach });
    };

    hideDeleteCoachConfirmation = () => {
        this.setState({ showDeleteConfirmation: false });
    };

    deleteCoach = () => {
        this.setState({ showDeleteConfirmation: false });
        this.props.actions.deleteCoach(this.props.selectedGym.id, this.state.deletingCoach.id);
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.selectedGym.id && nextProps.selectedGym.id !== this.props.selectedGym.id) {
            this.props.actions.loadCoach(nextProps.selectedGym.id);
            return true
        }
        return nextProps.gym !== this.props.gym || this.state.showDeleteConfirmation !== nextState.showDeleteCoachConfirmation;
    }

    render() {
        const deleteCoachParams = {
            message: this.state.deletingCoach && 'Do you want to remove ' + this.state.deletingCoach.user.name + '?',
            onCancel: this.hideDeleteCoachConfirmation,
            onConfirm: this.deleteCoach
        };
        const coachFields = [{
            name: 'name',
            placeholder: 'Name'
        }, {
            name: 'sex',
            label: 'Sex',
            options: [{ value: 0, label: 'Female' }, { value: 1, label: 'Male' }],
        }, {
            name: 'phone',
            type: 'phone',
            placeholder: 'phone'
        }, {
            name: 'password',
            type: 'password',
            placeholder: 'Password'
        }];

        return (
            <React.Fragment>
                {this.state.showDeleteConfirmation && <Confirmation {...deleteCoachParams} />}
                <div className={classNames({ 'loading': this.props.gym.loading })}>
                    {!this.props.gym.showNewCoach &&
                        <GridContainer>
                            {
                                this.props.gym.coaches.map((item) => {
                                    return (
                                        <GridItem key={item.id} xs={12} sm={6} md={3} lg={3}>
                                            <Card>
                                                <CardHeader color="rose" icon>
                                                    <CardIcon color="rose" style={{ width: '100%' }}>
                                                        <h4>{item.user.email.split('@')[0]}</h4>
                                                    </CardIcon>
                                                </CardHeader>
                                                <CardBody>
                                                    <h3>{item.user.name}</h3>
                                                </CardBody>
                                                <CardFooter stats style={{ marginTop: 0 }}>
                                                    {/* <div>
                                                        {item.user.sex ? 'Male' : 'Female'}
                                                    </div> */}
                                                    <div>
                                                        <Button size='sm' color='transparentGray' onClick={this.showDeleteCoachConfirmation(item)}>Delete</Button>
                                                    </div>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    )
                                })
                            }
                            {/*here add new coach*/}
                            <Button color='transparentGray' justIcon round className="new-coach-btn" onClick={this.showNewCoach}><Add /></Button>
                        </GridContainer>}
                    {/* create coach dialogue */}
                    {
                        this.props.gym.showNewCoach &&
                        <CreateNewDialogue
                            onCancel={this.props.actions.cancelNewCoach}
                            onSave={(data) => {
                                this.props.actions.createCoach(this.props.selectedGym.id, data);
                            }}
                            inputFields={coachFields}
                            title="Create Coach"
                        />
                    }
                </div>
            </React.Fragment>
        );
    }
}


export default Coach;
