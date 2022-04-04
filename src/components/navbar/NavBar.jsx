import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authAction";

import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  makeStyles,
} from "@material-ui/core";
// import ReactDOM from "react-dom";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
});

const NavBar = () => {
  const classes = useStyle();
  const auth = useSelector((state) => state.auth);

  // console.log(state)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleSignOut = () => {
    //signOut the user
    dispatch(signOut());
    console.log("signed Out");
    navigate("/signin");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyle} to="/">
              Todo App
            </Link>
          </Typography>
          {auth._id ? (
            <>
              <Typography variant="subtitle2" className={classes.root}>
                logged in as: {auth.name}
              </Typography>
              <Button
                variant="text"
                color="inherit"
                onClick={() => HandleSignOut()}>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button variant="text" color="inherit">
                <Link className={classes.linkStyle} to="/signin">
                  SignIn
                </Link>
              </Button>
              <Button variant="text" color="inherit">
                <Link className={classes.linkStyle} to="/signup">
                  SignUp
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* <Button variant="contained">Hello World</Button> */}
    </>
  );
};

export default NavBar;
