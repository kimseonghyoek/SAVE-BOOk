import React from "react";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Introd from "./page/Introd";
import Signup from "./page/Signup";
import Main from "./page/Main";
import Item from "./components/Book/Item";

const App = () => {
  return (
    <>
      <div className="text-default">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Introd />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/test" element={<Item/>}/>
          <Route path="/index" element={<Main/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
