import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import {ReactComponent as SideColor} from "../assets/SideBackgroundColor.svg"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    area: "",
    areaCode: "",
  });

  const {area, areaCode} = inputData;

  const inputChange = (e) => {
    const {name, value} = e.target;
    setInputData({
      ...inputData,
      [name] : value,
    });
  };

  const LoginClick = async () => {
    try {
      const response = await axios.post(
        `http://drowsydriving.site:8080/users/login`,
        {
          area,
          areaCode,
        }
      );
      navigate("/main");
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Header />
      <Container>
        <LoginBox>
          <SideColor />
          <InputBox>
            <Title>로그인</Title>
            <Input 
              name="area" 
              type="text" 
              placeholder="지역 코드를 입력하세요"
              onChange={(e) => inputChange(e)}
              value={area}
            />
            <Input 
              name="areaCode"
              type="password" 
              placeholder="비밀번호를 입력하세요"
              onChange={(e) => inputChange(e)}
              value={areaCode}
              />
            <Btn onClick={LoginClick}>로그인</Btn>
            <Find>지정 번호 혹은 비밀번호를 잊으셨다면 관리자에게 물어보세요</Find>
          </InputBox>
        </LoginBox>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 20px 0 0 0;
  justify-content: center;
`

const LoginBox = styled.div`
  width: 1400px;
  height: 700px;
  box-shadow: 2px 4px rgba(0,0,0,0.25);
  display:flex;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 72px;
`

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin: 60px 0 70px 0;
`

const Input = styled.input`
  width: 400px; 
  font-size: 20px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #C0C0C0;
  margin-bottom: 45px;
  padding-left: 10px;
  letter-spacing: 2px;
  &:focus {
    outline: none;
  }
`

const Btn = styled.button`
  font-size: 20px;
  font-weight: 700;
  height:55px;
  color: white;
  background-color:#6C757D;
  border-radius: 10px;
  border: none;
  margin-top: 120px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color:#7D868E;
  }
`

const Find = styled.p`
  font-size: 15px;
  color: rgba(0,0,0,0.4)
`