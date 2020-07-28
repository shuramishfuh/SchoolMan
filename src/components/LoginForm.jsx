import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

const validatePassword = (password) => {
  return (
    RegExp(".*\\d.*").test(password) &&
    RegExp(".*[a-z].*").test(password) &&
    RegExp(".*[A-Z].*").test(password) &&
    RegExp("[$&+,:;=?@#|'<>.^*()%!-]").test(password)
  );
};

const validationSchema = yup.object({
  username: yup.string().required("required"),
  password: yup
    .string()
    .min(6)
    .max(15)
    .test("test-password", "Password does not meet criteria", (value) =>
      validatePassword(value)
    )
    .required("required"),
});

const LoginForm = ({ history }) => {
  const isXSWidth = useMediaQuery("(max-width: 400px)");

  const useStyles = makeStyles((theme) => ({
    errorMessage: {
      color: "red",
    },
    formStyles: {
      width: isXSWidth ? 300 : 400,
    },
    buttonStyles: {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      },
      "&:focus": {
        outline: 0,
        boxShadow: "none!important",
      },
      width: "inherit",
      height: 40,
    },
    buttonTextStyles: {
      fontSize: 14,
      fontWeight: 600,
      textTransform: "none",
      color: theme.palette.text.primary,
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

  const onSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit();
    !!formik.values.username && !!formik.values.password
      ? history.push("/student/dashboard")
      : console.log("errors");
  };

  return (
    <Form onSubmit={onSubmit} className={classes.formStyles}>
      <Form.Group>
        <Form.Label htmlFor="username">
          <Typography>Username</Typography>
        </Form.Label>
        <Form.Control
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          {...formik.getFieldProps("username")}
        />
        {formik.touched.username && formik.errors.username ? (
          <small className={classes.errorMessage}>
            Username is a required field
          </small>
        ) : null}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="password">
          <Typography>Password</Typography>
        </Form.Label>
        <Form.Control
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>
            <small className={classes.errorMessage}>Password is invalid</small>
          </div>
        ) : null}
        <Link
          to="/recover-details"
          style={{
            fontSize: 12,
            color: "rgb(250,188,239)",
          }}
        >
          Forgotten password?
        </Link>
      </Form.Group>

      <Grid item container alignItems="center" justify="center">
        <Button type="submit" className={classes.buttonStyles}>
          <Typography className={classes.buttonTextStyles}>Log in</Typography>
        </Button>
      </Grid>
    </Form>
  );
};

export default LoginForm;
