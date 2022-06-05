import React from "react";
import image from "../images/bladerunner.png";

export default function info() {
  return (
    <div className="header">
      <img src={image} className="info--image" />
      <div className="namecontain">
        <h2 className="name">Agent K</h2>
        <h4 className="role">Frontend developer</h4>
        <h7 className="website">kjsalkfj@jnsdkf</h7>
      </div>
      <div className="button-align">
        <button className="email"> <img src="https://img.icons8.com/ios-glyphs/16/undefined/new-post.png"/>Email</button>
        <button className="linkedin"><img src="https://img.icons8.com/ios/20/undefined/linkedin.png"/>LinkedIn</button>
      </div>
    </div>
  );
}
