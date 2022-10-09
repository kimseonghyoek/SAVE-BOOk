import React from "react";
import Card from "../../container/Card";

const SubContents = ({ title, sub, img, styled }) => {
  return (
    <Card styled={"p-5 w-wrapSub flex justify-center items-center " + styled}>
      <div className="flex flex-row justify-center items-center">
        <img
          src={process.env.PUBLIC_URL + `/img/${img}`}
          className="w-half h-half"
          alt="subContent"
        />
        <div className="flex flex-col m-8">
          <h1 className="pb-2 w-subC truncate text-ellipsis ">{title}</h1>
          <p className="text-maincolor2 w-subC truncate text-ellipsis ">{sub}</p>
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
