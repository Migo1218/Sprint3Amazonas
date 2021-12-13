import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userName = useSelector((state) => state.login.name);
  // console.log(children)
  // console.log("user", userName);

  return isLoggedIn ? children : <Navigate to="/login" />
};

export default PrivateRoute;