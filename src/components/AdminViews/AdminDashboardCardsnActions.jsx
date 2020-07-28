import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  useMediaQuery,
} from "@material-ui/core";
import Students from "../../images/GraduatingStudents.jpg";
import Classroom from "../../images/Classroom.jpg";
import Whiteboard from "../../images/Whiteboard.jpg";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SmilingPupil from "../../images/SmilingPupil.jpg";
import Student from "../../images/Student.jpg";
import Computer from "../../images/Computer.jpg";
import AdminDashboardSearch from "./AdminDashboardSearch";

const AdminDashboardCardsnActions = () => {
  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles((theme) => ({
    cardImageStyles: {
      "&:hover": {
        cursor: "default",
      },
    },
    cardContentStyles: {
      height: 30,
      textAlign: "center",
      textJustify: "center",
      textTransform: "uppercase",
      color: theme.palette.common.black,
      backgroundColor: theme.palette.grey[500],
      fontWeight: "bold",
      fontSize: 12,
    },
    cardActionStyles: {
      textAlign: "center",
      textJustify: "center",
      height: 30,
      backgroundColor: theme.palette.darkViolet.main,
    },
    cardLinkStyles: {
      color: theme.palette.text.primary,
      fontWeight: "bold",
      "&:hover": {
        color: theme.palette.common.white,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {isXSWidth ? (
        <Grid container direction="column">
          <Grid item container alignItems="center" justify="center">
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Students"
                  height="200"
                  width="200"
                  image={Students}
                  title="Students"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>X Students</div>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Students List
                </Link>
              </div>
            </Card>
          </Grid>

          <Grid item container alignItems="center" justify="center">
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Whiteboard"
                  height="200"
                  width="200"
                  image={Whiteboard}
                  title="Whiteboard"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>Y Staff Members</div>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Staff List
                </Link>
              </div>
            </Card>
          </Grid>

          <Grid item container alignItems="center" justify="center">
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Classroom"
                  height="200"
                  width="200"
                  image={Classroom}
                  title="Classroom"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>Z Classes</div>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Classes List
                </Link>
              </div>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Row style={{ margin: 4 }}>
          <Col style={{ padding: 4, margin: 0 }}>
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Students"
                  height="200"
                  width="180"
                  image={Students}
                  title="Students"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>X Students</div>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Students List
                </Link>
              </div>
            </Card>
          </Col>

          <Col style={{ padding: 4, margin: 0 }}>
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Whiteboard"
                  height="200"
                  width="180"
                  image={Whiteboard}
                  title="Whiteboard"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>Y Staff Members</div>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Staff List
                </Link>
              </div>
            </Card>
          </Col>

          <Col style={{ padding: 4, margin: 0 }}>
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Classroom"
                  height="200"
                  width="180"
                  image={Classroom}
                  title="Classroom"
                />
              </CardActionArea>
              <div className={classes.cardContentStyles}>Z Classes</div>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Classes List
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      )}

      <Row style={{ margin: 4, height: "auto" }}>
        <AdminDashboardSearch />
      </Row>

      <Grid
        item
        container
        alignItems="center"
        justify="center"
        style={{
          backgroundColor: "black",
          textTransform: "uppercase",
          fontSize: 16,
          fontWeight: "bold",
          height: 50,
        }}
      >
        Quick Actions
      </Grid>

      {isXSWidth ? (
        <Grid container direction="column">
          <Grid item container alignItems="center">
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Student"
                  height="200"
                  width="200"
                  image={Student}
                  title="Create a Student"
                />
              </CardActionArea>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Create Student
                </Link>
              </div>
            </Card>
          </Grid>

          <Grid item container alignItems="center" justify="center">
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Pupil"
                  height="200"
                  width="200"
                  image={SmilingPupil}
                  title="View Student Statistics"
                />
              </CardActionArea>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  View Student Statistics
                </Link>
              </div>
            </Card>
          </Grid>

          <Grid item container alignItems="center" justify="center">
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Computer"
                  height="200"
                  width="200"
                  image={Computer}
                  title="Manage User Accounts"
                />
              </CardActionArea>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Manage User Accounts
                </Link>
              </div>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Row style={{ margin: 4, height: "auto" }}>
          <Col style={{ padding: 4, margin: 0 }}>
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Student"
                  height="200"
                  width="180"
                  image={Student}
                  title="Create a Student"
                />
              </CardActionArea>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Create a Student
                </Link>
              </div>
            </Card>
          </Col>

          <Col style={{ padding: 4, margin: 0 }}>
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Pupil"
                  height="200"
                  width="180"
                  image={SmilingPupil}
                  title="View Student Statistics"
                />
              </CardActionArea>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  View Student Statistics
                </Link>
              </div>
            </Card>
          </Col>

          <Col style={{ padding: 4, margin: 0 }}>
            <Card>
              <CardActionArea className={classes.cardImageStyles}>
                <CardMedia
                  component="img"
                  alt="Computer"
                  height="200"
                  width="180"
                  image={Computer}
                  title="Manage User Accounts"
                />
              </CardActionArea>
              <div className={classes.cardActionStyles}>
                <Link to="/" className={classes.cardLinkStyles}>
                  Manage User Accounts
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default AdminDashboardCardsnActions;
