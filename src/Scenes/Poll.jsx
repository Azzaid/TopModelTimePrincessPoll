import React, {useRef} from "react";
import styled from 'styled-components';

import {useDispatch, useSelector} from "react-redux";
import {userFormSubmitted} from "store/actions/user";

import Card from "../Components/Card";

import blackShit from "assets/images/BlackShit.png"
import GentleRain from "assets/images/GentleRain.png"
import WoodenFairy from "assets/images/WoodenFairy.png"
import CyberWinner from "assets/images/CyberWinner.png"
import {latestFormNumber} from "../constants";

const StyledAdminPanelHolder = styled.div`
  max-width: 1200px;
  min-height: 100%;

  img {
    max-height: 90vh;
    max-width: 90vw;
  }

  .buttonHolder {
    height: 70px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  button {
    width: 150px;
    height: 50px;
    cursor: pointer;
    background: #d26cba;
    border: none;
    border-radius: 10px;
    font-family: 'Damion', cursive;
    color: white;
    font-size: 20px;
    transition: 500ms;
    border: 2px solid rgba(210, 108, 186, 0.57);
    animation: hueRotation 2s alternate infinite;

    &:hover {
      box-shadow: 0px 10px 25px #57aba7, 0px -10px 25px #a6fffa, inset 0px -5px 10px #57aba7, inset 0px 5px 10px #a6fffa;
    }
  }

  @keyframes hueRotation {
    0%   {filter: hue-rotate(30deg);}
    50%  {filter: hue-rotate(0deg);}
    100% {filter: hue-rotate(-30deg);}
  }
`

const Poll = (props) => {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const isMe = navigator.userAgent.indexOf(" Mi ") != -1;
    const backgroundColor = document.body.style.backgroundColor;

    const options = [
        {
            header:"Оцените работу модели от 1 до 5",
            name:"entry.1432100395",
            image:blackShit,
            options:[{name:"1", value:"1"}, {name:"2", value:"2"}, {name:"3", value:"3"}, {name:"4", value:"4"}, {name:"5", value:"5"}]
        },
        {
            header:"Оцените работу модели от 1 до 5",
            name:"entry.1777868231",
            image: GentleRain,
            options:[{name:"1", value:"1"}, {name:"2", value:"2"}, {name:"3", value:"3"}, {name:"4", value:"4"}, {name:"5", value:"5"}]
        },
        {
            header:"Оцените работу модели от 1 до 5",
            name:"entry.882651453",
            image: WoodenFairy,
            options:[{name:"1", value:"1"}, {name:"2", value:"2"}, {name:"3", value:"3"}, {name:"4", value:"4"}, {name:"5", value:"5"}]
        },
        {
            header:"Оцените работу модели от 1 до 5",
            name:"entry.2070195507",
            image:CyberWinner,
            options:[{name:"1", value:"1"}, {name:"2", value:"2"}, {name:"3", value:"3"}, {name:"4", value:"4"}, {name:"5", value:"5"}]
        },
    ]

    function shuffleArray(array) {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temp;
        }

        return shuffledArray
    }

    const getCards = (pollOptions) => {
        return shuffleArray(pollOptions).map((option, index) => (
            <Card key={index} {...option}/>
        ))
    }

  return (
    <StyledAdminPanelHolder>
      <div>
          <form onSubmit={(event) => {
              event.preventDefault();
              /*const formData = new FormData(event.target);
              const addressToSubmit = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeOXJZ61GJ13OaDhdkBmhnOPtCXP3DkL2YEdSTCa7sLDBRoDQ/formResponse"


              /!*const anotherSubmitAddress = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc7E7AZs24OQ5EjzHXeHdfHHGZalqYetDpZ8NiDN1oqUcLbxQ/formResponse"

              const customObj = {"entry.1562589015": 234,
              "entry.848703632": 1234,
              "entry.1787163590": "Kaneshna Dasha!"}

              const customFormData = new FormData();

              Object.keys((customObj)).forEach(key => {
                  customFormData.append(key, customObj[key]);
              })*!/

              formData.append("entry.1900145084", user.userId);
              formData.append("entry.1708245170", user.userName);

              fetch(addressToSubmit, {
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                  mode: 'no-cors', // no-cors, *cors, same-origin
                  redirect: 'follow', // manual, *follow, error
                  body: formData // body data type must match "Content-Type" header
              }).then(() => {
                  console.log("submit then")
                  dispatch(userFormSubmitted(latestFormNumber));
              }).catch(() => {
                  console.log("submit catch")
                  dispatch(userFormSubmitted(latestFormNumber));
              })*/
          }}>
              {isMe &&
                  <Card header={"For crappy Mi browser"}>
                      Hello. Sun is shining. Temperature under the dome is about 20C. And background color is inverted to be {backgroundColor}
                      Expected to be about #0a1120
                  </Card>
              }
              <Card header="ТМТПЗ-10">
                  Привет, Принцесса!
                  <br/>
                  Рады видеть тебя здесь и надеемся, что ты по достоинству оценишь старания наших моделей)
              </Card>
              {getCards(options)}
              <div className={"buttonHolder"}>
                  <button className={"button"}>Submit</button>
              </div>
          </form>
      </div>
    </StyledAdminPanelHolder>
  )
}

export default Poll