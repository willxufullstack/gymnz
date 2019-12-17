import React from 'react';
import DashboardIcon from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import CustomerIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import MoneyIcon from '@material-ui/icons/Money';
import i18N from './lang'

const L = i18N('Routes')

const LazyDashboard = React.lazy(()=> import("-views/Dashboard/Dashboard.jsx"))
const LazyCustomers = React.lazy(()=> import("-views/Customer/Customers"))
const LazyMonthlyReport = React.lazy(()=> import("-views/Report/MonthlyReport"))
const LazyAccountingPage = React.lazy(()=> import("-views/Accounting/AccountingPage"))
const LazyCustomer = React.lazy(()=> import("-views/Customer/Customer"))
const LazyGymSettings = React.lazy(()=> import("-views/GymSetting/GymSettings"))
const LazyHistory = React.lazy(()=> import("-views/History/History"))


const dashboardRoutes = [
    {
        path: "/dashboard",
        name: L.dashboard,
        rtlName: "لوحة القيادة",
        icon: DashboardIcon,
        component: () => <LazyDashboard />,
        layout: "/admin"
    },
    {
        path: "/customers",
        name: L.customer,
        rtlName: "",
        icon: CustomerIcon,
        component: props => <LazyCustomers {...props}/>,
        layout: "/admin"
    },
    {
        path: "/report/monthly",
        name: L.report,
        rtlName: "",
        icon: LibraryBooks,
        component: props => <LazyMonthlyReport {...props}/>,
        layout: "/admin"
    },
    {
        path: "/report/history",
        name: '历史',
        rtlName: "",
        icon: AllInboxIcon,
        component: props => <LazyHistory {...props}/>,
        layout: "/admin"
    },
    {
        path: "/accounting",
        name: L.finance,
        rtlName: "财务",
        icon: MoneyIcon,
        component: ()=><LazyAccountingPage/>,
        layout: "/admin"
    },
    {
        path: "/customer/:id",
        name: "CustomerPage",
        rtlName: "",
        hideMenu: true,
        icon: '',
        // props is to pass the url
        component: props => <LazyCustomer {...props}/>,
        layout: "/admin"
    },
    {
        path: "/setting",
        name: L.manage,
        rtlName: "健身房管理页",
        icon: SettingsIcon,
        component: ()=><LazyGymSettings/>,
        layout: "/admin"
    },
];

export default dashboardRoutes;
