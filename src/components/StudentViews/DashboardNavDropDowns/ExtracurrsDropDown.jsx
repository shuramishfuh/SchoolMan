import React, { useEffect, useRef, useCallback } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const ExtracurrsDropDown = ({
  toggleExtracurrs,
  setToggleState,
  extracurriculars,
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
        extracurriculars &&
          toggleExtracurrs &&
          setToggleState((prevState) => {
            return {
              ...prevState,
              toggleExtracurrs: false,
            };
          });
      }
    },
    [ref, extracurriculars, toggleExtracurrs, setToggleState]
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
        <Typography className={classes.titleStyles}>Socials</Typography>
        <Link to="/" className={classes.textStyles}>
          Clubs and Societies
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
        <Typography className={classes.titleStyles}>Accomodation</Typography>
        <Link to="/" className={classes.textStyles}>
          Accomodation Lettings
        </Link>
      </Grid>
    </Grid>
  );
};

export default ExtracurrsDropDown;
