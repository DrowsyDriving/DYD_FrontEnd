import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header"
import MainModal from "../components/MainModal";


export default function Main() {

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Header />
      <Container>
        <CameraImg src="img/Camera.png" />
        <Alarm>
          <Title>안녕하세요 OOO님!</Title>
          <Warning onClick={showModal}>
            {isOpen && (<MainModal setIsOpen={setIsOpen} />)}
              <BellImg src="img/Bell.png" alt="종이미지" />
              <Sorting>
                <WarningTitle>1차 경고</WarningTitle>
                <NumberPlate>82모 5603</NumberPlate>
              </Sorting>
          </Warning>

          <Warning>
              <BellImg src="img/Bell.png" alt="종이미지" />
              <Sorting>
                <WarningTitle >2차 경고</WarningTitle>
                <NumberPlate>998가 2939</NumberPlate>
              </Sorting>
          </Warning>

          <Warning>
              <BellImg src="img/Bell.png" alt="종이미지" />
              <Sorting>
                <WarningTitle>1차 경고</WarningTitle>
                <NumberPlate>18머 3203</NumberPlate>
              </Sorting>
          </Warning>

          <Warning>
              <BellImg src="img/Bell.png" alt="종이미지" />
              <Sorting>
                <WarningTitle>3차 경고</WarningTitle>
                <NumberPlate>38나 4932</NumberPlate>
              </Sorting>
          </Warning>
        </Alarm>
      </Container>
    </> 
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
`

const CameraImg = styled.img`
  width: 512px;
  height: 512px;
  margin: 0 150px 0 0;
`

const Title = styled.p`
  font-size:33px;
  font-weight: 900;
  color: #343A40;
`

const Alarm = styled.div`
  display: flex;
  flex-direction: column;
`

const Warning = styled.div`
  width: 924.755px;
  height: 128.519px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 0.5px solid #343A40;
  box-shadow: 4px 6px #495057;
  margin: 0 0 30px 0;
`

const BellImg = styled.img`
  width:75px;
  height: 75px;
  margin: 0 0 0 30px;
`

const Sorting = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 25px;
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
`