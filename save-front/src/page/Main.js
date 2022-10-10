import React from "react";
import Item from "../components/Book/Item";
import Header from "../components/Navbar/Header";
import BestSell from "../container/BestSell";
import "../index.css";
import { PC, SPC } from "../Responsive/responsive";
import bestSeller from "../assets/BestSeller.json";
import MainContents from "../components/Contents/MainContents";
import SubContents from "../components/Contents/SubContents";
import Card from "../container/Card";

const Main = () => {
  return (
    <>
      <Header />
      <PC>
        <div className="flex flex-col items-center static ml-40 mr-40">
          <div className="flex w-full2 flex-row m-8">
            <MainContents />
            <div className="flex flex-col justify-center items-center">
              <div className="w-modal h-mainC border-2 border-gray p-2 rounded-test flex flex-col items-center justify-center">
                {/* <h1 className="text-bold p-4 font-Titillium">Hot Album</h1> */}
                <ul className="w-full2 flex flex-col justify-center items-center">
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
                    sub="THE REVE FESTIVAL"
                    img="red.jpg"
                    styled="hover:bg-blue"
                  />
                </ul>
              </div>
            </div>
          </div>
          <BestSell>
            <Item
              title={bestSeller[0].title}
              author={bestSeller[0].author}
              key={"0"}
              photo={"0"}
              styled="w-full2"
            />
            <Item
              title={bestSeller[1].title}
              author={bestSeller[1].author}
              key={"1"}
              photo={"1"}
            />
            <Item
              title={bestSeller[2].title}
              author={bestSeller[2].author}
              key={"2"}
              photo={"2"}
            />
            <Item
              title={bestSeller[3].title}
              author={bestSeller[3].author}
              key={"3"}
              photo={"3"}
            />
          </BestSell>
        </div>
      </PC>
      <SPC>
        <div className="flex flex-col m-5">
          <MainContents />
          <div className="pt-8 m-5">
            <h1 className="text-middle m-4">HOT Album</h1>
            <Card styled="border-2 border-gray p-4">
              <ul className="flex flex-row justify-center">
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
                  sub="THE REVE FESTIVAL"
                  img="red.jpg"
                  styled="hover:bg-blue"
                />
              </ul>
            </Card>
          </div>
        </div>
      </SPC>
    </>
  );
};

export default Main;
