import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate를 import합니다.

export default function Header() {
  const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

  const handleButtonClick = (path) => {
    navigate(path); // navigate 함수를 사용하여 경로로 이동합니다.
  };

  return (
    <>
      <HeaderBox>
        <Logo />
        <BtnBox>
          <HeaderBtn onClick={() => handleButtonClick("/main")}>
            HOME
          </HeaderBtn>
          <HeaderBtn onClick={() => handleButtonClick("/logout")}>
            LOG OUT
          </HeaderBtn>
          <HeaderBtn onClick={() => handleButtonClick("/detail")}>
            INFORMATION
          </HeaderBtn>
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
