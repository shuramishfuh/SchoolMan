import React, { useState } from "react";
import { Grid, makeStyles, Avatar, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { MdNotifications, MdMailOutline, MdPerson } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import AdminSidePanel from "./AdminSidePanel";
import AdminDashboardMenu from "./AdminDashboardMenu";
import { Link } from "react-router-dom";
import { grey } from "@material-ui/core/colors";
import AdminDashboardCardsnActions from "./AdminDashboardCardsnActions";

const AdminDashboard = () => {
  const isSmallWidth = useMediaQuery("(max-width: 960px)");
  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles((theme) => ({
    headerStyles: {
      height: 100,
    },
    instStyles: {
      fontFamily: "-apple-system, system-ui",
      fontWeight: "bold",
      fontSize: 20,
      textTransform: "uppercase",
      paddingLeft: 16,
    },
    notifIconStyles: {
      position: "relative",
      bottom: 8,
      right: 8,
    },
    avatarStyles: {
      color: theme.palette.common.black,
    },
    bodyStyles: {
      backgroundColor: theme.palette.brown.main[500],
      height: "auto",
    },
    schoolPortalStyles: {
      height: 100,
      backgroundColor: theme.palette.brown.main[500],
    },
    textStyles: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.palette.text.primary,
    },
    sidePanelStyles: {
      height: "auto",
    },
    adminbgStyles: {
      backgroundColor: theme.palette.darkViolet.main,
    },
    profileTextStyles: {
      fontSize: 14,
      color: theme.palette.text.primary,
      fontFamily: "Arial, Helvetica, sans-serif",
      "&:hover": {
        color: theme.palette.common.white,
      },
    },
  }));

  const classes = useStyles();
  const [toggleProfile, setToggleProfile] = useState(false);

  const handleToggleProfile = () => {
    setToggleProfile(!toggleProfile);
  };

  // useEffect(() => {
  //   return () => (document.body.backgroundColor = "white");
  // }, []);

  return (
    <Grid container className={classes.adminbgStyles}>
      {!isSmallWidth && (
        <Grid item container direction="column" md={3}>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            className={classes.schoolPortalStyles}
          >
            <span className={classes.textStyles}>MyDS admin</span>
          </Grid>
          <Grid item className={classes.sidePanelStyles}>
            <AdminSidePanel />
          </Grid>
        </Grid>
      )}

      <Grid item container direction="column" md={9}>
        <Grid
          item
          container
          alignItems="center"
          justify="space-between"
          className={classes.headerStyles}
        >
          <Grid item container md={6} alignItems="center">
            <Typography className={classes.instStyles}>
              XYZ High School
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            xs={4}
            sm={4}
            md={2}
          >
            <Avatar className={classes.avatarStyles}>
              <MdNotifications />
            </Avatar>
            <span className={`badge badge-light ${classes.notifIconStyles}`}>
              x
            </span>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            xs={4}
            sm={4}
            md={2}
          >
            <Avatar className={classes.avatarStyles}>
              <MdMailOutline />
            </Avatar>
            <span className={`badge badge-light ${classes.notifIconStyles}`}>
              y
            </span>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            xs={4}
            sm={4}
            md={2}
          >
            <Avatar
              className={classes.avatarStyles}
              onClick={handleToggleProfile}
            >
              <MdPerson />
            </Avatar>
            <FaCaretDown onClick={handleToggleProfile} />
          </Grid>
        </Grid>
        {toggleProfile && isSmallWidth && (
          <div
            style={{
              backgroundColor: grey[900],
              position: "absolute",
              textAlign: "center",
              height: "auto",
              width: isXSWidth ? 120 : 160,
              padding: 5,
              right: 0,
              top: 96,
              zIndex: 1,
            }}
          >
            <p>
              <span className={classes.profileTextStyles}>Username</span>
            </p>
            <div style={{ height: 1, backgroundColor: "white" }}></div>
            <br />
            <p>
              <Link to="/" className={classes.profileTextStyles}>
                <span>My Profile</span>
              </Link>
            </p>
            <p>
              <Link to="/login" className={classes.profileTextStyles}>
                <span>Sign out</span>
              </Link>
            </p>
          </div>
        )}
        {toggleProfile && !isSmallWidth && (
          <div
            style={{
              backgroundColor: grey[900],
              position: "absolute",
              textAlign: "center",
              height: "auto",
              width: 120,
              padding: 5,
              right: 0,
              top: 88,
              zIndex: 1,
            }}
          >
            <p>
              <span className={classes.profileTextStyles}>Username</span>
            </p>
            <div style={{ height: 1, backgroundColor: "white" }}></div>
            <br />
            <p>
              <Link to="/" className={classes.profileTextStyles}>
                <span>My Profile</span>
              </Link>
            </p>
            <p>
              <Link to="/login" className={classes.profileTextStyles}>
                <span>Sign out</span>
              </Link>
            </p>
          </div>
        )}
        {isSmallWidth && <AdminDashboardMenu />}
        <Grid item container direction="column" className={classes.bodyStyles}>
          <AdminDashboardCardsnActions />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
