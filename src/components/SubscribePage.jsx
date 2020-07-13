import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FreeTrialForm from "./FreeTrialForm";
import { Link } from "react-router-dom";

const SubscribePage = (props) => {
  const { history } = props;

  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles({
    mainHeader: {
      height: isXSWidth ? 120 : 60,
      backgroundColor: "rgb(240, 240,240)",
    },
    schoolPortalStyles: {
      fontSize: 24,
      fontWeight: "bold",
      color: "black",
    },
    infoItemStyles: {
      fontSize: 14,
      fontWeight: "bold",
      color: "black",
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
    footerStyles: {
      backgroundColor: "rgb(192,192,192)",
      height: isXSWidth ? 320 : 150,
    },
    footerTextStyles: {
      color: "black",
      fontSize: 12,
    },
  });

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
          <Link to="/more-info" className={classes.infoItemStyles}>
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
          <Link to="/more-info" className={classes.infoItemStyles}>
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
          <Link to="/more-info" className={classes.infoItemStyles}>
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
        style={{
          backgroundColor: "rgb(240,240,240)",
          paddingBottom: 8,
        }}
      >
        <Grid item xs={10} sm={11}></Grid>
        <Grid item xs={2} sm={1}>
          <Link to="/help" className={classes.infoItemStyles}>
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
          xs={12}
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
      <Grid
        item
        container
        direction={isXSWidth ? "column" : "row"}
        alignItems="center"
        justify="space-evenly"
        className={classes.footerStyles}
      >
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify={isXSWidth ? "center" : "flex-start"}
          sm={4}
        >
          <div>
            <span style={{ fontSize: 16, color: "black" }}>MyDS</span>
            <address className={classes.footerTextStyles}>
              <br />
              United Kingdom,
              <br />
              Edinburgh,
              <br />
              123 Fountain Bridge EH3 9QG
            </address>
          </div>
        </Grid>
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify={isXSWidth ? "center" : "flex-start"}
          sm={4}
        >
          <div>
            <br />
            <Link to="/about" className={classes.footerTextStyles}>
              About Us
            </Link>
            <br />
            <Link to="/privacy" className={classes.footerTextStyles}>
              Privacy and Cookies
            </Link>
            <br />
            <Link to="/terms-of-use" className={classes.footerTextStyles}>
              Terms of Use
            </Link>
          </div>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify={isXSWidth ? "center" : "flex-start"}
          sm={4}
        >
          <div>
            <br />
            <address>
              <span style={{ fontSize: 16, color: "black" }}>Contact Us</span>
              <br />
              <br />
              <a href="tel:+447519688778" style={{ color: "black" }}>
                +44 (0) 7519688778
              </a>
              <br />
              <div>
                <small>
                  <b style={{ color: "black" }}>Created by</b>
                </small>{" "}
                <small>
                  <b style={{ color: "purple" }}>IT Services Group</b>
                </small>
              </div>
            </address>
          </div>
        </Grid>
      </Grid>
      <Grid item container direction="row" style={{ padding: 16 }}>
        <small>
          Unless explicitly stated otherwise, all material is &copy; IT Services
          Group
        </small>
      </Grid>
    </Grid>
  );
};

export default SubscribePage;
