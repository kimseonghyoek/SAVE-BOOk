import React from "react";
import { FullPage, Slide } from "react-full-page";
import Service from "../components/Service";

const Introd = () => {
  return (
    <FullPage>
      <Slide>
        <div className="flex w-full flex-row">
          <Service>
            <h1 className="text-sm">지금까지는 없었다.</h1>
            <h1>ONLY ONLINE 에서만</h1>
            <h1>SAVE BOOK</h1>
          </Service>
          <Service>
            <h1>test</h1>
          </Service>
        </div>
        <Service>TESt</Service>
      </Slide>
      <Slide />
    </FullPage>
  );
};

export default Introd;
