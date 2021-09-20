import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { LoggedUser } from "./../../App";


const ProtectedRoute = ({ children, ...rest }) => {
  const [lgdUserInfo] = useContext(LoggedUser);
  // let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        lgdUserInfo.isLoggedIn === false || true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute
