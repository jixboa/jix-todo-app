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
  appbarStyle: {
    color: "#15710c",
  },

  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
  a: {
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
      <AppBar position="static" className={classes.appbarStyle}>
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyle} to="/">
              GAP Ghana Card Upload
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Button variant="contained">Hello World</Button> */}
    </>
  );
};

export default NavBar;
