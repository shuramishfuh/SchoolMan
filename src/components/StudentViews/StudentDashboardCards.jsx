import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AcademicSummary from "../../images/AcademicSummary.jpg";
import Contact from "../../images/Contact.jpg";
import Today from "../../images/Today.jpg";
import Announcements from "../../images/Announcements.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const StudentDashboardCards = () => {
  const isXSWidth = useMediaQuery("(max-width: 600px)");
  const isMediumWidth = useMediaQuery("(min-width: 960px)");
  let a = useMediaQuery("(min-width: 600px)");
  let b = useMediaQuery("(max-width: 960px)");
  const isSmallWidth = a && b;

  const useStyles = makeStyles((theme) => ({
    lowerBodyStyles: {
      height: isSmallWidth ? "auto" : 250,
      backgroundColor: theme.palette.brown.main[900],
    },
    cardStyles: {
      backgroundColor: theme.palette.grey[500],
      width: isSmallWidth || isXSWidth ? "80%" : "auto",
    },
    cardTextStyles: {
      color: theme.palette.text.secondary,
      fontWeight: "bold",
    },
    cardContentStyles: {
      textAlign: "center",
      height: 32,
      paddingTop: 4,
      paddingBottom: 4,
    },
    cardImageStyles: {
      "&:hover": {
        cursor: "default",
      },
    },
  }));

  const classes = useStyles();

  if (isMediumWidth) {
    return (
      <Grid
        container
        direction="row"
        style={{ height: "inherit" }}
        className={classes.lowerBodyStyles}
      >
        <Grid
          item
          container
          md={3}
          justify="center"
          alignItems="center"
          style={{ padding: 8 }}
        >
          <Card className={classes.cardStyles}>
            <CardActionArea className={classes.cardImageStyles}>
              <CardMedia
                component="img"
                alt="Academic Summary"
                height="192"
                image={AcademicSummary}
                title="Academic Summary"
              />
            </CardActionArea>
            <div className={classes.cardContentStyles}>
              <Typography>
                <Link to="/" className={classes.cardTextStyles}>
                  Academic Summary
                </Link>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          container
          md={3}
          justify="center"
          alignItems="center"
          style={{ padding: 8 }}
        >
          <Card className={classes.cardStyles}>
            <CardActionArea className={classes.cardImageStyles}>
              <CardMedia
                component="img"
                alt="Today"
                height="192"
                image={Today}
                title="Today"
              />
            </CardActionArea>
            <div className={classes.cardContentStyles}>
              <Typography>
                <Link to="/" className={classes.cardTextStyles}>
                  Today
                </Link>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          container
          md={3}
          justify="center"
          alignItems="center"
          style={{ padding: 8 }}
        >
          <Card className={classes.cardStyles}>
            <CardActionArea className={classes.cardImageStyles}>
              <CardMedia
                component="img"
                alt="Contact"
                height="192"
                image={Contact}
                title="Contact"
              />
            </CardActionArea>
            <div className={classes.cardContentStyles}>
              <Typography>
                <Link to="/" className={classes.cardTextStyles}>
                  Contact Details
                </Link>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          container
          md={3}
          justify="center"
          alignItems="center"
          style={{ padding: 8 }}
        >
          <Card className={classes.cardStyles}>
            <CardActionArea className={classes.cardImageStyles}>
              <CardMedia
                component="img"
                alt="Announcements"
                height="192"
                image={Announcements}
                title="Announcements"
              />
            </CardActionArea>
            <div className={classes.cardContentStyles}>
              <Typography>
                <Link to="/" className={classes.cardTextStyles}>
                  Announcements
                </Link>
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    );
  } else if (isSmallWidth) {
    return (
      <Grid
        container
        direction="row"
        style={{ height: "inherit" }}
        className={classes.lowerBodyStyles}
      >
        <Grid item container>
          <Grid
            item
            container
            sm={6}
            justify="center"
            alignItems="center"
            style={{ padding: 8 }}
          >
            <Card className={classes.cardStyles}>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Academic Summary"
                  height="192"
                  image={AcademicSummary}
                  title="Academic Summary"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>
                <Typography>
                  <Link to="/" className={classes.cardTextStyles}>
                    Academic Summary
                  </Link>
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            container
            sm={6}
            justify="center"
            alignItems="center"
            style={{ padding: 8 }}
          >
            <Card className={classes.cardStyles}>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Today"
                  height="192"
                  image={Today}
                  title="Today"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>
                <Typography>
                  <Link to="/" className={classes.cardTextStyles}>
                    Today
                  </Link>
                </Typography>
              </div>
            </Card>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid
            item
            container
            sm={6}
            justify="center"
            alignItems="center"
            style={{ padding: 8 }}
          >
            <Card className={classes.cardStyles}>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Contact"
                  height="192"
                  image={Contact}
                  title="Contact"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>
                <Typography>
                  <Link to="/" className={classes.cardTextStyles}>
                    Contact Details
                  </Link>
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            container
            sm={6}
            justify="center"
            alignItems="center"
            style={{ padding: 8 }}
          >
            <Card className={classes.cardStyles}>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Announcements"
                  height="192"
                  image={Announcements}
                  title="Announcements"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>
                <Typography>
                  <Link to="/" className={classes.cardTextStyles}>
                    Announcements
                  </Link>
                </Typography>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        direction="column"
        style={{ height: "inherit" }}
        className={classes.lowerBodyStyles}
      >
        <Grid
          item
          container
          xs={12}
          justify="center"
          alignItems="center"
          style={{ padding: 8 }}
        >
          <Card className={classes.cardStyles}>
            <CardActionArea className={classes.cardImageStyles}>
              <CardMedia
                component="img"
                alt="Academic Summary"
                height="192"
                image={AcademicSummary}
                title="Academic Summary"
              />
            </CardActionArea>
            <div className={classes.cardContentStyles}>
              <Typography>
                <Link to="/" className={classes.cardTextStyles}>
                  Academic Summary
                </Link>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justify="center"
          alignItems="center"
          style={{ padding: 8 }}
        >
          <Card className={classes.cardStyles}>
            <CardActionArea className={classes.cardImageStyles}>
              <CardMedia
                component="img"
                alt="Today"
                height="192"
                image={Today}
                title="Today"
              />
            </CardActionArea>
            <div className={classes.cardContentStyles}>
              <Typography>
                <Link to="/" className={classes.cardTextStyles}>
                  Today
                </Link>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justify="center"
          alignItems="center"
          style={{ padding: 8 }}
        >
          <Card className={classes.cardStyles}>
            <CardActionArea className={classes.cardImageStyles}>
              <CardMedia
                component="img"
                alt="Contact"
                height="192"
                image={Contact}
                title="Contact"
              />
            </CardActionArea>
            <div className={classes.cardContentStyles}>
              <Typography>
                <Link to="/" className={classes.cardTextStyles}>
                  Contact Details
                </Link>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justify="center"
          alignItems="center"
          style={{ padding: 8 }}
        >
          <Card className={classes.cardStyles}>
            <CardActionArea className={classes.cardImageStyles}>
              <CardMedia
                component="img"
                alt="Announcements"
                height="192"
                image={Announcements}
                title="Announcements"
              />
            </CardActionArea>
            <div className={classes.cardContentStyles}>
              <Typography>
                <Link to="/" className={classes.cardTextStyles}>
                  Announcements
                </Link>
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    );
  }
};

export default StudentDashboardCards;
