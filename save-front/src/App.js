import React from "react";
import { Route, Routes } from "react-router";
import Modal from "./components/Modal";
import Home from "./page/Home";
import Introd from "./page/Introd";
import Signup from "./page/Signup";
import Header from "./components/Navbar/Header";
import Main from "./page/Main";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Introd />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/test" element={<Header />} />
          <Route path="/index" element={<Main/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
