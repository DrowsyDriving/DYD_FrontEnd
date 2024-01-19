import React, { useState } from "react";
import styled from "styled-components";
import {ReactComponent as Logo} from "../assets/Logo.svg"

export default function Header() {

  return (
    <>
      <HeaderBox>
        <Logo />
        <BtnBox>
          <HeaderBtn
          >HOME</HeaderBtn>
          <HeaderBtn
          >LOG OUT</HeaderBtn>
          <HeaderBtn
          >INFORMATION</HeaderBtn>
        </BtnBox>
      </HeaderBox>
    </>
  )
}

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const BtnBox = styled.div`
  display:flex;
  justify-content: end;
`

const HeaderBtn  = styled.button`
  display:flex;
  align-items: center;
  margin-left: 42px;
  font-size: 17px;
  background-color: transparent;
  border: none;

  &:active {
    background-color: #343A40;
    border-radius: 50px;
    color: white;
    width: 120px;
    height: 45px;
    align-items: center;
    justify-content: center;
  }
`;