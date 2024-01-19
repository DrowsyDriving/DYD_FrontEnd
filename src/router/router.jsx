import React from "react";
import {BrowserRouter, Route ,Routes } from "react-router-dom";
import Login from "../pages/Login";
import LogOut from "../pages/LogOut";
import Main from "../pages/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/logout" element={<LogOut />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}