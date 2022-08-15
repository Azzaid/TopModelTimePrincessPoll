import {createAction} from "@reduxjs/toolkit";
import {USER_ACTIONS} from "../actionTypes";

export const userIdKeyReceived = createAction(USER_ACTIONS.idReceived)

export const userLoggedIn = createAction(USER_ACTIONS.logIn);

export const userLoggedOut = createAction(USER_ACTIONS.logOut);

export const userFormSubmitted = createAction(USER_ACTIONS.formSubmitted)