import React, { useEffect, useRef, useCallback } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const StudiesDropDown = ({ toggleStudies, setToggleState, studies }) => {
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
        studies &&
          toggleStudies &&
          setToggleState((prevState) => {
            return {
              ...prevState,
              toggleStudies: false,
            };
          });
      }
    },
    [ref, studies, toggleStudies, setToggleState]
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
        md={3}
      >
        <Typography className={classes.titleStyles}>Courses</Typography>
        <Link to="/" className={classes.textStyles}>
          My Courses
        </Link>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        md={3}
      >
        <Typography className={classes.titleStyles}>
          Learning Support
        </Typography>
        <Link to="/" className={classes.textStyles}>
          Class Tutor
        </Link>
        <Link to="/" className={classes.textStyles}>
          Additional Study Resources
        </Link>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        md={3}
      >
        <Typography className={classes.titleStyles}>Calendar</Typography>
        <Link to="/" className={classes.textStyles}>
          Timetables
        </Link>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        md={3}
      >
        <Typography className={classes.titleStyles}>My Finance</Typography>
        <Link to="/" className={classes.textStyles}>
          Tuition
        </Link>
      </Grid>
    </Grid>
  );
};

export default StudiesDropDown;
