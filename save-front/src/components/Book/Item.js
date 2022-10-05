import React from "react";

const Item = ({ title, author, photo, key }) => {
  return (
    <div className="flex flex-col items-center" key={key}>
      <img src={process.env.PUBLIC_URL + `/img/${photo}.jpg`} alt="bookImg"/>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

Item.defaultProps = {
  title: "책 제목",
  author: "책 저자",
  photo: '1'
};

export default Item;
