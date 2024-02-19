import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <HeaderBox>
        <Logo />
        <BtnBox>
          <HeaderBtn exact to="/main">
            HOME
          </HeaderBtn>
          <HeaderBtn to="/logout">LOG OUT</HeaderBtn>
          <HeaderBtn to="/detail">INFORMATION</HeaderBtn>
        </BtnBox>
      </HeaderBox>
    </>
  );
}

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: end;
`;

const HeaderBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 42px;
  font-size: 17px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #343a40;
    border-radius: 50px;
    color: white;
    width: 120px;
    height: 45px;
    align-items: center;
    justify-content: center;
  }

  &.active {
    background-color: #343a40;
    border-radius: 50px;
    color: white;
    width: 120px;
    height: 45px;
    align-items: center;
    justify-content: center;
  }
`;
