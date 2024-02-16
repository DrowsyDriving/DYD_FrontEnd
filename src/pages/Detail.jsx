import React from "react";
import styled from "styled-components";
import Header from "../components/header"

export default function Detail () {
  return (
    <>
      <Header />
      <Container>
        <CameraImg src="img/Camera.png" />
        <TheDetails>
          <Text>T:042-866-8822</Text>
          <Text>mail : dmddkslek0@dsm.hs.kr</Text>
          <Text>ver 1.0.0(Beta)</Text>
          <Text>LastUpdate:2024.01.02</Text>
        </TheDetails>
      </Container>
    </>
  )
};

const Container = styled.div`
  width: 100%;
  height: 860px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CameraImg = styled.img`
  width: 512px;
  height: 512px;
  margin: 0 150px 0 0;
`;

const TheDetails = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  border: 0.5px solid #343A40;
  box-shadow: 4px 6px #495057;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 900;
  margin: 0 0 20px 30px;
`;