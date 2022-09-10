import React from "react";
import $ from "jquery";
import "fullpage.js/vendors/scrolloverflow.js";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";

const Introd = () => {
  $(() => {
    $("#fullpage").fullpage({
      scrollOverflow: true,
    });
  });

  return (
    <div id="fullpage">
      <div className="section fp-scrollable">
        <h3>첫번째 소개 페이지</h3>
      </div>
      <div className="section">
        <h3>두번째 소개 페이지</h3>
      </div>
      <div className="section">마지막 권유 페이지</div>
    </div>
  );
};

export default Introd;