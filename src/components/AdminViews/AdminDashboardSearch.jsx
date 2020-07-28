import React, { useRef, useState } from "react";
import {
  Grid,
  makeStyles,
  useMediaQuery,
  Typography,
  Button,
} from "@material-ui/core";
import data from "./mockData";
import { Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const AdminDashboardSearch = () => {
  const isVeryXSWidth = useMediaQuery("(max-width: 450px)");

  const useStyles = makeStyles((theme) => ({
    titleStyles: {
      fontWeight: "bold",
      fontFamily: "-apple-system, system-ui",
      fontSize: 24,
      color: theme.palette.common.black,
      paddingTop: 8,
      paddingBottom: 8,
    },
    buttonStyles: {
      fontSize: 12,
      textTransform: "capitalize",
      width: 80,
      "&:hover": {
        backgroundColor: theme.palette.grey[900],
      },
      "&:focus": {
        outline: 0,
        boxShadow: "none!important",
      },
    },
    buttonOnStyles: {
      backgroundColor: theme.palette.common.black,
    },
    buttonOffStyles: {
      backgroundColor: theme.palette.darkViolet.main,
    },
    resultItemStyles: {
      width: isVeryXSWidth ? 300 : 400,
      height: 40,
      backgroundColor: theme.palette.darkViolet.main,
    },
  }));

  const classes = useStyles();

  const searchValue = useRef("");
  const [feedback, setFeedback] = useState("");
  const [resultsAvailable, setResultsAvailable] = useState(false);
  const [buttonState, setButtonState] = useState({
    students: true,
    staff: false,
    employees: false,
  });

  const handleButtonClick = (key) => {
    let filteredButtons = Object.keys(buttonState).filter(
      (value) => value !== key
    );
    let intermediateState = {};
    filteredButtons.forEach((button) => {
      intermediateState[button] = false;
    });
    let updatedState = { ...intermediateState, [key]: true };
    setButtonState(updatedState);
  };

  const handleChange = () => {
    const letters = /^[A-Za-z]+$/;
    const value = searchValue.current.value;
    if (value.match(letters) && value.length >= 3) {
      setFeedback("");
      setResultsAvailable(true);
    } else if (0 < value.length && value.length < 3) {
      setFeedback("Please enter at least 3 characters");
      setResultsAvailable(false);
    } else if (value.length === 0) {
      setFeedback("");
      setResultsAvailable(false);
    } else {
      setFeedback("No results found");
      setResultsAvailable(false);
    }
  };

  const getSearchResults = () => {
    const input = searchValue.current.value;
    const filteredItems = data.filter((item) => item.includes(input));
    console.log(filteredItems);
    return (
      <>
        {filteredItems.map((item, index) => {
          return (
            <Grid
              key={index}
              item
              container
              alignItems="center"
              className={classes.resultItemStyles}
            >
              {item}
            </Grid>
          );
        })}
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container direction="column">
      <Grid item container alignItems="center">
        <Typography className={classes.titleStyles}>Search</Typography>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item container alignItems="center" justify="space-between" sm={6}>
          <Grid item>
            <Button
              onClick={() => handleButtonClick("students")}
              className={`${classes.buttonStyles} ${
                buttonState.students
                  ? classes.buttonOnStyles
                  : classes.buttonOffStyles
              }`}
            >
              Students
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => handleButtonClick("staff")}
              className={`${classes.buttonStyles} ${
                buttonState.staff
                  ? classes.buttonOnStyles
                  : classes.buttonOffStyles
              }`}
            >
              Staff
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => handleButtonClick("employees")}
              className={`${classes.buttonStyles} ${
                buttonState.employees
                  ? classes.buttonOnStyles
                  : classes.buttonOffStyles
              }`}
            >
              Employees
            </Button>
          </Grid>
        </Grid>
        <Grid item container sm={6}></Grid>
      </Grid>
      <Grid item container alignItems="center" style={{ height: 60 }}>
        <Form onSubmit={handleSubmit}>
          <InputGroup
            style={{
              width: isVeryXSWidth ? 300 : 400,
            }}
          >
            <InputGroup.Prepend>
              <InputGroup.Text
                style={{
                  borderTopLeftRadius: 32,
                  borderBottomLeftRadius: 32,
                }}
              >
                <BsSearch />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              ref={searchValue}
              type="search"
              placeholder="Please enter at least 3 characters"
              id="searchInput"
              name="searchInput"
              onChange={handleChange}
              style={{
                borderTopRightRadius: 32,
                borderBottomRightRadius: 32,
              }}
            />
          </InputGroup>
        </Form>
      </Grid>
      <Grid item container>
        <small>{feedback}</small>
      </Grid>
      <Grid item container direction="column" style={{ padding: 8 }}>
        {resultsAvailable && getSearchResults(searchValue.current.value)}
      </Grid>
    </Grid>
  );
};

export default AdminDashboardSearch;
