import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import authActions from "../auth/actions/auth";

function Logout(){

    const dispatch = useDispatch();
    const history  = useHistory();
    const { LogoutSuccess } = authActions;

    localStorage.clear();
    dispatch(LogoutSuccess());

    return null

}



export default Logout;