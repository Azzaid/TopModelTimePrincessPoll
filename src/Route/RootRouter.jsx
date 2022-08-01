import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

import Login from "Scenes/Login";
import AdminPanel from "Scenes/Poll";

const RootRouter = () => {
  const user = useSelector(state => state.user);

  const renderForNotLoggedInUser = (component) => {
    if (!user.isLoggedIn) {
      return component
    } else {
      return <Navigate to={"/poll"}/>
    }
  }

  const renderForLoggedInUser = (component) => {
    if (user.isLoggedIn) {
      return component
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  const getUserStartPage = () => {
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
      <Route path={"/"} element={getUserStartPage()}/>
    </Routes>
    )
};

export default RootRouter