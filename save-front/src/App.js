import React from "react";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Introd from "./page/Introd";
import Signup from './page/Signup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Introd/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
};

export default App;