import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import DemoForm from "./DemoForm";

const DemoPage = (props) => {
  const { history } = props;

  const isXSWidth = useMediaQuery("(max-width: 400px)");

  const useStyles = makeStyles({
    middleHeader: {
      height: isXSWidth ? 200 : 150,
    },
    middleBody: {
      height: 300,
      margin: 5,
    },
    middleHeaderText: {
      fontSize: 40,
      fontWeight: "bold",
    },
  });

  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid item xs={false} sm={2}></Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
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
        <Grid
          item
          container
          className={classes.middleBody}
          alignItems="center"
          justify="center"
        >
          <p>
            See for yourself why institutions from all educational stages trust
            MyDS to bring their people, operations and data together in one
            place.
          </p>
          <p>
            Booking a MyDS demo now will connect you to an expert who will help
            you to discover the platform at your own pace.
          </p>
          <DemoForm history={history} />
        </Grid>
      </Grid>
      <Grid item className={classes.PageRight} xs={false} sm={2}></Grid>
    </Grid>
  );
};

export default DemoPage;
