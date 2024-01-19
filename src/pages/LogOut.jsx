import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import {ReactComponent as SideColor} from "../assets/SideBackgroundColor.svg"

export default function LogOut() {
  return (
    <>
      <Header />
      <Container>
        <LoginBox>
          <SideColor />
          <TextBox>
            <Title>로그아웃</Title>
            <LogOutText>로그아웃 하시려면 <br />아래 버튼을 눌러주세요</LogOutText>
            <Btn>로그아웃</Btn>
          </TextBox>
        </LoginBox>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 60px 0 0 0;
  justify-content: center;
`

const LoginBox = styled.div`
  width: 1400px;
  height: 700px;
  box-shadow: 2px 4px rgba(0,0,0,0.25);
  display:flex;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 72px;
`

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin: 60px 0 70px 0;
`

const LogOutText = styled.p`
  font-size: 20px;
  color: rgba(0,0,0,0.4)
`

const Btn = styled.button`
  width: 300px;
  height: 54px;
  font-size: 20px;
  font-weight: 700;
  height:55px;
  color: white;
  background-color:#6C757D;
  border-radius: 10px;
  border: none;
  margin-top: 200px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color:#7D868E;
  }
`