import { NavDiv } from "../styles";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
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
  const history = useHistory();
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
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
        <div>
          {user?.role === "admin" ? (
            <Link to="/gyms/new">
              <Button
                variant="outlined"
                color="primary"
                style={{ marginLeft: "5px" }}
              >
                Add Gym
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Toolbar>
      <div>
        {user ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5 style={{ marginRight: "5px" }}>Welcome, {user.username}</h5>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginRight: "5px" }}
              onClick={() => dispatch(signout(history))}
            >
              Logout
            </Button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </AppBar>
  );
};
export default NavBar;
