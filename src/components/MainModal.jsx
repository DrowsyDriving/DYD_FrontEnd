import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Map from "../components/Map";

export default function MainModal ({setIsOpen}) {


  const closeModal = () => {
    setIsOpen(false);
  };
  
  return(
    <>
      <Container>
        <Sorting>
          <WarningTitle>1차 경고</WarningTitle>
          <NumberPlate>82모 5603</NumberPlate>
          <Map />
        </Sorting>
        <button onClick={closeModal}>닫기</button>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: absolute;
  background-color: white;
  width: 745px;
  height: 456px;
  border-radius: 20px;
  box-shadow: 10px 8px #495057;
  top: 450px;
  left: 900px;
`

const Sorting = styled.p`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 127px;
`

const WarningTitle = styled.p`
  font-size: 20px;
  font-weight: 900;
  color: #FA6868;
  margin: 0;
`

const NumberPlate = styled.p`
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  margin-bottom: 26px;
`