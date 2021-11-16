import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Login from "../authComponents/login";

function PrivateRoute({  component, path, exact }) {

    const history = useHistory();
    const state = useSelector(state => state.authReducer)
    console.log(state);

    return (
      <Route
        exact = {exact}
      component={state === 1 ? component: ''}

      >{state === 1 ? history.push('/products') :  history.push('/login') }</Route>
    );
  }

export default PrivateRoute;