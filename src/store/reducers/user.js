import {userLoggedOut, userLoggedIn, userIdKeyReceived, userFormSubmitted} from "../actions/user";
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  visitedUser:  {},
  currentUser: {
    userName:'',
    userRoles:[],
    isLoggedIn:false,
  }
}

const userReducer = createReducer (initialState, (builder => {
  builder
      .addCase(userIdKeyReceived, (state, action) => {
        state.userId = action.payload.user_id;
        state.access_token = action.payload.access_token;
      })
  .addCase(userLoggedIn, (state, action) => {
    state.userName = `${action.payload.first_name} ${action.payload.last_name}`;
    state.userId = action.payload.id;
    state.userRoles = action.payload.userRoles;
    state.isLoggedIn = true;
  })
  .addCase(userLoggedOut, (state, action) => {
    state.userName = "";
    state.userId = "";
    state.userRoles = [];
    state.isLoggedIn = false;
  })
      .addCase(userFormSubmitted, (state, action) => {
        state.formSubmitted = action.payload;
      })
}));

export default userReducer

