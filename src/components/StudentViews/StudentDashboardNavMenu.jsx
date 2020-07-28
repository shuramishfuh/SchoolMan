import React, { useState } from "react";
import { makeStyles, Grid, IconButton, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { MdMenu, MdExpandMore, MdClose } from "react-icons/md";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Row } from "react-bootstrap";

const StudentDashboardNavMenu = () => {
  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles((theme) => ({
    menuStyles: {
      height: 50,
    },
    menuItemsStyles: {
      height: "auto",
      backgroundColor: theme.palette.brown.main[900],
    },
    summaryStyles: {
      backgroundColor: theme.palette.brown.main[900],
    },
    summaryTextStyles: {
      color: theme.palette.common.white,
      fontWeight: "bold",
    },
    titleStyles: {
      color: theme.palette.grey[600],
      fontWeight: "bold",
    },
    textStyles: {
      color: theme.palette.common.black,
    },
    buttonStyles: {
      "&:focus": {
        outline: 0,
        boxShadow: "none!important",
      },
    },
    arrowRightStyles: {
      color: theme.palette.common.black,
      fontSize: 24,
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        justify="flex-start"
        className={classes.menuStyles}
      >
        <IconButton
          color="inherit"
          onClick={handleMenuToggle}
          className={classes.buttonStyles}
        >
          {open ? <MdClose /> : <MdMenu />}
        </IconButton>
      </Grid>
      {open && (
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          className={classes.menuItemsStyles}
        >
          <div style={{ width: "100%" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore color="#ffffff" />}
                className={classes.summaryStyles}
              >
                <Typography className={classes.summaryTextStyles}>
                  Studies
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction={isXSWidth ? "column" : "row"}>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={2}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        Courses
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        My Courses
                      </Link>
                    </Row>
                  </Grid>

                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={5}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        Learning Support
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Class Tutor
                      </Link>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Additional Study Resources
                      </Link>
                    </Row>
                  </Grid>

                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={2}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        Calendar
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Timetables
                      </Link>
                    </Row>
                  </Grid>

                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={3}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        My Finance
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Tuition
                      </Link>
                    </Row>
                  </Grid>
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
                <Typography className={classes.summaryTextStyles}>
                  Extracurriculars
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction={isXSWidth ? "column" : "row"}>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        Socials
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Clubs and Societies
                      </Link>
                    </Row>
                  </Grid>

                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        Accomodation
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Accomodation Lettings
                      </Link>
                    </Row>
                  </Grid>
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
                <Typography className={classes.summaryTextStyles}>
                  Student Achievements
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction={isXSWidth ? "column" : "row"}>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        Academic Records
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Transcripts
                      </Link>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Certificates
                      </Link>
                    </Row>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        Awards
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        My Awards
                      </Link>
                    </Row>
                  </Grid>
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
                <Typography className={classes.summaryTextStyles}>
                  Opportunities
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction={isXSWidth ? "column" : "row"}>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        Opportunities
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Scholarships
                      </Link>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        School Competitions
                      </Link>
                    </Row>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Row>
                      <Typography className={classes.titleStyles}>
                        Careers
                      </Typography>
                    </Row>
                    <Row>
                      <MdKeyboardArrowRight
                        className={classes.arrowRightStyles}
                      />
                      <Link to="/" className={classes.textStyles}>
                        Jobs
                      </Link>
                    </Row>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default StudentDashboardNavMenu;
