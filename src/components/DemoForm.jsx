import React from "react";
import {
  Typography,
  Button,
  Grid,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";

const initialValues = {
  name: "",
  corporateEmail: "",
  cityOrTown: "",
  typeOfInstitute: "",
};

const validationSchema = yup.object({
  name: yup.string().required("required"),
  corporateEmail: yup.string().email().required("required"),
  cityOrTown: yup.string().required("required"),
  typeOfInstitute: yup.string().required("required"),
});

const DemoForm = ({ history }) => {
  const isXSWidth = useMediaQuery("(max-width: 400px)");

  const useStyles = makeStyles((theme) => ({
    buttonStyles: {
      backgroundColor: "rgba(77, 67, 75, 1.0)",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      },
    },
    buttonTextStyles: {
      fontFamily: "Arial Rounded MT Bold",
    },
    errorMessage: {
      color: "red",
    },
    formStyles: {
      width: isXSWidth ? 300 : 400,
    },
    formControlStyles: {
      width: isXSWidth ? 300 : 400,
    },
    menuItemStyles: {
      backgroundColor: theme.palette.secondary.main,
      color: "black",
    },
  }));

  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
    validationSchema,
  });

  const onSubmit = () => {
    formik.handleSubmit();
    history.push("/register");
  };

  console.log("errors", formik.errors);

  return (
    <Form onSubmit={onSubmit} className={classes.formStyles}>
      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <small className={classes.errorMessage}>
            Name is a required field
          </small>
        ) : null}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="corporateEmail">Corporate email</Form.Label>
        <Form.Control
          type="email"
          id="corporateEmail"
          name="corporateEmail"
          placeholder="Email"
          {...formik.getFieldProps("corporateEmail")}
        />
        {formik.touched.corporateEmail && formik.errors.corporateEmail ? (
          <small className={classes.errorMessage}>
            Email is a required field
          </small>
        ) : null}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="cityOrTown">City/Town</Form.Label>
        <Form.Control
          type="text"
          id="cityOrTown"
          name="cityOrTown"
          placeholder="City"
          {...formik.getFieldProps("cityOrTown")}
        />
        {formik.touched.cityOrTown && formik.errors.cityOrTown ? (
          <small className={classes.errorMessage}>
            City is a required field
          </small>
        ) : null}
      </Form.Group>

      <FormControl className={classes.formControlStyles}>
        <InputLabel htmlFor="typeOfInstitute">
          <Typography color="textPrimary" style={{ fontSize: 14 }}>
            Type of Institute
          </Typography>
        </InputLabel>
        <Select
          id="typeOfInstitute"
          name="typeOfInstitute"
          {...formik.getFieldProps("typeOfInstitute")}
        >
          <MenuItem value="" className={classes.menuItemStyles}>
            <em>None</em>
          </MenuItem>
          <MenuItem
            value="Secondary/High School"
            className={classes.menuItemStyles}
          >
            Secondary/High School
          </MenuItem>
          <MenuItem value="University" className={classes.menuItemStyles}>
            University
          </MenuItem>
          <MenuItem value="Academy" className={classes.menuItemStyles}>
            Academy
          </MenuItem>
        </Select>
        {formik.touched.typeOfInstitute && formik.errors.typeOfInstitute ? (
          <small className={classes.errorMessage}>
            Type of Institute is a required field
          </small>
        ) : null}
      </FormControl>

      <br />
      <br />
      <br />

      <Grid item container alignItems="center" justify="center">
        <Button type="submit" className={classes.buttonStyles}>
          <Typography className={classes.buttonTextStyles}>
            Request Demo
          </Typography>
        </Button>
      </Grid>
    </Form>
  );
};

export default DemoForm;
