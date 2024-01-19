import React from "react";
import {BrowserRouter, Route ,Routes } from "react-router-dom";
import Login from "../pages/Login";
import LogOut from "../pages/LogOut";
import Main from "../pages/Main";
import Detail from "../pages/Detail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/logout" element={<LogOut />} />
        <Route path="/main" element={<Main />} />
        <Route path='/Detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}