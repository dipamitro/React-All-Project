import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DeshBoard from "./pages/deshboard/DeshBoard";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/deshboard/signUp/SignUp";

function App() {
  return (
    <>
    

      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/deshBoard" element={<DeshBoard />}></Route>
      </Routes>
    </>
  );
}

export default App;
