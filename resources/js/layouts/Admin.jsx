/* eslint-disable */
import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// creates a beautiful scrollbar
import 'perfect-scrollbar/css/perfect-scrollbar.css'
// core components
import Sidebar from '-components/Sidebar/Sidebar.jsx'
import routes from '../routes.jsx'

import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import connect from 'react-redux/es/connect/connect'
import './Admin.scss'
import HashLoader from 'react-spinners/HashLoader'
import { Snackbar } from '@mui/material'

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === '/admin') {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                )
            }
        })}
    </Switch>
)

class Admin extends React.Component {
    selectDefaultGym = () => {
        if (this.props.gyms && this.props.gyms.length > 0) {
            this.props.actions.switchGym(this.props.gyms[0])
            this.props.actions.loadCustomer(this.props.gyms[0].id, {
                hotmap: 1
            })
        }
    }

    componentDidMount() {
        this.props.actions.loadGym()
        // load customer list when init if selected gym already set
        if (this.props.setting.selectedGym.id) {
            this.props.actions.loadCustomer(this.props.setting.selectedGym.id, {
                hotmap: 1
            })
        } else if (this.props.gyms && this.props.gyms.length > 0) {
            this.selectDefaultGym()
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.history.location.pathname !== this.props.location.pathname) {
            this.refs.mainPanel.scrollTop = 0
        }
        // select default gym when gyms are loaded but no selected gym yet
        if (!this.props.setting.selectedGym.id && this.props.gyms && this.props.gyms.length > 0 && prevProps.gyms !== this.props.gyms) {
            this.selectDefaultGym()
        }
    }

    render() {
        
        return (
            <div className="wrapper">
                <Sidebar routes={routes} />
                <div className="main-panel" ref="mainPanel">
                    <Snackbar
                        place="br"
                        color="danger"
                        autoHideDuration={3000}
                        disableWindowBlurListener
                        message={
                            this.props.gym.errorMsg ||
                            this.props.organization.errorMsg ||
                            this.props.setting.errorMsg
                        }
                        open={
                            !!(
                                this.props.gym.errorMsg ||
                                this.props.organization.errorMsg ||
                                this.props.setting.errorMsg
                            )
                        }
                        onClose={() =>
                            this.props.actions.closeErrMsg()
                        }
                    />
                    <Snackbar
                        place="br"
                        color="success"
                        // icon={AddAlert}
                        autoHideDuration={3000}
                        disableWindowBlurListener
                        message={
                            this.props.gym.successMsg ||
                            this.props.organization.successMsg ||
                            this.props.setting.successMsg
                        }
                        open={
                            !!(
                                this.props.gym.successMsg ||
                                this.props.organization.successMsg ||
                                this.props.setting.successMsg
                            )
                        }
                        onClose={() => {
                            this.props.actions.closeSuccessMsg()
                        }}
                    />
                    <div className="app-container">
                        <Suspense
                            fallback={
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <HashLoader loading color={'#89ECC2'} />
                                </div>
                            }
                        >
                            {switchRoutes}
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = store => {
    return {
        organization: store.organization,
        gyms: store.organization.gym,
        gym: store.gym,
        setting: store.setting
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const LinkedAdmin = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Admin)

export default LinkedAdmin
