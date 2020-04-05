/* eslint-disable */
import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Sidebar from "-components/Sidebar/Sidebar.jsx";
import routes from "../routes.js";

import { bindActionCreators } from "redux";
import * as Actions from "../actions";
import connect from "react-redux/es/connect/connect";
import dashboardStyle from "-assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx"
import Snackbar from "-components/Snackbar/Snackbar";
import LoadingLayer from "-components/LoadingLayer/LoadingLayer"

const LoadingMessage = () => (
    "I'm loading..."
)

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
        })}
    </Switch>
);

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "blue",
            hasImage: true,
            fixedClasses: "dropdown show",
            mobileOpen: false
        };
    }

    selectDefaultGym = () => {
        if (this.props.gyms && this.props.gyms.length > 0) {
            this.props.actions.switchGym(this.props.gyms[0]);
            this.props.actions.loadCustomer(this.props.gyms[0].id);
        }
    };

    getRoute() {
        return this.props.location.pathname !== "/admin/maps";
    }

    resizeFunction = () => {
        if (window.innerWidth >= 960) {
            this.setState({ mobileOpen: false });
        }
    };

    componentWillMount() {
        this.props.actions.loadGym();
        //load customer list when init
        if (this.props.setting.selectedGym.id) {
            this.props.actions.loadCustomer(this.props.setting.selectedGym.id);
        }
    }

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            const ps = new PerfectScrollbar(this.refs.mainPanel);
        }
        window.addEventListener("resize", this.resizeFunction);
    }

    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({ mobileOpen: false });
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }

    render() {
        if (!this.props.setting.selectedGym.id) {
            this.selectDefaultGym();
        }
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={routes}
                    logoText={this.props.setting.selectedGym.name}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color={this.state.color}
                    {...rest}
                />
                <div className={classes.mainPanel} ref="mainPanel">
                    <div className={classes.content}>
                        {(this.props.gym.loading || this.props.setting.loading) && <LoadingLayer />}
                        <Snackbar
                            place="br"
                            color="danger"
                            // icon={AddAlert}
                            autoHideDuration={4000}
                            disableWindowBlurListener
                            message={this.props.gym.errorMsg || this.props.organization.errorMsg || this.props.setting.errorMsg}
                            open={!!(this.props.gym.errorMsg || this.props.organization.errorMsg ||this.props.setting.errorMsg)}
                            closeNotification={() => this.props.actions.closeErrMsg()}
                            close
                        />
                        <Snackbar
                            place="br"
                            color="success"
                            // icon={AddAlert}
                            autoHideDuration={4000}
                            disableWindowBlurListener
                            message={this.props.gym.successMsg || this.props.organization.successMsg ||this.props.setting.successMsg}
                            open={!!(this.props.gym.successMsg || this.props.organization.successMsg ||this.props.setting.successMsg)}
                            onClose={() => {
                                this.props.actions.closeSuccessMsg()
                            }}
                        />
                        <div className={classes.container}>
                            <Suspense fallback={<LoadingMessage />}>
                            {switchRoutes}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStoreToProps = (store) => {
    return {
        organization: store.organization,
        gyms: store.organization.gym,
        gym: store.gym,
        setting: store.setting
    };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const LinkedAdmin = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Admin);

export default withStyles(dashboardStyle)(LinkedAdmin);
