import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';

import Card from "Components/Card";

const StyledSubmittedPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubmittedPage = (props) => {

    const getLoginCard = () => {
        return (
            <StyledSubmittedPage>
                <Card header={"Колено!"}>
                    <div>
                        Когда-то и нас вела дорога приключений, а потом нам прострелили колено...
                    </div>
                </Card>
            </StyledSubmittedPage>
        )
    }

    return getLoginCard()
}

export default SubmittedPage