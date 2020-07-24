import React, { useState } from "react";
import { Grid, makeStyles, IconButton } from "@material-ui/core";
import AdminSidePanel from "./AdminSidePanel";
import { MdMenu } from "react-icons/md";

const AdminDashboardMenu = () => {
  const useStyles = makeStyles((theme) => ({
    menuStyles: {
      height: 50,
      backgroundColor: theme.palette.secondary.main,
    },
    buttonStyles: {
      "&:focus": {
        outline: 0,
        boxShadow: "none!important",
      },
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
        <IconButton onClick={handleMenuToggle} className={classes.buttonStyles}>
          <MdMenu style={{ color: "black" }} />
        </IconButton>
      </Grid>
      {open && <AdminSidePanel />}
    </Grid>
  );
};

export default AdminDashboardMenu;
