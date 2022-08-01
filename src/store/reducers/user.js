import {userLoggedOut, userLoggedIn} from "../actions/user";
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
}));

export default userReducer

