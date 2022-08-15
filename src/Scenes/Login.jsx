import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';
import fetchJsonp from "fetch-jsonp"

import serverAPI from "api/instance";

import {useDispatch, useSelector} from "react-redux";
import {userLoggedIn} from "store/actions/user";
import {useLocation, useParams, useSearchParams} from "react-router-dom";

const StyledLoginHolder = styled.div`
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

  .button-65 {
    appearance: none;
    backface-visibility: hidden;
    background-color: #2f80ed;
    border-radius: 10px;
    border-style: none;
    box-shadow: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
    font-size: 15px;
    font-weight: 500;
    height: 50px;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    padding: 14px 30px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  .button-65:hover {
    background-color: #1366d6;
    box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
    opacity: 1;
    transform: translateY(0);
    transition-duration: .35s;
  }

  .button-65:hover:after {
    opacity: .5;
  }

  .button-65:active {
    box-shadow: rgba(0, 0, 0, .1) 0 3px 6px 0, rgba(0, 0, 0, .1) 0 0 10px 0, rgba(0, 0, 0, .1) 0 1px 4px -1px;
    transform: translateY(2px);
    transition-duration: .35s;
  }

  .button-65:active:after {
    opacity: 1;
  }

  @media (min-width: 768px) {
    .button-65 {
      padding: 14px 22px;
      width: 176px;
    }
  }
`

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("olivier@mail.com");
  const [password, setPassword] = useState("bestPassw0rd");
  const dispatch = useDispatch();
  const [error, setError] = useState("")
  const [searchParams ,setSearchParams] = useSearchParams();
  const user = useSelector(store => store.user);

  useEffect(() => {
    if (user.userId) {
      fetchJsonp(`https://api.vk.com/method/users.get?user_ids=${user.userId}&access_token=${user.access_token}&v=5.131`)
          .then(function(response) {
            return response.json()
          }).then(function(json) {
        console.log('parsed json', json);
        const expectedResponce = {
          "response": [{
            "id": 698016538,
            "first_name": "Lila",
            "last_name": "Norn",
            "can_access_closed": true,
            "is_closed": false
          }]
        }
        dispatch(userLoggedIn(json.response[0]))
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
    }
  }, [user])

  const toggleCardMode = () => {
    setIsLogin(!isLogin);
  }

  const getLoginCard = () => {
    return (
      <StyledLoginHolder>
        <div className={"loginCard"}>
          <div className={'cardHeader'}>
            Login
          </div>
          <div className={"cardBody"}>
            <a className={"button-65"}
               href={`https://oauth.vk.com/authorize?client_id=8228696&display=popup&redirect_uri=https://azzaid.github.io/unanonimousPoll&scope=account&response_type=token&v=5.131`}>
              Login with VK
            </a>
          </div>
          <div className={'cardFooter'}>
          </div>
        </div>
      </StyledLoginHolder>
    )
  }

  return getLoginCard()
}

export default Login