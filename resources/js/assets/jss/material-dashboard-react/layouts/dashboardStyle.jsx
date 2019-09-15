import {
  drawerWidth,
  transition,
  container
} from "-assets/jss/material-dashboard-react.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  summaryCard: {
    marginBottom: 0
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    paddingBottom: 20
  },
  content: {
    // marginTop: "40px",
    // minHeight: "calc(100vh - 53px)"
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
