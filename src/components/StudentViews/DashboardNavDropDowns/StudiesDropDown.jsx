import React, { useEffect, useRef, useCallback } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Row } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  titleStyles: {
    color: theme.palette.grey[600],
    fontWeight: "bold",
  },
  textStyles: {
    color: theme.palette.common.black,
  },
  arrowRightStyles: {
    color: theme.palette.common.black,
    fontSize: 24,
  },
}));

const StudiesDropDown = ({ toggleStudies, setToggleState, studies }) => {
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
        <Row>
          <Typography className={classes.titleStyles}>Courses</Typography>
        </Row>
        <Row>
          <MdKeyboardArrowRight className={classes.arrowRightStyles} />
          <Link to="/" className={classes.textStyles}>
            My Courses
          </Link>
        </Row>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        md={3}
      >
        <Row>
          <Typography className={classes.titleStyles}>
            Learning Support
          </Typography>
        </Row>
        <Row>
          <MdKeyboardArrowRight className={classes.arrowRightStyles} />
          <Link to="/" className={classes.textStyles}>
            Class Tutor
          </Link>
        </Row>
        <Row>
          <MdKeyboardArrowRight className={classes.arrowRightStyles} />
          <Link to="/" className={classes.textStyles}>
            Additional Study Resources
          </Link>
        </Row>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        md={3}
      >
        <Row>
          <Typography className={classes.titleStyles}>Calendar</Typography>
        </Row>
        <Row>
          <MdKeyboardArrowRight className={classes.arrowRightStyles} />
          <Link to="/" className={classes.textStyles}>
            Timetables
          </Link>
        </Row>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        md={3}
      >
        <Row>
          <Typography className={classes.titleStyles}>My Finance</Typography>
        </Row>
        <Row>
          <MdKeyboardArrowRight className={classes.arrowRightStyles} />
          <Link to="/" className={classes.textStyles}>
            Tuition
          </Link>
        </Row>
      </Grid>
    </Grid>
  );
};

export default StudiesDropDown;
