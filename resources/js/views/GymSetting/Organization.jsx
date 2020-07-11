import React from 'react'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import connect from 'react-redux/es/connect/connect'
import Add from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
// core components
import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue'
import '../../../sass/org.scss'
import classNames from 'classnames'
import { IconButton, withStyles, Tooltip } from '@material-ui/core'
import Confirmation from '-components/CustomDialogues/Confirmation'
import i18N from '../../lang'
import Panel from '../../components/Panel/Panel'
import Titlebar from '../../components/TitleBar/Titlebar'
import RoundButton from '../../components/RoundButton/RoundButton'

const L = i18N('Organization')

const style = {
    itemContainer: {
        '&:hover': {
            boxShadow: '0px 2px 24px rgba(0, 0, 0, 0.1)'
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
        margin: 6
    },
    newOrg: {
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
class Organization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editOrgNameDialogue: false,
            showDeleteConfirmation: false,
            activeOrg: {}
        }
    }

    showAddOrg = () => {
        this.props.actions.showNewOrg()
    }

    showAddGym = org => () => {
        this.setState({ activeOrg: org }, () => {
            this.props.actions.showNewGym()
        })
    }

    showDeleteOrgConfirmation = org => () => {
        this.setState({ showDeleteConfirmation: true, activeOrg: org })
    }

    hideDeleteOrgConfirmation = () => {
        this.setState({ showDeleteConfirmation: false })
    }
    deleteOrg = () => {
        this.setState({ showDeleteConfirmation: false })
        this.props.actions.deleteOrg(this.state.activeOrg.id)
    }

    getEditOrgNameDialogue = () => {
        return (
            <CreateNewDialogue
                onCancel={() => {
                    this.setState({ editOrgNameDialogue: false })
                }}
                onSave={data => {
                    this.props.actions
                        .updateOrg(this.state.editOrgNameDialogue.id, data)
                        .then(() => {
                            this.props.actions
                                .loadOrg()
                                .then(this.props.actions.loadGym)
                            this.setState({ editOrgNameDialogue: false })
                        })
                }}
                inputFields={[
                    {
                        name: 'name',
                        label: L.name,
                        value: this.state.editOrgNameDialogue.name
                    }
                ]}
                dialogue={true}
                title={L.editName}
            />
        )
    }

    componentWillMount = () => {
        this.props.actions.loadOrg().then(this.props.actions.loadGym)
    }

    getDialogue = () => {
        const orgFields = {
            onCancel: this.props.actions.cancelNewOrg,
            onSave: this.props.actions.createOrg,
            title: L.createOrganization,
            dialogue: true,
            inputFields: [
                {
                    name: 'name',
                    label: L.name
                },
                {
                    name: 'description',
                    label: L.description
                }
            ]
        }
        const gymFields = {
            title: L.createGym,
            onCancel: this.props.actions.cancelNewGym,
            onSave: data => {
                data.org_id = this.state.activeOrg.id
                this.props.actions.createGym(data)
            },
            dialogue: true,
            inputFields: [
                {
                    name: 'name',
                    label: L.name
                },
                {
                    name: 'description',
                    label: L.description
                }
            ]
        }
        if (this.props.organization.showNewOrg) {
            return <CreateNewDialogue {...orgFields} />
        }
        if (this.props.organization.showNewGym) {
            return <CreateNewDialogue {...gymFields} />
        }
        if (this.state.editOrgNameDialogue) {
            return this.getEditOrgNameDialogue()
        }
    }

    render() {
        const deleteOrgParams = {
            message:
                this.state.activeOrg &&
                L.deleteConfirm + this.state.activeOrg.name + '?',
            onCancel: this.hideDeleteOrgConfirmation,
            onConfirm: this.deleteOrg
        }
        const { classes } = this.props

        return (
            <React.Fragment>
                {this.state.showDeleteConfirmation && (
                    <Confirmation {...deleteOrgParams} />
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
                    {this.getDialogue()}
                    {/* organization list page */}
                    {this.props.organization.org.map(item => {
                        return (
                            <Panel
                                key={item.id}
                                className={classes.itemContainer}
                            >
                                <div className={classes.header}>
                                    <Titlebar
                                        fontSize={20}
                                        color={'#89ECC2'}
                                        label={item.name}
                                        description={
                                            <IconButton
                                                onClick={() =>
                                                    this.setState({
                                                        editOrgNameDialogue: item
                                                    })
                                                }
                                            >
                                                <Edit fontSize="small" />
                                            </IconButton>
                                        }
                                    />
                                </div>
                                {this.props.organization.gym
                                    .filter(gym => gym.org_id === item.id)
                                    .map(item => {
                                        return (
                                            <div
                                                key={item.id}
                                                className={classes.row}
                                            >
                                                <div
                                                    className={classes.rowLabel}
                                                >
                                                    {item.name}
                                                </div>
                                            </div>
                                        )
                                    })}
                                <div
                                    className={classNames(
                                        classes.bottom,
                                        'bottom'
                                    )}
                                >
                                    <RoundButton
                                        color="#999"
                                        variant="outline"
                                        onClick={this.showDeleteOrgConfirmation(
                                            item
                                        )}
                                        fontSize={12}
                                        label={L.deleteOrg}
                                        style={{ margin: '12px 18px' }}
                                    />

                                    <RoundButton
                                        color="#29aa99"
                                        onClick={this.showAddGym(item)}
                                        fontSize={12}
                                        style={{ margin: '12px 18px' }}
                                        label={'添加分店'}
                                    />
                                </div>
                            </Panel>
                        )
                    })}
                    <Add onClick={this.showAddOrg} className={classes.newOrg} />
                </div>
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

const LinkedOrganization = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Organization)


export default withStyles(style)(LinkedOrganization)
