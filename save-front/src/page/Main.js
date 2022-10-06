import React from "react";
import Item from "../components/Book/Item";
import Button from "../components/Button";
import Header from "../components/Navbar/Header";
import BestSell from "../container/BestSell";
import "../index.css";
import { PC } from "../Responsive/responsive";
import bestSeller from "../assets/BestSeller.json";
import MainContents from "../components/Contents/MainContents";
import SubContents from "../components/Contents/SubContents";

const Main = () => {
  return (
    <>
      <Header />
      <PC>
        {/* MainContent */}
        <div className="flex flex-col items-center static ml-40 mr-40">
          <div className="flex w-full2 flex-row m-8">
            <MainContents />
            <div className="flex flex-col justify-center items-center">
              <div className="w-modal h-mainC border-2 border-gray p-2 rounded-test flex flex-col items-center justify-center">
                <h1 className="text-bold p-4 font-Titillium">Hot Album</h1>
                <ul>
                  <SubContents
                    title="아이브 (IVE)"
                    sub="After Like [Single 3]"
                    img="ive.jpg"
                    styled="hover:bg-blue"
                  />
                  <SubContents
                    title="뉴진스(NEWJEANS)"
                    sub="1ST EP [NEW JEANS]"
                    img="newjeans.jpg"
                    styled="hover:bg-blue"
                  />
                  <SubContents
                    title="마마무 (MAMAMOO)"
                    sub="MIC ON [미니 12집]"
                    img="mamamoo.jpg"
                    styled="hover:bg-blue"
                  />
                  <SubContents
                    title="RED VELVET (레드벨벳)"
                    sub="After Like [Single 3]"
                    img="red.jpg"
                    styled="hover:bg-blue"
                  />
                </ul>
              </div>
            </div>
          </div>
          <BestSell>
            <div className="m-8 text-center">
              {bestSeller.map((index, key) => {
                console.log(key);
                return (
                  <Item
                    title={index.title}
                    author={index.author}
                    key={key}
                    photo={key}
                  />
                );
              })}
            </div>
          </BestSell>
        </div>
      </PC>
    </>
  );
};

export default Main;
