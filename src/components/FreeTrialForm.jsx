import React from "react";
import * as yup from "yup";
import valid from "card-validator";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import { Form, Col } from "react-bootstrap";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  cardNumber: "",
  expiryDate: "",
  code: "",
  email: "",
  checkBox: false,
};

const validationSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email().required("required"),
  cardNumber: yup
    .string()
    .test(
      "test-card-number",
      "Card Number is invalid",
      (value) => valid?.number(value).isValid
    )
    .required(),
  expiryDate: yup
    .string()
    .test(
      "test-expiry-date",
      "Expiry Date is invalid",
      (value) => valid?.expirationDate(value).isValid
    )
    .required(),
  code: yup
    .string()
    .test("test-cvv", "Cvv is invalid", (value) => valid?.cvv(value).isValid)
    .required(),
  checkBox: yup.boolean(),
});

const FreeTrialForm = ({ history }) => {
  const isXSWidth = useMediaQuery("(max-width: 400px)");

  const useStyles = makeStyles({
    errorMessage: {
      color: "red",
    },
    formStyles: {
      width: isXSWidth ? 300 : 400,
    },
    buttonStyles: {
      backgroundColor: "rgba(77, 67, 75, 1.0)",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      },
      "&:focus": {
        outline: 0,
        boxShadow: "none!important",
      },
    },
    buttonTextStyles: {
      fontFamily: "Arial Rounded MT Bold",
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

  const handleCheckChange = () => {
    formik.values.checkBox = !formik.values.checkBox;
    console.log("formik ", formik);
  };

  const onSubmit = () => {
    formik.handleSubmit();
    !!formik.values.name &&
    !!formik.values.cardNumber &&
    !!formik.values.code &&
    !!formik.values.email &&
    !!formik.values.expiryDate
      ? history.push("/register")
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
        <Form.Label htmlFor="card-number">Card Number</Form.Label>
        <Form.Control
          type="text"
          id="card-number"
          name="card-number"
          placeholder="Card Number"
          {...formik.getFieldProps("cardNumber")}
        />
        {formik.touched.cardNumber && formik.errors.cardNumber ? (
          <small className={classes.errorMessage}>Card Number is invalid</small>
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
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="expiryDate">Expiry Date</Form.Label>
            <Form.Control
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="mm/yy"
              {...formik.getFieldProps("expiryDate")}
            />
            {formik.touched.expiryDate && formik.errors.expiryDate ? (
              <small className={classes.errorMessage}>
                Expiry Date is invalid
              </small>
            ) : null}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label htmlFor="code">Security Code</Form.Label>
            <Form.Control
              type="text"
              id="code"
              name="code"
              placeholder="cvv"
              {...formik.getFieldProps("code")}
            />
            {formik.touched.code && formik.errors.code ? (
              <small className={classes.errorMessage}>Cvv is invalid</small>
            ) : null}
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Group>
        <Form.Check
          onChange={handleCheckChange}
          label="Store my payment information for use at MyDS School Portal"
        />
      </Form.Group>

      <small>
        By clicking 'Agree & Subscribe', you are agreeing to start your
        subscription immediately, and you can withdraw the contract and receive
        a refund in the first 30 days. We will be charging the standard monthly
        fee from your stored payment method on a recurring basis.
      </small>

      <br />
      <br />
      <br />

      <Grid item container alignItems="center" justify="center">
        <Button type="submit" className={classes.buttonStyles}>
          <Typography className={classes.buttonTextStyles}>
            Agree & Subscribe
          </Typography>
        </Button>
      </Grid>
    </Form>
  );
};

export default FreeTrialForm;
