import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';
import fetchJsonp from "fetch-jsonp"

import serverAPI from "api/instance";

import {useDispatch, useSelector} from "react-redux";
import {userLoggedIn} from "store/actions/user";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import Card from "Components/Card";

const StyledLoginHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
        {(navigator.userAgent.includes("MiuiB")) &&
            <Card header={'For Xiaomi browser'}>
              Mi browser black theme feature is highly experimental. Please turn it off to enjoy our app at full.
            </Card>
        }
        {(navigator.userAgent.includes("Safari")) &&
            <Card header={'For Safari browser'}>
              Iphone "hide my IP" feature is incompatible with VK user data protection algorithms. Please turn it off or use vpn to login.
            </Card>
        }
        <Card header={"Login"}>
          <a className={"button-65"}
             href={`https://oauth.vk.com/authorize?client_id=8228696&display=popup&redirect_uri=https://azzaid.github.io/TopModelTimePrincessPoll&scope=account&response_type=token&v=5.131`}>
            Login with VK
          </a>
        </Card>
      </StyledLoginHolder>
    )
  }

  return getLoginCard()
}

export default Login