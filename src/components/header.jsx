import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState(null);

  return (
    <HeaderBox>
      <Logo />
      <BtnBox>
        <NavLinkStyled to="/main" onClick={() => setActive("/main")} active={active === "/main"}>
          HOME
        </NavLinkStyled>
        <NavLinkStyled to="/logout" onClick={() => setActive("/logout")} active={active === "/logout"}>
          LOG OUT
        </NavLinkStyled>
        <NavLinkStyled to="/detail" onClick={() => setActive("/detail")} active={active === "/detail"}>
          INFORMATION
        </NavLinkStyled>
      </BtnBox>
    </HeaderBox>
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
  justify-content: flex-end;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 42px;
  font-size: 17px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: black;
  width: 120px; /* 버튼의 너비를 고정 */
  height: 45px; /* 버튼의 높이를 고정 */

  &:hover {
    background-color: #343a40;
    border-radius: 50px;
    color: white;
    /* width, height 속성 제거 */
    align-items: center;
    justify-content: center;
  }

  &.active {
    background-color: #343a40;
    border-radius: 50px;
    color: white;
    /* width, height 속성 제거 */
    align-items: center;
    justify-content: center;
  }
`;
