import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'
import logo from '-assets/img/logo_pro.png'
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'

const Sidebar = ({ ...props }) => {
    const { routes } = props
    return (
        <div className="nav-container">
            <div className="flex-wrapper">
                <div className="logo-container">
                    <img src={logo} />
                </div>
                <div className="nav-route-container">
                    {routes
                        .filter(r => !r.hideMenu)
                        .map((prop, key) => {
                            return (
                                <NavLink
                                    to={prop.layout + prop.path}
                                    className="left-nav-row"
                                    activeClassName="left-nav-row active"
                                    key={key}
                                >
                                    <p className="left-nav-row-text">
                                        {prop.name}
                                    </p>
                                    <div className="hr" />
                                </NavLink>
                            )
                        })}
                </div>
                <div className="nav-bottom-container">
                    <p className="left-nav-row-text" onClick={LogoutFunc}><LogoutIcon fontSize="small"/>注销</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
