import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import SingleLineSelector from "./SingleLineSelector";
import TabledSelector from "./TabledSelector";

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

    img {
      max-height: 90vh;
      max-width: 90vw;
    }
    
    .textHolder {
      margin-bottom: 20px;
      width: 100%;
      max-width: 90vw;
    }

    .answerHolder {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`

const Card = (props) => {

    const getOptionsSelector = (options) => {
        if (!options) return null
        if (options.rows) return <TabledSelector options={options}/>
        if (options) return <SingleLineSelector name={props.name} options={options}/>
    };

  return (
    <StyledCard>
      <div className={"cardHeader"}>
        {props.header}
      </div>
      <div className={"cardBody"}>
          <div className={"textHolder"}>
              {props.text}
          </div>
          {props.image && <img src={props.image}/>}
          {getOptionsSelector(props.options)}
          {props.children}
      </div>
    </StyledCard>
  );
}

Card.propTypes = {};
Card.defaultProps = {};

export default Card;