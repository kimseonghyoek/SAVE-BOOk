import React from "react";
import Item from "../components/Book/Item";
import Button from "../components/Button";
import Header from "../components/Navbar/Header";
import BestSell from "../container/BestSell";
import "../index.css";
import { PC } from "../Responsive/responsive";
import bestSeller from  '../assets/BestSeller.json'

const Main = () => {
  return (
    <>
      <Header />
      <PC>
        {/* MainContent */}
        <div className="flex flex-col items-center static ml-40 mr-40">
          <div className="flex justify-center w-full2 bg-test">
            <div
              id="mainC"
              className="w-full2 h-mainC flex items-center justify-between m-2 rounded-half"
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
                <Button
                  text="보러가기"
                  styled="w-big text-middle2 hover:bg-blue"
                />
              </div>
            </div>
          </div>
          <BestSell>
            <h1 className="text-middle">베스트셀러 * BestSeller</h1>
            <div className="m-8">
              {
                bestSeller.map((index, key) => {
                  console.log(index)
                  return(
                  <Item title={index.title} author={index.author} key={key} photo={key}/>
                )})
              }
            </div>
          </BestSell>
        </div>
      </PC>
    </>
  );
};

export default Main;
