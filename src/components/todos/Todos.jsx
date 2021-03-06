import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const Todos = () => {
  const auth = useSelector((state) => state.auth);
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
    author: auth.name,
    uid: auth._id,
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (!auth._id) return <Navigate to="/signin" />;

  return (
    <>
      {loading ? (
        <PropagateLoader color={"#31CFB1"} loading={loading} size={15} />
      ) : (
        <>
          <AddTodo todo={todo} setTodo={setTodo} />
          <ListTodos setTodo={setTodo} />
        </>
      )}
    </>
  );
};

export default Todos;
