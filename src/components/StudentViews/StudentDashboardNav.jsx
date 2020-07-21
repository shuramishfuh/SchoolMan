import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import StudiesDropDown from "./DashboardNavDropDowns/StudiesDropDown";
import ExtracurrsDropDown from "./DashboardNavDropDowns/ExtracurrsDropDown";
import AchievementsDropDown from "./DashboardNavDropDowns/AchievementsDropDown";
import OpportunitiesDropDown from "./DashboardNavDropDowns/OpportunitiesDropDown";
import StudentDashboardNavMenu from "./StudentDashboardNavMenu";

const StudentDashboardNav = () => {
  const isSmallWidth = useMediaQuery("(max-width: 960px)");

  const useStyles = makeStyles((theme) => ({
    navBarStyles: {
      height: 50,
    },
    navBarItemOnStyles: {
      "&:hover": {
        cursor: "pointer",
      },
      backgroundColor: theme.palette.secondary.main,
      height: "100%",
    },
    navBarItemOffStyles: {
      "&:hover": {
        cursor: "pointer",
      },
      height: "100%",
    },
    navBarItemOnTextStyles: {
      fontWeight: "bold",
      color: theme.palette.common.black,
    },
    navBarItemOffTextStyles: {
      fontWeight: "bold",
    },
    expandIconOnStyles: {
      paddingLeft: 8,
      fontSize: 32,
    },
    expandIconOffStyles: {
      paddingLeft: 8,
      fontSize: 32,
      color: theme.palette.common.black,
    },
    navDropDownOnStyles: {
      height: isSmallWidth ? 200 : 100,
      backgroundColor: theme.palette.secondary.main,
    },
    mouseOverTextStyles: {
      textDecorationLine: "underline",
    },
  }));

  const classes = useStyles();

  const [navState, setNavState] = useState({
    home: true,
    studies: false,
    extracurriculars: false,
    achievements: false,
    opportunities: false,
  });

  const [toggleState, setToggleState] = useState({
    toggleHome: false,
    toggleStudies: false,
    toggleExtracurrs: false,
    toggleAchievements: false,
    toggleOpportunities: false,
  });

  const [mouseOver, setMouseOver] = useState({
    home: false,
    studies: false,
    extracurriculars: false,
    achievements: false,
    opportunities: false,
  });

  const navDropDownOn =
    toggleState.toggleStudies ||
    toggleState.toggleExtracurrs ||
    toggleState.toggleAchievements ||
    toggleState.toggleOpportunities;

  const handleMouseOver = (key) => {
    setMouseOver((prevState) => {
      return {
        ...prevState,
        [key]: true,
      };
    });
  };

  const handleMouseOut = (key) => {
    setMouseOver((prevState) => {
      return {
        ...prevState,
        [key]: false,
      };
    });
  };

  const handleItemClick = (key, toggleKey) => {
    let filteredItems = Object.keys(navState).filter((value) => value !== key);
    let intermediateState = {};
    filteredItems.forEach((item) => {
      intermediateState[item] = false;
    });
    let updatedState = { ...intermediateState, [key]: true };
    setNavState(updatedState);

    filteredItems = Object.keys(toggleState).filter(
      (value) => value !== toggleKey
    );
    intermediateState = {};
    filteredItems.forEach((item) => {
      intermediateState[item] = false;
    });
    setToggleState((prevState) => {
      return {
        ...intermediateState,
        [toggleKey]: !prevState[toggleKey],
      };
    });
  };

  if (isSmallWidth) return <StudentDashboardNavMenu />;
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item container alignItems="center" className={classes.navBarStyles}>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          md={2}
          className={
            navState.home || mouseOver.home
              ? classes.navBarItemOnStyles
              : classes.navBarItemOffStyles
          }
          onClick={() => handleItemClick("home", "toggleHome")}
          onMouseOver={() => handleMouseOver("home")}
          onMouseOut={() => handleMouseOut("home")}
        >
          <div>
            <span
              className={`${
                navState.home || mouseOver.home
                  ? classes.navBarItemOnTextStyles
                  : classes.navBarItemOffTextStyles
              } ${mouseOver.home ? classes.mouseOverTextStyles : null}`}
            >
              Home
            </span>
          </div>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          md={2}
          className={
            navState.studies || mouseOver.studies
              ? classes.navBarItemOnStyles
              : classes.navBarItemOffStyles
          }
          onClick={() => handleItemClick("studies", "toggleStudies")}
          onMouseOver={() => handleMouseOver("studies")}
          onMouseOut={() => handleMouseOut("studies")}
        >
          <div>
            <span
              className={`${
                navState.studies || mouseOver.studies
                  ? classes.navBarItemOnTextStyles
                  : classes.navBarItemOffTextStyles
              } ${mouseOver.studies ? classes.mouseOverTextStyles : null}`}
            >
              Studies
            </span>
            {navState.studies && !toggleState.toggleStudies && (
              <MdExpandMore className={classes.expandIconOffStyles} />
            )}
            {navState.studies && toggleState.toggleStudies && (
              <MdExpandLess className={classes.expandIconOffStyles} />
            )}
            {!navState.studies && !mouseOver.studies && (
              <MdExpandMore className={classes.expandIconOnStyles} />
            )}
            {!navState.studies && mouseOver.studies && (
              <MdExpandMore className={classes.expandIconOffStyles} />
            )}
          </div>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          md={3}
          className={
            navState.extracurriculars || mouseOver.extracurriculars
              ? classes.navBarItemOnStyles
              : classes.navBarItemOffStyles
          }
          onClick={() =>
            handleItemClick("extracurriculars", "toggleExtracurrs")
          }
          onMouseOver={() => handleMouseOver("extracurriculars")}
          onMouseOut={() => handleMouseOut("extracurriculars")}
        >
          <div>
            <span
              className={`${
                navState.extracurriculars || mouseOver.extracurriculars
                  ? classes.navBarItemOnTextStyles
                  : classes.navBarItemOffTextStyles
              } ${
                mouseOver.extracurriculars ? classes.mouseOverTextStyles : null
              }`}
            >
              Extracurriculars
            </span>
            {navState.extracurriculars && !toggleState.toggleExtracurrs && (
              <MdExpandMore className={classes.expandIconOffStyles} />
            )}
            {navState.extracurriculars && toggleState.toggleExtracurrs && (
              <MdExpandLess className={classes.expandIconOffStyles} />
            )}
            {!navState.extracurriculars && !mouseOver.extracurriculars && (
              <MdExpandMore className={classes.expandIconOnStyles} />
            )}
            {!navState.extracurriculars && mouseOver.extracurriculars && (
              <MdExpandMore className={classes.expandIconOffStyles} />
            )}
          </div>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          md={3}
          className={
            navState.achievements || mouseOver.achievements
              ? classes.navBarItemOnStyles
              : classes.navBarItemOffStyles
          }
          onClick={() => handleItemClick("achievements", "toggleAchievements")}
          onMouseOver={() => handleMouseOver("achievements")}
          onMouseOut={() => handleMouseOut("achievements")}
        >
          <div>
            <span
              className={`${
                navState.achievements || mouseOver.achievements
                  ? classes.navBarItemOnTextStyles
                  : classes.navBarItemOffTextStyles
              } ${mouseOver.achievements ? classes.mouseOverTextStyles : null}`}
            >
              Student Achievements
            </span>
            {navState.achievements && !toggleState.toggleAchievements && (
              <MdExpandMore className={classes.expandIconOffStyles} />
            )}
            {navState.achievements && toggleState.toggleAchievements && (
              <MdExpandLess className={classes.expandIconOffStyles} />
            )}
            {!navState.achievements && !mouseOver.achievements && (
              <MdExpandMore className={classes.expandIconOnStyles} />
            )}
            {!navState.achievements && mouseOver.achievements && (
              <MdExpandMore className={classes.expandIconOffStyles} />
            )}
          </div>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          md={2}
          className={
            navState.opportunities || mouseOver.opportunities
              ? classes.navBarItemOnStyles
              : classes.navBarItemOffStyles
          }
          onClick={() =>
            handleItemClick("opportunities", "toggleOpportunities")
          }
          onMouseOver={() => handleMouseOver("opportunities")}
          onMouseOut={() => handleMouseOut("opportunities")}
        >
          <div>
            <span
              className={`${
                navState.opportunities || mouseOver.opportunities
                  ? classes.navBarItemOnTextStyles
                  : classes.navBarItemOffTextStyles
              } ${
                mouseOver.opportunities ? classes.mouseOverTextStyles : null
              }`}
            >
              Opportunities
            </span>
            {navState.opportunities && !toggleState.toggleOpportunities && (
              <MdExpandMore className={classes.expandIconOffStyles} />
            )}
            {navState.opportunities && toggleState.toggleOpportunities && (
              <MdExpandLess className={classes.expandIconOffStyles} />
            )}
            {!navState.opportunities && !mouseOver.opportunities && (
              <MdExpandMore className={classes.expandIconOnStyles} />
            )}
            {!navState.opportunities && mouseOver.opportunities && (
              <MdExpandMore className={classes.expandIconOffStyles} />
            )}
          </div>
        </Grid>
      </Grid>

      {navDropDownOn && (
        <Grid
          item
          container
          direction="row"
          className={classes.navDropDownOnStyles}
        >
          {navState.studies && toggleState.toggleStudies && (
            <StudiesDropDown
              toggleStudies={toggleState.toggleStudies}
              setToggleState={setToggleState}
              studies={navState.studies}
            />
          )}
          {navState.extracurriculars && toggleState.toggleExtracurrs && (
            <ExtracurrsDropDown
              toggleExtracurrs={toggleState.toggleExtracurrs}
              setToggleState={setToggleState}
              extracurriculars={navState.extracurriculars}
            />
          )}
          {navState.achievements && toggleState.toggleAchievements && (
            <AchievementsDropDown
              toggleAchievements={toggleState.toggleAchievements}
              setToggleState={setToggleState}
              achievements={navState.achievements}
            />
          )}
          {navState.opportunities && toggleState.toggleOpportunities && (
            <OpportunitiesDropDown
              toggleOpportunities={toggleState.toggleOpportunities}
              setToggleState={setToggleState}
              opportunities={navState.opportunities}
            />
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default StudentDashboardNav;
