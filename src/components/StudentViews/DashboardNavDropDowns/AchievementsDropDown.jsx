import React, { useEffect, useRef, useCallback } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const AchievementsDropDown = ({
  toggleAchievements,
  setToggleState,
  achievements,
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
        achievements &&
          toggleAchievements &&
          setToggleState((prevState) => {
            return {
              ...prevState,
              toggleAchievements: false,
            };
          });
      }
    },
    [ref, achievements, toggleAchievements, setToggleState]
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
        <Typography className={classes.titleStyles}>
          Academic Records
        </Typography>
        <Link to="/" className={classes.textStyles}>
          Transcripts
        </Link>
        <Link to="/" className={classes.textStyles}>
          Certificates
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
        <Typography className={classes.titleStyles}>Awards</Typography>
        <Link to="/" className={classes.textStyles}>
          My Awards
        </Link>
      </Grid>
    </Grid>
  );
};

export default AchievementsDropDown;
