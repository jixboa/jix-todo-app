import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/actions/authAction";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navbar/NavBar";
import { makeStyles } from "@material-ui/styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />

        <Container maxWidth="md">
          <NavBar />
          <Container className={classes.contentStyle} maxWidth="sm">
            <Routes>
              {/* <Route path='/home' element={<Homescreen/>} /> */}

              <Route path="/signin" exact element={<SignIn />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/" exact element={<Todos />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
