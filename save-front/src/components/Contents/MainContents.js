import React from "react";
import Carousel from "react-material-ui-carousel";
import { PC, SPC } from "../../Responsive/responsive";
import Contents from "./Contetns";

const MainContentes = () => {
  const items = [
    {
      title: "이상한 변호사 우영우",
      text: "대본집 1, 2권 세트 판매 중",
      img: "/img/mainC.png",
    },
    {
      title: "45만 유튜버 조코딩",
      text: "Do it! 프로그래밍 입문 발간!",
      img: "/img/ala.jpg",
    },
  ];

  return (
    <>
      <PC>
        <Carousel indicators={false} className="w-mainC z-1">
          {items.map((item) => (
            <Contents item={item} />
          ))}
        </Carousel>
      </PC>
      <SPC>
        <Carousel indicators={false} className="w-full2 z-1">
          {items.map((item) => (
            <Contents item={item} />
          ))}
        </Carousel>
      </SPC>
    </>
  );
};

export default MainContentes;
