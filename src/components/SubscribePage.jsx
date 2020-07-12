import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const SubscribePage = () => {
  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles({
    mainHeader: {
      height: isXSWidth ? 120 : 80,
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
      height: 100,
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
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="flex-start"
          sm={6}
        >
          <Typography className={classes.schoolPortalStyles}>
            MyDS School Portal
          </Typography>
        </Grid>
        <Grid
          item
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="flex-start"
          sm={2}
        >
          <span className={classes.infoItemStyles}>School</span>
        </Grid>
        <Grid
          item
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="flex-start"
          sm={2}
        >
          <span className={classes.infoItemStyles}>University</span>
        </Grid>
        <Grid
          item
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="flex-start"
          sm={2}
        >
          <span className={classes.infoItemStyles}>Academy</span>
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
        <Grid item xs={10} sm={10}></Grid>
        <Grid item xs={2} sm={2}>
          <span className={classes.infoItemStyles}>Help</span>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.bodyStyles}
      >
        Body
      </Grid>
      <Grid item container direction="row">
        Address and Contacts
      </Grid>
      <Grid item container direction="row">
        Footer
      </Grid>
    </Grid>
  );
};

export default SubscribePage;
