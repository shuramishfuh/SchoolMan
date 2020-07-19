import React, { useEffect, useRef, useCallback } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const OpportunitiesDropDown = ({
  toggleOpportunities,
  setToggleState,
  opportunities,
}) => {
  const useStyles = makeStyles((theme) => ({
    titleStyles: {
      color: theme.palette.grey[600],
      fontWeight: "bold",
    },
    textStyles: {
      color: theme.palette.common.black,
    },
  }));

  const classes = useStyles();
  const ref = useRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (!ref.current.contains(event.target)) {
        opportunities &&
          toggleOpportunities &&
          setToggleState((prevState) => {
            return {
              ...prevState,
              toggleOpportunities: false,
            };
          });
      }
    },
    [ref, opportunities, toggleOpportunities, setToggleState]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <Grid container ref={ref}>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        md={6}
      >
        <Typography className={classes.titleStyles}>Opportunities</Typography>
        <Link to="/" className={classes.textStyles}>
          School Competitions
        </Link>
        <Link to="/" className={classes.textStyles}>
          Scholarships
        </Link>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        md={6}
      >
        <Typography className={classes.titleStyles}>Careers</Typography>
        <Link to="/" className={classes.textStyles}>
          Jobs
        </Link>
      </Grid>
    </Grid>
  );
};

export default OpportunitiesDropDown;
