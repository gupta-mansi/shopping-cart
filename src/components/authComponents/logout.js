import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import authActions from "../../redux/auth/actions/auth";

function Logout(){

    const dispatch = useDispatch();
    const history  = useHistory();
    const { LogoutSuccess } = authActions;

    localStorage.clear();
    dispatch(LogoutSuccess());
    history.push('/signup');

    return null

}



export default Logout;