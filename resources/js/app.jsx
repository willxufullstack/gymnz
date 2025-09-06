/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import './bootstrap'

import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import LinkedAdmin from './layouts/Admin.jsx'
import './assets/css/material-dashboard-react.css?v=1.6.0'
import './assets/css/chartist.min.css'
import '../sass/app.scss'
import 'react-vis/dist/style.css'
import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { ThemeProvider, StyledEngineProvider, createTheme, adaptV4Theme } from '@mui/material/styles';

import fundebug from 'fundebug-javascript'
fundebug.apikey =
    '42ef3a72fca1c45b57f23f75313be80ac6a6959b9438b9b977a38d339601c915'

const client = axios.create({
    //all axios can be used, shown in axios documentation
    baseURL: '/api',
    responseType: 'json',
    headers: { Authorization: 'Bearer ' + (window.token || '') }
})

const theme = createTheme(adaptV4Theme({
    palette: {
        primary: {
            main: '#29aa99',
            contrastText: '#fff'
        }
    }
}))

const hist = createBrowserHistory()
const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)))

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
        // 将component中的报错发送到Fundebug
        fundebug.notifyError(error, {
            metaData: {
                info: info
            }
        })
    }

    render() {
        if (this.state.hasError) {
            return null
            // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
        }
        return this.props.children
    }
}

const mountNode = document.getElementById('app')
if (mountNode) createRoot(mountNode).render(
    <ErrorBoundary>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </StyledEngineProvider>
    </ErrorBoundary>
)
