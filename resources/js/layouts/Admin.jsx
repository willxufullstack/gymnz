/* eslint-disable */
import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// creates a beautiful scrollbar
import 'perfect-scrollbar/css/perfect-scrollbar.css'
// core components
import Sidebar from '-components/Sidebar/Sidebar.jsx'
import routes from '../routes.js'

import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import connect from 'react-redux/es/connect/connect'
import Snackbar from '-components/Snackbar/Snackbar'
import './Admin.scss'
import HashLoader from 'react-spinners/HashLoader'

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

    componentWillMount() {
        this.props.actions.loadGym()
        //load customer list when init
        if (this.props.setting.selectedGym.id) {
            this.props.actions.loadCustomer(this.props.setting.selectedGym.id, {
                hotmap: 1
            })
        }
    }

    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0
        }
    }

    render() {
        if (!this.props.setting.selectedGym.id) {
            this.selectDefaultGym()
        }
        return (
            <div className="wrapper">
                <Sidebar routes={routes} />
                <div className="main-panel" ref="mainPanel">
                    <Snackbar
                        place="br"
                        color="danger"
                        autoHideDuration={2000}
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
                        closeNotification={() =>
                            this.props.actions.closeErrMsg()
                        }
                        close
                    />
                    <Snackbar
                        place="br"
                        color="success"
                        // icon={AddAlert}
                        autoHideDuration={2000}
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
                    <div className="container">
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
