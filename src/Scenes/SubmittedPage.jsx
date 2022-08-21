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
                <Card header={"Успех!"}>
                    <div>
                        Надеемся, нас вас нe попало ни капли... Ой, вы же без зонта!
                    </div>
                </Card>
            </StyledSubmittedPage>
        )
    }

    return getLoginCard()
}

export default SubmittedPage