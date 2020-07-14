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
  email: "",
  city: "",
  institute: "",
};

const validationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().email().required("required"),
  city: yup.string().required("required"),
  institute: yup.string().required("required"),
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
      color: theme.palette.common.black,
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
    !!formik.values.name &&
    !!formik.values.email &&
    !!formik.values.city &&
    !!formik.values.institute
      ? history.push("/")
      : console.log("errors");
  };

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
        <Form.Label htmlFor="email">Corporate Email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <small className={classes.errorMessage}>Email is invalid</small>
        ) : null}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="city">City</Form.Label>
        <Form.Control
          type="text"
          id="city"
          name="city"
          placeholder="City"
          {...formik.getFieldProps("city")}
        />
        {formik.touched.city && formik.errors.city ? (
          <small className={classes.errorMessage}>
            City is a required field
          </small>
        ) : null}
      </Form.Group>

      <FormControl className={classes.formControlStyles}>
        <InputLabel htmlFor="institute">
          <Typography color="textPrimary" style={{ fontSize: 14 }}>
            Type of Institute
          </Typography>
        </InputLabel>
        <Select
          id="institute"
          name="institute"
          {...formik.getFieldProps("institute")}
        >
          <MenuItem value="" className={classes.menuItemStyles}>
            <em>None</em>
          </MenuItem>
          <MenuItem value="Secondary School" className={classes.menuItemStyles}>
            Secondary School
          </MenuItem>
          <MenuItem value="University" className={classes.menuItemStyles}>
            University
          </MenuItem>
          <MenuItem value="Academy" className={classes.menuItemStyles}>
            Academy
          </MenuItem>
        </Select>
        {formik.touched.institute && formik.errors.institute ? (
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
