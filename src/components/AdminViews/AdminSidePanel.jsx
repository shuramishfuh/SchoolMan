import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { makeStyles, Grid, Typography, Avatar } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {
  MdPeople,
  MdSettings,
  MdExpandMore,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { IoMdKey, IoIosPeople } from "react-icons/io";
import { FaIdCard, FaClipboardList, FaCoins, FaBook } from "react-icons/fa";
import { GiBookshelf, GiGears } from "react-icons/gi";

const AdminSidePanel = () => {
  const useStyles = makeStyles((theme) => ({
    menuItemsStyles: {
      height: "auto",
      backgroundColor: theme.palette.brown.main[900],
    },
    summaryStyles: {
      backgroundColor: theme.palette.brown.main[900],
    },
    summaryTextStyles: {
      color: theme.palette.common.white,
      // fontWeight: "bold",
    },
    textStyles: {
      color: theme.palette.common.black,
    },
    arrowRightStyles: {
      color: theme.palette.common.black,
      fontSize: 24,
    },
    avatarStyles: {
      color: theme.palette.common.black,
    },
    panelHeadingStyles: {
      height: 50,
      backgroundColor: theme.palette.common.black,
    },
    panelHeadingTextStyles: {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  }));

  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid
      item
      container
      alignItems="center"
      justify="center"
      className={classes.menuItemsStyles}
    >
      <div style={{ width: "100%" }}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.panelHeadingStyles}
        >
          <Typography className={classes.panelHeadingTextStyles}>
            Management
          </Typography>
        </Grid>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <IoIosPeople />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  Classes
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Manage Classes
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Class Statistics
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <MdPeople />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  Students
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Manage Students
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Student Statistics
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <FaBook />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  Courses
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Manage Courses
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Course Statistics
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <FaIdCard />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  Personnel & Contacts
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Staff
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Other Employees
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Manage Employees
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <FaClipboardList />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  Enrollments
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Assign courses to classes
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Assign students to classes
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Assign staff to classes
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <IoMdKey />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  User Accounts
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Manage accounts
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <GiBookshelf />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  Academics
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Assessments & Sessions
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Grading
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Timetable & Scheduling
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <FaCoins />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  Finances
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Overview
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Transactions
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Manage finances
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.panelHeadingStyles}
        >
          <Typography className={classes.panelHeadingTextStyles}>
            Settings
          </Typography>
        </Grid>

        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <MdSettings />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  Main Settings
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  My Institution
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Academic Periods
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Role Management
                </Link>
              </Row>
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Consents & Admission Data
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore color="#ffffff" />}
            className={classes.summaryStyles}
          >
            <Grid item container alignItems="center" justify="space-evenly">
              <Grid item xs={3} sm={3}>
                <Avatar className={classes.avatarStyles}>
                  <GiGears />
                </Avatar>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Typography className={classes.summaryTextStyles}>
                  Advanced Settings
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              justify="space-evenly"
            >
              <Row>
                <MdKeyboardArrowRight className={classes.arrowRightStyles} />
                <Link to="/" className={classes.textStyles}>
                  Configure advanced settings
                </Link>
              </Row>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  );
};

export default AdminSidePanel;
