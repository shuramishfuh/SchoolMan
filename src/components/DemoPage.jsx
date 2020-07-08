import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import DemoForm from "./DemoForm";

const DemoPage = (props) => {
  const useStyles = makeStyles((theme) => ({
    PageLeft: {},
    PageMiddle: {},
    PageRight: {},
    PageContainer: {
      backgroundColor: theme.palette.primary.main,
      height: window.outerHeight,
    },
    middleHeader: {
      height: 150,
    },
    middleBody: {
      height: 300,
    },
    middleFooter: {
      height: 50,
    },
    middleHeaderText: {
      fontSize: 40,
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.PageContainer}>
      <Grid item className={classes.PageLeft} xs={false} sm={2}>
        This is the grid side
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.PageMiddle}
        xs={12}
        sm={8}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          className={classes.middleHeader}
        >
          <Typography color="textPrimary" className={classes.middleHeaderText}>
            MyDS Platform Demo
          </Typography>
        </Grid>
        <Grid item className={classes.middleBody}>
          <p>
            See for yourself why institutions from all educational stages trust
            MyDS to bring their people, operations and data together in one
            place.
          </p>
          <p>
            Booking a MyDS demo now will connect you to an expert who will help
            you to discover the platform at your own pace.
          </p>
          <DemoForm />
        </Grid>
      </Grid>
      <Grid item className={classes.PageRight} xs={false} sm={2}>
        This is the grid side
      </Grid>
    </Grid>
  );
};

export default DemoPage;
