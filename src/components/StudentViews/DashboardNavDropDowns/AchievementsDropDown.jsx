import React, { useEffect, useRef, useCallback } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Row } from "react-bootstrap";

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
    arrowRightStyles: {
      color: theme.palette.common.black,
      fontSize: 24,
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
        <Row>
          <Typography className={classes.titleStyles}>
            Academic Records
          </Typography>
        </Row>
        <Row>
          <MdKeyboardArrowRight className={classes.arrowRightStyles} />
          <Link to="/" className={classes.textStyles}>
            Transcripts
          </Link>
        </Row>
        <Row>
          <MdKeyboardArrowRight className={classes.arrowRightStyles} />
          <Link to="/" className={classes.textStyles}>
            Certificates
          </Link>
        </Row>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        md={6}
      >
        <Row>
          <Typography className={classes.titleStyles}>Awards</Typography>
        </Row>
        <Row>
          <MdKeyboardArrowRight className={classes.arrowRightStyles} />
          <Link to="/" className={classes.textStyles}>
            My Awards
          </Link>
        </Row>
      </Grid>
    </Grid>
  );
};

export default AchievementsDropDown;
