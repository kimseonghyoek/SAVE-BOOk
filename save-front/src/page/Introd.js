import React from "react";
import { FullPage, Slide } from "react-full-page";
import { Link } from "react-router-dom";
import Service from "../components/Service";
import "./css/introd.css";

const Introd = () => {
  return (
    <FullPage>
      <Slide>
        <div
          id="introd"
          className="text-big text-white items-center flex justify-center"
        >
          <div className="fadein text-center">
            <h1>지금까지 없었던</h1>
            <h1>ONLY ONLINE 서점</h1>
            <h1 className="font-Chewy">SAVE BOOK</h1>
          </div>
        </div>
      </Slide>
      <Slide>
        <div className="bg-green h-full flex flex-row text-white text-middle">
          <Service style="justify-center flex-col">
            <p className="flex justify-center pb-10">
              항상 서점에서 무겁게 책을 사고 나가시나요? <br />
              SAVE BOOK은 오직 온라인에서만 만나는 서비스입니다. <br />
              도서가 급하게 필요할 때 마하 배송도 가능합니다.
            </p>
            <Link to="/auth/signup">
              <p className="fadein pt-14` underline text-bold pl-44">
                당신의 어깨가 무겁다면?
              </p>
            </Link>
          </Service>
          <Service style="justify-center items-center">
            <img
              src={process.env.PUBLIC_URL + "/img/bs.png"}
            />
            <img
              src={process.env.PUBLIC_URL + "/img/bm.png"}
            />
          </Service>
        </div>
      </Slide>
    </FullPage>
  );
};

export default Introd;
