import React from "react";
import Card from "../../container/Card";

const SubContents = ({ title, sub, img, styled }) => {
  return (
    <Card styled={"p-5 w-wrapSub " + styled}>
      <div className="flex flex-row">
        <img
          src={process.env.PUBLIC_URL + `/img/${img}`}
          className="w-subC h-subC"
          alt="subContent"
        />
        <div className="flex flex-col justify-center m-8">
          <h1 className="pb-2 truncate text-ellipsis">{title}</h1>
          <p className="text-maincolor2">{sub}</p>
        </div>
      </div>
    </Card>
  );
};

SubContents.defaultProps = {
  title: "TITLE",
  sub: "설명",
};

export default SubContents;
