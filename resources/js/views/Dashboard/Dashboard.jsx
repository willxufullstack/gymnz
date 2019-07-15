import React from "react";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "-components/Grid/GridItem.jsx";
import GridContainer from "-components/Grid/GridContainer.jsx";
import Table from "-components/Table/Table.jsx";
import Tasks from "-components/Tasks/Tasks.jsx";
import CustomTabs from "-components/CustomTabs/CustomTabs.jsx";
import Danger from "-components/Typography/Danger.jsx";
import Card from "-components/Card/Card.jsx";
import CardHeader from "-components/Card/CardHeader.jsx";
import CardIcon from "-components/Card/CardIcon.jsx";
import CardBody from "-components/Card/CardBody.jsx";
import CardFooter from "-components/Card/CardFooter.jsx";
import Badge from "@material-ui/core/Badge";


import { bugs, website, server } from "-variables/general.jsx";
import Button from "-components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add"
import * as utils from '-utils';
import * as config from '-config';
import dayjs from 'dayjs'
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import CreateNewDialogue from '-components/CustomDialogues/CreateNewDialogue';
import classnames from 'classnames';

import "../../../sass/gymdayview.scss"
import 'dayjs/locale/zh-cn';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "-variables/charts.jsx";

import dashboardStyle from "-assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { List, ListItem } from "@material-ui/core";
import DayjsUtils from "@date-io/dayjs";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date()
    }
  }

  handleDateChange = (selectedDate) => {
    this.setState({ selectedDate }, () => {
      this.props.actions.LoadGymSchedule(this.props.selectedGym.id, {
        date: dayjs(selectedDate).format('YYYY-MM-DD')
      })
    });
  }

  componentWillMount() {
    this.props.actions.loadCoach(this.props.selectedGym.id)
    this.props.actions.LoadGymSchedule(this.props.selectedGym.id, {
      date: dayjs(this.state.selectedDate).format('YYYY-MM-DD')
    });
  }

  componentWillUnmount() {
    // close dialogue when leaving
    this.props.actions.cancelNewOrder();
  }

  tapNewOrder = () => {
    this.props.actions.showNewOrder();
  };

  newOrderDialog = () => {
    const fields = {
      onCancel: () => {
        this.props.actions.cancelNewOrder();
      },
      onSave: (data) => {
        this.props.actions.createOrder(data).
          then(() => {
            // reload customer when success
            this.props.actions.loadCustomer(this.props.selectedGym.id);
          });
      },
      subtitle: this.props.selectedGym.name,
      title: 'Create Order',
      inputFields: [{
        name: 'name',
        label: 'Customer Name',
        validation: v => v.length > 0
      }, {
        name: 'sex',
        label: 'Sex',
        options: [{ value: 0, label: 'Female' }, { value: 1, label: 'Male' }],
      }, {
        name: 'phone',
        type: 'phone',
        placeholder: 'Phone'
      }, {
        name: 'price',
        type: 'number',
        placeholder: 'Price',
      }, {
        name: 'amount',
        value: '',
        type: 'number',
        placeholder: 'amount'
      }, {
        name: 'duration',
        label: 'Duration (month)',
        type: 'number',
        placeholder: 'Duration (month)'
      }, {
        name: 'gym',
        value: this.props.selectedGym.id,
        hide: true
      }, {
        name: 'coach',
        label: 'Coach',
        options: this.props.gym.coaches.map((coach) => { return { value: coach.id, label: coach.user.name } }),
      }]
    };
    return <CreateNewDialogue {...fields} />
  };
  getTimeAxisColumn = () => {
    return (<GridItem xs={1} sm={1} md={1} classes={{ grid: 'time-column' }}>
      <List>
        {utils.getTimeRange(config.startTime, config.endTime - 1).map(t => <ListItem className='time-slot' key={t}>{t[4] === '5' ? ' ' : t}</ListItem>)}
      </List>
    </GridItem>);
  }
  getCoachDayColumn = (c) => {
    let schedules = this.props.gym.schedules.filter(s => s.coach.id === c.id);
    let sealed = {};
    let desc = {};
    schedules.forEach(s => {
      let suffix = '';
      if (s.status === 2) {
        suffix = ' done';
      }
      utils.range(s.start, s.end).forEach(i => {
        sealed[i] = '-x' + suffix;
      })
      sealed[s.start] = '-start' + suffix;
      desc[s.start] = s.customer.name;
      // sealed[s.start + 1] = '-start';
      sealed[s.end] = '-end' + suffix;
      // sealed[s.end - 1] = '-end';
    });
    return (
      <GridItem item xs key={c.id}>
        <List>
          {utils.range(config.startTime, config.endTime).map(t => {
            let borderCls = 'none';
            let timeStr = utils.getTimeStr(t);
            if (timeStr.split(':')[1] === '00') {
              borderCls = 'solid';
            }
            if (timeStr.split(':')[1] === '30') {
              borderCls = 'dot';
            }
            let scheduleSlotCls = sealed[t] ? 'schedule-slot' + sealed[t] : 'schedule-slot';
            return <ListItem key={t} className={classnames('time-slot', borderCls, scheduleSlotCls)}>{desc[t]}</ListItem>
          })}
        </List>
      </GridItem>);
  };

  getGymDayOverView = () => {
    return (<Paper elevation={12} className="gym-day-view-container">
      <Paper square elevation={0} className="gym-day-view-header">
        <GridContainer alignItems='center'>
          <GridItem xs={12} sm={12} md={1} container alignItems={'center'}>
            <MuiPickersUtilsProvider utils={DayjsUtils} locale={'zh-cn'}>
              <DatePicker className='gymd-day-picker' format="MM/DD" value={this.state.selectedDate} onChange={this.handleDateChange} />
            </MuiPickersUtilsProvider>
          </GridItem>
          <GridItem container spacing={0} xs={11} sm={11} md={11} classes={{ grid: 'coach-column' }}>
            {this.props.gym.coaches.map(c => {
              return <GridItem item xs key={c.id}>
                <Badge className="coach-name"
                  color="secondary"
                  badgeContent={this.props.gym.schedules.filter(s => s.coach.id === c.id).length}>
                  {c.user.name}
                </Badge>
              </GridItem>
            })}
          </GridItem>
        </GridContainer>
      </Paper>

      <Paper square elevation={0} className='gym-day-view-body-container'>
        <GridContainer>
          {this.getTimeAxisColumn()}
          <GridItem container spacing={0} xs={11} sm={11} md={11} classes={{ grid: 'coach-column' }}>
            {this.props.gym.coaches.map(c => this.getCoachDayColumn(c))}
          </GridItem>
        </GridContainer>
      </Paper>
    </Paper>);
  };

  render() {
    const { classes } = this.props;
    return this.props.gym.showNewOrder ? this.newOrderDialog() : (<div>
      {this.getGymDayOverView()}
      <Button justIcon round color="primary" className="add-order" onClick={this.tapNewOrder}><Add /></Button>
    </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStoreToProps = (store) => {
  return {
    selectedGym: store.setting.selectedGym,
    gym: store.gym,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

const LinkedDashboard = connect(
  mapStoreToProps,
  mapDispatchToProps
)(Dashboard);

export default withStyles(dashboardStyle)(LinkedDashboard);
