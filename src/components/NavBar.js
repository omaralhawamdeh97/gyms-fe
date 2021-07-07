import { NavDiv } from "../styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  navBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navBar} position="sticky" color="inherit">
      <Toolbar>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Typography variant="h6" className={classes.title}>
            Health Center
          </Typography>
        </Link>
      </Toolbar>
      <div>
        <Link to="/signin">
          <Button
            variant="outlined"
            color="primary"
            style={{ marginRight: "5px" }}
          >
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="outlined" color="primary">
            Sign Up
          </Button>
        </Link>
      </div>
    </AppBar>
  );
};
export default NavBar;
