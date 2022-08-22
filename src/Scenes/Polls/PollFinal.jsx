import React, {useRef} from "react";
import styled from 'styled-components';

import {useDispatch, useSelector} from "react-redux";
import {userFormSubmitted} from "store/actions/user";

import Card from "Components/Card";

import blackShit from "assets/images/BlackShit.png"
import SluttyMage from "assets/images//Final/SluttyMage.png"
import IlidansToy from "assets/images//Final/IlidansToy.png"

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

const PollFinal = (props) => {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const options = [
        {
            header:"Оцените работу модели от 1 до 5",
            image:SluttyMage,
            text: "Бездонный колодец – древний магический артефакт нашего королевства, наполненный " +
                "невиданными чудищами и поглощающий всю пресную воду. Много поколений могущественных " +
                "магов пытались уничтожить его. Но все безуспешно.Будучи сиротой, в детстве, я устремилась " +
                "на зов манящего голоса и упала в горное ущелье. Там я стала ученицей величайшего тёмного мага. " +
                "Он помог мне обнаружить уникальную способность. Оказывается, я единственный за много веков маг, " +
                "способный подчинить себе силу воды. Вместе с моим учителем, совершенствуясь и увеличивая год за " +
                "годом свою силу, мы смогли разгадать тайну Колодца и навсегда уничтожить его. На этом месте теперь " +
                "находится бескрайнее озеро, дарующее целебную воду моему народу.",
            options:{
                rows:[
                    {fieldName:"entry.1432100395", name:"Общее впечатление"},
                    {fieldName:"entry.1432100395", name:"Образ 1"},
                    {fieldName:"entry.1432100395", name:"Образ 2"},
                    {fieldName:"entry.1432100395", name:"Образ 3"},
                ],
                options:[
                    {name:"1", value:"1"},
                    {name:"2", value:"2"},
                    {name:"3", value:"3"},
                    {name:"4", value:"4"},
                    {name:"5", value:"5"}
                ]
            }
        },
        {
            header:"Оцените работу модели от 1 до 5",
            image:IlidansToy,
            text: "Она была совсем юной эльфийкой, когда впервые столкнулась с Яростью Бури. Иллидан появился в их "
                + "деревне внезапно, как ураган, набирая рекрутов. Его внешний вид, его страсть к уничтожению демонов пугали "
                + "и завораживали одновременно. Её мало интересовали демоны, она пошла в охотники ради любви."
                + "Со временем всё поменялось. Её тело изменилось, напитавшись демонической скверной. Любимый давно погиб. "
                + "Теперь уже маленькая эльфийка ведома яростью, одурманена страстью к убийствам."
                + "Демоны снаружи. Демоны внутри. Она сама уже, наверно, больше демон, чем эльф. У неё уже давно нет имени."
                + "Она просто охотница на демонов, обречённая на вечное одиночество.",
            options:{
                rows:[
                    {fieldName:"entry.1432100395", name:"Общее впечатление"},
                    {fieldName:"entry.1432100395", name:"Образ 1"},
                    {fieldName:"entry.1432100395", name:"Образ 2"},
                    {fieldName:"entry.1432100395", name:"Образ 3"},
                ],
                options:[
                    {name:"1", value:"1"},
                    {name:"2", value:"2"},
                    {name:"3", value:"3"},
                    {name:"4", value:"4"},
                    {name:"5", value:"5"}
                ]
            }
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
              <Card header="ТМТП3-11" text={"Добро пожаловать в финал, милые леди. Наслаждайтесь!"}/>
              {getCards(options)}
              <div className={"buttonHolder"}>
                  <button className={"button"}>Послать</button>
              </div>
          </form>
      </div>
    </StyledAdminPanelHolder>
  )
}

export default PollFinal