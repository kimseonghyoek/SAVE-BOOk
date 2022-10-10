import React from "react";

const Contents = ({ item }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full2 h-mainC flex items-center bg-blue justify-between ml-4 mr-4  rounded-half">
          <div className="w-hw flex flex-col  items-center text-middle text-white p-16">
            <h1 className="font-Gamja text-big2">{item.title}</h1>
            <h3>{item.text}</h3>
          </div>
          <div className="w-hw flex justify-center">
            <img
              src={process.env.PUBLIC_URL + item.img}
              width="60%"
              className="h-hw"
              alt="mainContents"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
