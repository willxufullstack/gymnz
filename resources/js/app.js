/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('./bootstrap')

import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import LinkedAdmin from './layouts/Admin.jsx'
import './assets/css/material-dashboard-react.css?v=1.6.0'
import './assets/css/chartist.min.css'
import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const client = axios.create({
    //all axios can be used, shown in axios documentation
    baseURL: '/api',
    responseType: 'json',
    headers: { Authorization: 'Bearer ' + token }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#29aa99',
            contrastText: '#29aa99'
        }
    }
})

const hist = createBrowserHistory()
const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)))

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router history={hist}>
                <Switch>
                    <Route
                        path="/admin"
                        component={props => <LinkedAdmin {...props} />}
                    />
                    {/* <Route path="/rtl" component={RTL}/> */}
                    <Redirect from="/" to="/admin/overview" />
                </Switch>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
)
