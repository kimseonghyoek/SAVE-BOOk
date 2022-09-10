import React from "react";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Introd from "./page/Introd";
import Signup from './page/Singup';

const App = () => {
  return (
    <div className="flex justify-center">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Introd/>}/>
      </Routes>
    </div>
  );
};

export default App;