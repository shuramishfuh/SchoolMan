import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Footer from "../Footer";
import { MdPerson } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
import StudentDashboardNav from "./StudentDashboardNav";

const StudentDashboard = () => {
  const isSmallWidth = useMediaQuery("(max-width: 960px)");

  const useStyles = makeStyles((theme) => ({
    headerStyles: {
      height: isSmallWidth ? 96 : 80,
      paddingLeft: 16,
    },
    schoolPortalStyles: {
      fontSize: 24,
      fontWeight: "bold",
    },
    linkStyles: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.palette.text.primary,
      "&:hover": {
        color: "white",
      },
      paddingTop: isSmallWidth ? 8 : 0,
    },
    instName: {
      height: 40,
      paddingLeft: 8,
      backgroundColor: "grey",
    },
    navBar: {},
    belowNavBar: {
      height: 300,
      backgroundColor: "grey",
    },
    lowerBodyStyles: {
      backgroundColor: "brown",
      height: 250,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction={isSmallWidth ? "column" : "row"}
        className={classes.headerStyles}
        alignItems="center"
      >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justify={isSmallWidth ? "center" : "flex-start"}
          md={9}
        >
          <Typography className={classes.schoolPortalStyles}>
            MyDS School Portal
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justify={isSmallWidth ? "center" : "space-evenly"}
          md={2}
          style={{ paddingBottom: 0 }}
        >
          <MdPerson style={{ fontSize: 24 }} />
          <span
            style={{
              fontWeight: "bold",
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 4,
            }}
          >
            Username
          </span>
          {isSmallWidth ? null : <span>&#124;</span>}
        </Grid>
        <Grid
          item
          container
          direction={isSmallWidth ? "row" : "column"}
          alignItems="center"
          justify="center"
          md={1}
        >
          <Link to="/login" className={classes.linkStyles}>
            Sign out
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item container alignItems="center" className={classes.instName}>
          <FaSchool style={{ fontSize: 28 }} />
          <span style={{ fontWeight: "bold", paddingLeft: 8, paddingTop: 4 }}>
            Institution High School
          </span>
        </Grid>
        <Grid item container className={classes.navBar}>
          <StudentDashboardNav />
        </Grid>
        <Grid item container className={classes.belowNavBar}></Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.lowerBodyStyles}
      >
        Lower Body
      </Grid>
      <Footer />
    </Grid>
  );
};

export default StudentDashboard;
