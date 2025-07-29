import React from "react";
import { Navigate } from "react-router-dom";

// PUBLIC_INTERFACE
function PrivateRoute({ children }) {
  const authed = !!localStorage.getItem("jwt_token");
  return authed ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
