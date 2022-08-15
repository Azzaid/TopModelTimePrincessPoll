import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';
import fetchJsonp from "fetch-jsonp"

import serverAPI from "api/instance";

import {useDispatch, useSelector} from "react-redux";
import {userLoggedIn} from "store/actions/user";
import {useLocation, useParams, useSearchParams} from "react-router-dom";

const StyledSubmittedPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .loginCard{
    width: 400px;
    height: 300px;
    background-color: ${props => props.theme.infoCardBackgroundColor};
    margin: 20px;
    border-radius: 5px;

    .cardHeader {
      width: 100%;
      height: 50px;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: ${props => props.theme.accentBackgroundColor};
      font-size: 25px;
      line-height: 30px;
      color: ${props => props.theme.accentTextColor};
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .cardBody {
      padding: 10px 20px;
      box-sizing: border-box;
      color: ${props => props.theme.appBaseFontColor};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const SubmittedPage = (props) => {

    const getLoginCard = () => {
        return (
            <StyledSubmittedPage>
                <div className={"loginCard"}>
                    <div className={'cardHeader'}>
                        Success!
                    </div>
                    <div className={"cardBody"}>
                        You answer submitted. Please get lost and newer come back.
                    </div>
                    <div className={'cardFooter'}>
                    </div>
                </div>
            </StyledSubmittedPage>
        )
    }

    return getLoginCard()
}

export default SubmittedPage