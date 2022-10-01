import React from "react";
import Header from "../components/Navbar/Header";
import "../index.css";
import { PC } from "../Responsive/responsive";

const Main = () => {
  return (
    <>
      <Header />
      <PC>
        {/* MainContent */}
        <div className="flex flex-col items-center static">
          <div
            id="mainC"
            className="w-mainC h-mainC flex items-center justify-between m-2 rounded-half"
          >
            <div className="w-hw flex justify-center">
              <img
                src={process.env.PUBLIC_URL + "/img/mainC.png"}
                width="80%"
                className="h-hw"
              />
            </div>
            <div className="w-hw flex items-center flex-col text-bold text-white">
              <h1>2022년 드라마 최고작</h1>
              <h1 className="font-Gamja text-big2">이상한 변호사 우영우</h1>
              <h1>1, 2권 세트 판매 중</h1>
            </div>
          </div>

        </div>
      </PC>
    </>
  );
};

export default Main;
