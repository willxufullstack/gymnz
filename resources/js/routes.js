import React from 'react';

const LazyDashboard = React.lazy(()=> import("-views/Dashboard/Dashboard.jsx"))
const LazyCustomers = React.lazy(()=> import("-views/Customer/Customers"))
const LazyMonthlyReport = React.lazy(()=> import("-views/Report/MonthlyReport"))
const LazyAccountingPage = React.lazy(()=> import("-views/Accounting/AccountingPage"))
const LazyCustomer = React.lazy(()=> import("-views/Customer/Customer"))
const LazyGymSettings = React.lazy(()=> import("-views/GymSetting/GymSettings"))
const LazyHistory = React.lazy(()=> import("-views/History/History"))
const LazyOverview = React.lazy(()=> import("-views/Overview/Overview"))

import i18N from './lang'

const L = i18N('Routes')


const dashboardRoutes = [
    {
        path: "/overview",
        name: '纵览',
        component: (props) => <LazyOverview {...props}/>,
        layout: "/admin"
    },
    {
        path: "/dashboard",
        name: '日程',
        component: () => <LazyDashboard />,
        layout: "/admin"
    },
    {
        path: "/customers",
        name: L.customer,
        component: props => <LazyCustomers {...props}/>,
        layout: "/admin"
    },
    {
        path: "/report/monthly",
        name: '月报',
        component: props => <LazyMonthlyReport {...props}/>,
        layout: "/admin"
    },
    {
        path: "/report/history",
        name: '年报',
        component: props => <LazyHistory {...props}/>,
        layout: "/admin"
    },
    {
        path: "/accounting",
        name: L.finance,
        component: ()=><LazyAccountingPage/>,
        layout: "/admin"
    },
    {
        path: "/customer/:id",
        name: "CustomerPage",
        hideMenu: true,
        // props is to pass the url
        component: props => <LazyCustomer {...props}/>,
        layout: "/admin"
    },
    {
        path: "/setting",
        name: L.manage,
        component: ()=><LazyGymSettings/>,
        layout: "/admin"
    },
];

export default dashboardRoutes;
