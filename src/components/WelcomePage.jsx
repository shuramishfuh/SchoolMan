import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography, Grid, makeStyles, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const WelcomePage = () => {
  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const isVeryXSWidth = useMediaQuery("(max-width: 360px)");

  const useStyles = makeStyles((theme) => ({
    headerStyles: {
      height: isXSWidth ? 100 : 60,
      paddingLeft: 16,
    },
    linkStyles: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.palette.text.primary,
      "&:hover": {
        color: "white",
      },
    },
    upperBodyStyles: {
      height: 300,
      backgroundColor: "white",
    },
    middleBodyStyles: {
      height: 40,
    },
    lowerBodyStyles: {
      height: 200,
      backgroundColor: "grey",
    },
    schoolPortalStyles: {
      fontSize: 24,
      fontWeight: "bold",
    },
    avatarStyles: {
      backgroundColor: theme.palette.primary.main,
      height: isVeryXSWidth ? 150 : 180,
      width: isVeryXSWidth ? 270 : 330,
      fontSize: 16,
      textAlign: "center",
      color: "white",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        className={classes.headerStyles}
        direction={isXSWidth ? "column" : "row"}
      >
        <Grid
          item
          container
          sm={6}
          alignItems="center"
          justify="center"
          direction={isXSWidth ? "row" : "column"}
        >
          <Typography className={classes.schoolPortalStyles}>
            MyDS School Portal
          </Typography>
        </Grid>
        <Grid
          item
          container
          sm={2}
          alignItems="center"
          justify="center"
          direction={isXSWidth ? "row" : "column"}
        >
          <Link to="/subscribe" className={classes.linkStyles}>
            Free Trial
          </Link>
        </Grid>
        <Grid
          item
          container
          sm={2}
          alignItems="center"
          justify="center"
          direction={isXSWidth ? "row" : "column"}
        >
          <Link to="/login" className={classes.linkStyles}>
            Sign in
          </Link>
        </Grid>
        <Grid
          item
          container
          sm={2}
          alignItems="center"
          justify="center"
          direction={isXSWidth ? "row" : "column"}
        >
          <Link to="/demo" className={classes.linkStyles}>
            Demo
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.upperBodyStyles}
        alignItems="center"
        justify="center"
      >
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="center"
          sm={6}
        >
          <div>
            <Avatar className={classes.avatarStyles}>
              <p>
                Introducing the <br />
                innovative all-in-one <br />
                student & learning management system.
              </p>
            </Avatar>
          </div>
        </Grid>
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="center"
          sm={6}
        >
          <span style={{ color: "black" }}>Side</span>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        className={classes.middleBodyStyles}
      >
        <span style={{ paddingLeft: 16 }}>
          MyDS School Portal is available to staff and students.
        </span>
      </Grid>
      <Grid
        item
        container
        className={classes.lowerBodyStyles}
        alignItems="center"
        justify="center"
      >
        Lower body
      </Grid>
      <Footer />
    </Grid>
  );
};

export default WelcomePage;
