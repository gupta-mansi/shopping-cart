import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({component:Component, ...rest}) => {
  const state = useSelector(state => state.authReducer.state);
  console.log(state);

  return(
    <Route 
    {...rest}
      render={() => (state === 1) ? <Component /> : <Redirect to='/' />}
    />
  );
}

export default PrivateRoute;