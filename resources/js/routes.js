import React from 'react';
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import CustomerIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';
import MoneyIcon from '@material-ui/icons/Money';
import LinkedDashboard from "-views/Dashboard/Dashboard.jsx";
import Customers from "-views/Customer/Customers";
import Customer from "-views/Customer/Customer"
import GymSettings from "-views/GymSetting/GymSettings";
import LinkedMonthlyReport from '-views/Report/MonthlyReport';
import AccountingPage from '-views/Accounting/AccountingPage';
import i18N from './lang'

const L = i18N('Routes')

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: L.dashboard,
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: () => <LinkedDashboard/>,
        layout: "/admin"
    },
    {
        path: "/customers",
        name: L.customer,
        rtlName: "",
        icon: CustomerIcon,
        component: props => <Customers {...props}/>,
        layout: "/admin"
    },
    {
        path: "/report/monthly",
        name: "Report",
        rtlName: "",
        icon: LibraryBooks,
        component: props => <LinkedMonthlyReport {...props}/>,
        layout: "/admin"
    },
    {
        path: "/accounting",
        name: L.finance,
        rtlName: "财务",
        icon: MoneyIcon,
        component: ()=><AccountingPage/>,
        layout: "/admin"
    },
    {
        path: "/customer/:id",
        name: "CustomerPage",
        rtlName: "",
        hideMenu: true,
        icon: '',
        // props is to pass the url
        component: props => <Customer {...props}/>,
        layout: "/admin"
    },
    {
        path: "/setting",
        name: "Manage",
        rtlName: "健身房管理页",
        icon: SettingsIcon,
        component: ()=><GymSettings/>,
        layout: "/admin"
    },
];

export default dashboardRoutes;
