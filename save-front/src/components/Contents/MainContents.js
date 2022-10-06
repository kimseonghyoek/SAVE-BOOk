import React from "react";
import Button from "../Button";

const MainContents = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div
          className="w-full2 h-mainC flex items-center bg-blue justify-between mr-8  rounded-half"
        >
          <div className="w-hw flex  flex-col text-bold text-white p-16">
            <h1>2022년 드라마 최고작</h1>
            <h1 className="font-Gamja text-big2">이상한 변호사 우영우</h1>
            <h1>1, 2권 세트 판매 중</h1>
          </div>
          <div className="w-hw flex justify-center">
            <img
              src={process.env.PUBLIC_URL + "/img/mainC.png"}
              width="80%"
              className="h-hw"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContents;
