import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userName = useSelector((state) => state.login.name);
  console.log(children)
  console.log("user", userName);

  return isLoggedIn ? <Navigate to="/" /> : children
};

export default PublicRoute;