import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { toast } from "react-toastify";

import { signIn } from "../../store/actions/authAction";

import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignIn = () => {
  const classes = useStyle();
  const auth = useSelector(state => state.auth)
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));

    
    setCreds({
        email: "",
        password: "",
    });
};

if (auth._id) return <Navigate to="/" />;
  return (
    <>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>
        <Typography variant="h5">Sign In</Typography>
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="Enter email"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          label="Enter password"
          variant="outlined"
          type="password"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          className={classes.spacing}
          variant="contained"
          color="primary"
          type="submit">
          Sign In
        </Button>
      </form>
    </>
  );
};

export default SignIn;
