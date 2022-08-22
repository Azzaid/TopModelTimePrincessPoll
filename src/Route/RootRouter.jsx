import React, {useEffect} from "react";
import {Routes, Route, Navigate, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Login from "Scenes/Login";
import PollSemifinalle from "Scenes/Polls/PollSemifinalle";
import fetchJsonp from "fetch-jsonp";
import {userIdKeyReceived, userLoggedIn} from "store/actions/user";
import SubmittedPage from "Scenes/SubmittedPage";
import {latestFormNumber} from "constants";
import PollFinal from "Scenes/Polls/PollFinal";

const RootRouter = () => {
  const user = useSelector(state => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderForNotLoggedInUser = (component) => {
    //console.log("render for not logged in", user)
    if (!user.isLoggedIn) {
      //console.log("passed")
      return component
    } else {
      //console.log("redirect to login")
      return <Navigate to={"/poll"}/>
    }
  }

  const renderForLoggedInUser = (component) => {
    //console.log("render for logged in", user)
    if (user.isLoggedIn && (!user.formSubmitted || user.formSubmitted < latestFormNumber)) {
      //console.log("passed")
      return component
    } else if (user.formSubmitted && user.formSubmitted >= latestFormNumber) {
      //console.log("redirect to submitted")
      return <Navigate to={"/submitted"}/>
    } else {
      //console.log("redirect to login")
      return <Navigate to={"/login"}/>
    }
  }

  const renderForSubmittedUser = (component) => {
    //console.log("render for submitted", user)
    if (user.isLoggedIn && user.formSubmitted >= latestFormNumber) {
      return component
    } else if (user.isLoggedIn && user.formSubmitted < latestFormNumber) {
      //console.log("redirect to form")
      return <Navigate to={"/poll"}/>
    } else {
      //console.log("redirect to login")
      return <Navigate to={"/login"}/>
    }
  }

  useEffect(() => {
    const parseURLHashParams = (URLHashString) => {
      const normalizedObject = {};
      const hasArray = URLHashString.replace("#", "").split("&");
      hasArray.forEach(hashPart => {
        const [key, value] = hashPart.split("=");
        normalizedObject[key] = value;
      })
      return normalizedObject
    }

    const hashParams = parseURLHashParams(window.location.href.slice(window.location.href.lastIndexOf('#')));
    //console.log('some hash params', window.location.href, hashParams);
    if (hashParams.user_id) {
      dispatch(userIdKeyReceived(hashParams));
      navigate("/login");
    }

    //if (user.formSubmitted) navigate("/submitted");
  }, [location])

  const getUserStartPage = () => {
    if (user.isLoggedIn) {
      return <Navigate to={"/poll"}/>
    } else {
      return <Navigate to={"/login"}/>
    }
  }

  return (
    <Routes>
      <Route path={"/poll"} element={renderForLoggedInUser(<PollFinal/>)}/>
      <Route path={"/login"} element={renderForNotLoggedInUser(<Login/>)}/>
      <Route path={"/submitted"} element={renderForSubmittedUser(<SubmittedPage/>)}/>
      <Route path="*" element={getUserStartPage()}/>
    </Routes>
    )
};

export default RootRouter