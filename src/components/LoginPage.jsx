import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

const LoginPage = (props) => {
  const { history } = props;

  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles((theme) => ({
    headerStyles: {
      height: 80,
      paddingLeft: 16,
    },
    schoolPortalStyles: {
      fontSize: 24,
      fontWeight: "bold",
    },
    bodyStyles: {
      height: 540,
      backgroundColor: "grey",
    },
    loginStyle: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.palette.text.primary,
      padding: 16,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify="flex-start"
        className={classes.headerStyles}
      >
        <Typography color="textPrimary" className={classes.schoolPortalStyles}>
          MyDS School Portal
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="flex-start"
        justify="flex-start"
        className={classes.bodyStyles}
      >
        <Grid item container xs={false} sm={3} direction="row">
          {isXSWidth ? null : (
            <Typography className={classes.loginStyle}>Log in</Typography>
          )}
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          direction="column"
          alignItems="center"
          justify="center"
        >
          {isXSWidth ? (
            <Typography className={classes.loginStyle}>Log in</Typography>
          ) : null}
          {isXSWidth ? null : <div style={{ height: 128 }}></div>}
          <LoginForm history={history} />
        </Grid>
        <Grid
          container
          item
          xs={false}
          sm={3}
          alignItems="center"
          justify="center"
        ></Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default LoginPage;
