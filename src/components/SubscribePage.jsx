import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FreeTrialForm from "./FreeTrialForm";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const SubscribePage = (props) => {
  const { history } = props;

  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles((theme) => ({
    mainHeader: {
      height: isXSWidth ? 120 : 60,
      backgroundColor: theme.palette.secondary.main,
    },
    schoolPortalStyles: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.palette.common.black,
    },
    linkStyles: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.palette.common.black,
    },
    bodyStyles: {
      height: "auto",
      paddingTop: 16,
      paddingBottom: 16,
    },
    startFreeTextStyles: {
      fontSize: 16,
      fontWeight: 600,
    },
    helpStyles: {
      backgroundColor: theme.palette.secondary.main,
      paddingBottom: 8,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction={isXSWidth ? "column" : "row"}
        alignItems="center"
        justify="center"
        className={classes.mainHeader}
      >
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="center"
          sm={6}
        >
          <Typography className={classes.schoolPortalStyles}>
            MyDS School Portal
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="center"
          sm={2}
        >
          <Link to="/more-info" className={classes.linkStyles}>
            School
          </Link>
        </Grid>
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="center"
          sm={2}
        >
          <Link to="/more-info" className={classes.linkStyles}>
            University
          </Link>
        </Grid>
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="center"
          sm={2}
        >
          <Link to="/more-info" className={classes.linkStyles}>
            Academy
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify="flex-start"
        className={classes.helpStyles}
      >
        <Grid item xs={10} sm={11}></Grid>
        <Grid item xs={2} sm={1}>
          <Link to="/help" className={classes.linkStyles}>
            Help
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.bodyStyles}
      >
        <Grid item xs={false} sm={2}></Grid>
        <Grid
          item
          container
          direction="column"
          sm={8}
          alignItems="center"
          justify="flex-start"
        >
          <Typography className={classes.startFreeTextStyles}>
            Start your one month free trial
          </Typography>
          <div>After this $50/month and you can cancel at anytime.</div>
          <div>Cancel before next month to avoid being charged.</div>
          <br />
          <FreeTrialForm history={history} />
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default SubscribePage;
