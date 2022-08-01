import React from "react";
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Login from "Scenes/Login";
import AdminPanel from "Scenes/Poll";
import fetchJsonp from "fetch-jsonp";
import {userIdKeyReceived, userLoggedIn} from "../store/actions/user";

const RootRouter = () => {
  const user = useSelector(state => state.user);
  const location = useLocation();
  const dispatch = useDispatch();

  const renderForNotLoggedInUser = (component) => {
    if (!user.isLoggedIn) {
      return component
    } else {
      return <Navigate to={"/poll"}/>
    }
  }

  const parseURLHashParams = (URLHashString) => {
    const normalizedObject = {};
    const hasArray = URLHashString.replace("#", "").split("&");
    hasArray.forEach(hashPart => {
      const [key, value] = hashPart.split("=");
      normalizedObject[key] = value;
    })
    return normalizedObject
  }

  const renderForLoggedInUser = (component) => {
    if (user.isLoggedIn) {
      return component
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  const getUserStartPage = () => {
    const hashParams = parseURLHashParams(location.hash);
    if (hashParams.user_id) {
      dispatch(userIdKeyReceived(hashParams.user_id));
      return <Navigate to={"/login"}/>
    }
    if (user.isLoggedIn) {
      return <Navigate to={"/poll"}/>
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  return (
    <Routes>
      <Route path={"/poll"} element={renderForLoggedInUser(<AdminPanel/>)}/>
      <Route path={"/login"} element={renderForNotLoggedInUser(<Login/>)}/>
      <Route path={"*"} element={getUserStartPage()}/>
    </Routes>
    )
};

export default RootRouter