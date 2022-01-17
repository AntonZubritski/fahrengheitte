import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../loading";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  emailVerified,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isVerifying && !emailVerified ? (
        <Loading />
      ) : isAuthenticated  ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/home",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
export default ProtectedRoute;
