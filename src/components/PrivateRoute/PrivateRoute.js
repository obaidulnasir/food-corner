import { Redirect, Route } from "react-router";
import useFirebase from "../hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
//   const { user, isLoading } = useAuth();
  const {user }= useFirebase();
  // if(isLoading){
  //   return  <Spinner animation="border" variant="success" />
  // }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};


export default PrivateRoute;