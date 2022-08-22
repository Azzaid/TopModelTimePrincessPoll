import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const StyledSingleLineSelector = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const SingleLineSelector = (props) => {
    return (
        <StyledSingleLineSelector>
            {props.options.map((option, index) => (
                <div>
                    <input type="radio" id={`${props.name}_${index}`} name={props.name} value={option.value}/>
                    <label htmlFor={`${props.name}_${index}`}>{option.name}</label>
                </div>
            ))}
        </StyledSingleLineSelector>
    );
}

export default SingleLineSelector;