import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const StyledCard = styled.div`
  background-color: ${props => props.theme.infoCardBackgroundColor};
  margin: 20px 0px;
  border-radius: 5px;

  .cardHeader {
    width: 100%;
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
    flex-direction: column;
    font-size: 20px;

    .answerHolder {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`

const Card = (props) => {
  return (
    <StyledCard>
      <div className={"cardHeader"}>
        {props.header}
      </div>
      <div className={"cardBody"}>
          {props.children}
          {props.image && <img src={props.image}/>}
          {props.options &&
              <div className={"answerHolder"}>
                  {props.options.map((option, index) => (
                      <div>
                          <input type="radio" id={`${props.name}_${index}`} name={props.name} value={option.value}/>
                          <label htmlFor={`${props.name}_${index}`}>{option.name}</label>
                      </div>
                  ))}
              </div>
          }
      </div>
    </StyledCard>
  );
}

Card.propTypes = {};
Card.defaultProps = {};

export default Card;