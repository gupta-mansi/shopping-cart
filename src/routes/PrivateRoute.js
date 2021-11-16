import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {

    const state = useSelector(state => state.authReducer)
    console.log(state);


  
    return (
      <Route
        {...rest}
        render={() =>
          state ? (
            children
          ) : ( 
            <Redirect
              to={{
                pathname: '/'
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;