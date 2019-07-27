import React from "react";
import Button from "-components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add"
import CircleAddOutline from "@material-ui/icons/AddCircleOutline";
import List from '@material-ui/core/List';
import Edit from '@material-ui/icons/Edit';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// core components
import GridItem from "-components/Grid/GridItem.jsx";
import GridContainer from "-components/Grid/GridContainer.jsx";
import Card from "-components/Card/Card.jsx";
import CardHeader from "-components/Card/CardHeader.jsx";
import CardIcon from "-components/Card/CardIcon.jsx";
import CardFooter from "-components/Card/CardFooter.jsx";
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue';
import "../../../sass/org.scss"
import CardBody from "-components/Card/CardBody";
import LoadingLayer from "-components/LoadingLayer/LoadingLayer"
import classNames from "classnames"
import Snackbar from "-components/Snackbar/Snackbar";
import AddAlert from "@material-ui/icons/AddAlert";
import { IconButton } from '@material-ui/core';
import Confirmation from "-components/CustomDialogues/Confirmation";

class Organization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editOrgNameDialogue: false,
            showDeleteConfirmation: false,
            activeOrg: {}
        };
    }

    showAddOrg = () => {
        this.props.actions.showNewOrg();
    };

    showAddGym = (org) => () => {
        this.setState({ activeOrg: org }, () => {
            this.props.actions.showNewGym();
        });
    };

    showDeleteOrgConfirmation = (org) => () => {
        this.setState({ showDeleteConfirmation: true, activeOrg: org });
    };

    hideDeleteOrgConfirmation = () => {
        this.setState({ showDeleteConfirmation: false });
    };
    deleteOrg = () => {
        this.setState({ showDeleteConfirmation: false });
        this.props.actions.deleteOrg(this.state.activeOrg.id);

    };

    getEditOrgNameDialogue = () => {
        return <CreateNewDialogue
            onCancel={() => { this.setState({ editOrgNameDialogue: false }) }}
            onSave={(data) => {
                this.props.actions.updateOrg(this.state.editOrgNameDialogue.id, data)
                    .then(() => {
                        this.props.actions.loadOrg().then(this.props.actions.loadGym);
                        this.setState({ editOrgNameDialogue: false });
                    })
            }}
            inputFields={[
                {
                    name: 'name',
                    label: 'Name',
                    value: this.state.editOrgNameDialogue.name
                }
            ]}
            dialogue={true}
            title="Edit Name"
        />
    };

    componentWillMount = () => {
        this.props.actions.loadOrg().then(this.props.actions.loadGym);
    };

    getDialogue = () => {
        const orgFields = {
            onCancel: this.props.actions.cancelNewOrg,
            onSave: this.props.actions.createOrg,
            title: 'Create Organization',
            dialogue: true,
            inputFields: [{
                name: 'name',
            }, {
                name: 'description',
            }]
        };
        const gymFields = {
            title: 'Create Gym',
            onCancel: this.props.actions.cancelNewGym,
            onSave: data => {
                data.org_id = this.state.activeOrg.id;
                this.props.actions.createGym(data);
            },
            dialogue: true,
            inputFields: [{
                name: 'name',
            }, {
                name: 'description',
            }]
        };
        if (this.props.organization.showNewOrg) {
            return <CreateNewDialogue {...orgFields} />
        }
        if (this.props.organization.showNewGym) {
            return <CreateNewDialogue {...gymFields} />
        }
        if (this.state.editOrgNameDialogue) {
            return this.getEditOrgNameDialogue();
        }
    };

    render() {
        const deleteOrgParams = {
            message: this.state.activeOrg && 'Do you want to remove ' + this.state.activeOrg.name + '?',
            onCancel: this.hideDeleteOrgConfirmation,
            onConfirm: this.deleteOrg
        };
        const { classes } = this.props;

        return (
            <React.Fragment>
                {this.state.showDeleteConfirmation && <Confirmation {...deleteOrgParams} />}
                {this.props.organization.loading && <LoadingLayer />}
                <div className={classNames({ 'loading': this.props.organization.loading })}>
                    {this.getDialogue()}
                    {/* organization list page */}
                    <GridContainer>
                        {
                            this.props.organization.org.map((item) => {
                                return (
                                    <GridItem key={item.id} xs={12} sm={6} md={4} lg={4}>
                                        <Card>
                                            <CardHeader color="info" icon>
                                                <CardIcon color="info" style={{ width: '100%' }}>
                                                    <h4>{item.name} <IconButton onClick={() => this.setState({ editOrgNameDialogue: item })} ><Edit fontSize="small" /></IconButton></h4>
                                                </CardIcon>
                                            </CardHeader>
                                            <CardBody>
                                                {this.props.organization.gym.filter(gym => gym.org_id === item.id).length ?
                                                    <List component="nav">
                                                        {this.props.organization.gym
                                                            .filter(gym => gym.org_id === item.id)
                                                            .map(item => {
                                                                return <ListItem key={item.id} button>
                                                                    <ListItemText primary={item.name} />
                                                                </ListItem>;
                                                            })}
                                                    </List>
                                                    :
                                                    <h4>No gym found</h4>
                                                }
                                                <Button size="sm" color='transparentPrimary' onClick={this.showAddGym(item)}>
                                                    <CircleAddOutline /> Create New Gym
                                                </Button>
                                            </CardBody>
                                            <CardFooter stats style={{ marginTop: 0 }}>
                                                <Button fullWidth size="sm" color='transparentGray' onClick={this.showDeleteOrgConfirmation(item)}>
                                                    Delete Organization
                                                    </Button>
                                            </CardFooter>
                                        </Card>
                                    </GridItem>
                                )
                            })
                        }
                        {/*here add new organization*/}
                        <Button justIcon round color='transparentGray' className="new-org-btn" onClick={this.showAddOrg}><Add /></Button>
                    </GridContainer>
                </div>
                <Snackbar
                    place="tc"
                    color="danger"
                    icon={AddAlert}
                    message={this.props.organization.errorMsg}
                    open={!!this.props.organization.errorMsg}
                    closeNotification={() => this.props.actions.closeErrMsg()}
                    close
                />
            </React.Fragment>
        );
    }
}

export default Organization;
