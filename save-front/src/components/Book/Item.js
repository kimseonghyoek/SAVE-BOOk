import React from "react";
import Card from "../../container/Card";

const Item = ({ title, author, photo, key }) => {
  return (
    <Card styled="border-2 border-gray inline-block m-4 p-8 w-wrapBest">
      <li>
        <div className="flex flex-col items-center" key={key}>
          <img
            src={process.env.PUBLIC_URL + `/img/${photo}.jpg`}
            alt="bookImg"
            className="w-bookImg h-bookImg"
          />
          <h2 className="w-bookImg truncate text-ellipsis pt-2 pb-2">{title}</h2>
          <p>{author}</p>
        </div>
      </li>
    </Card>
  );
};

Item.defaultProps = {
  title: "책 제목",
  author: "책 저자",
  photo: "1",
};

export default Item;
