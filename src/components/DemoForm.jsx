import React from "react";
import { Typography, Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useFormik } from "formik";
import { Form, Col } from "react-bootstrap";
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

const DemoForm = () => {
  const useStyles = makeStyles({
    buttonStyles: {
      backgroundColor: "rgba(77, 67, 75, 1.0)",
      "&:hover": {
        backgroundColor: "rgba(77, 67, 75, 0.75)",
      },
    },
    buttonTextStyles: {
      fontFamily: "Arial Rounded MT Bold",
    },
    errorMessage: {
      color: "red",
    },
  });

  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
    validationSchema,
  });

  console.log("errors", formik.errors);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group as={Col}>
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

      <Form.Group as={Col}>
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

      <Form.Group as={Col}>
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

      <Form.Group as={Col}>
        <Form.Label htmlFor="typeOfInstitute">Type of Institute</Form.Label>
        <Form.Control
          type="text"
          id="typeOfInstitute"
          name="typeOfInstitute"
          placeholder="Type of Institute"
          {...formik.getFieldProps("typeOfInstitute")}
        />
        {formik.touched.typeOfInstitute && formik.errors.typeOfInstitute ? (
          <small className={classes.errorMessage}>
            Type of Institute is a required field
          </small>
        ) : null}
      </Form.Group>

      <Button type="submit" className={classes.buttonStyles}>
        <Typography className={classes.buttonTextStyles}>
          Request Demo
        </Typography>
      </Button>
    </Form>
  );
};

export default DemoForm;
