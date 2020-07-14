import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core";

const Footer = () => {
  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles((theme) => ({
    footerStyles: {
      backgroundColor: theme.palette.grey[500],
      height: isXSWidth ? 320 : 150,
    },
    footerTextStyles: {
      color: "black",
      fontSize: 12,
    },
    footerPadding: {
      paddingLeft: 64,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid
        item
        container
        direction={isXSWidth ? "column" : "row"}
        alignItems="center"
        justify="space-between"
        className={classes.footerStyles}
      >
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="flex-start"
          sm={4}
          className={isXSWidth ? classes.footerPadding : null}
        >
          <div>
            <span style={{ fontSize: 16, color: "black" }}>MyDS</span>
            <address className={classes.footerTextStyles}>
              <br />
              United Kingdom,
              <br />
              Edinburgh,
              <br />
              123 Fountain Bridge EH3 9QG
            </address>
          </div>
        </Grid>
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="flex-start"
          sm={4}
          className={isXSWidth ? classes.footerPadding : null}
        >
          <div>
            <br />
            <Link to="/about" className={classes.footerTextStyles}>
              About Us
            </Link>
            <br />
            <Link to="/privacy" className={classes.footerTextStyles}>
              Privacy and Cookies
            </Link>
            <br />
            <Link to="/terms-of-use" className={classes.footerTextStyles}>
              Terms of Use
            </Link>
          </div>
        </Grid>
        <Grid
          item
          container
          direction={isXSWidth ? "row" : "column"}
          alignItems="center"
          justify="flex-start"
          sm={4}
          className={isXSWidth ? classes.footerPadding : null}
        >
          <div>
            <br />
            <address>
              <span style={{ fontSize: 16, color: "black" }}>Contact Us</span>
              <br />
              <br />
              <a href="tel:+447519688778" style={{ color: "black" }}>
                +44 (0) 7519688778
              </a>
              <br />
              <div>
                <small>
                  <b style={{ color: "black" }}>Created by</b>
                </small>{" "}
                <small>
                  <b style={{ color: "purple" }}>IT Services Group</b>
                </small>
              </div>
            </address>
          </div>
        </Grid>
      </Grid>
      <Grid item style={{ padding: 8 }}>
        <small>
          Unless explicitly stated otherwise, all material is &copy; IT Services
          Group
        </small>
      </Grid>
    </>
  );
};

export default Footer;
