import React, { useEffect, useState } from "react";
import COVER_IMAGE from "../assets/ConstVariable";

export default function CoverArea() {
  const width = window.innerWidth;
  console.log(width);
  return width < 800 ? (
    <div>
      <div className="row ">
        <img src={COVER_IMAGE} alt="cover-img" className="cover-img" />
      </div>

      <div className="row">
        <div className="cover-text-area-m">
          <div className="cover-text-a ">
            <h1 className="cover-text-m text-white">
              We Crush your Competitors, Goals, and Sales Records - Without The
              B.S.
            </h1>
            <button className="free-btn text-white">
              Get free consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        backgroundImage: `url(${COVER_IMAGE})`,
        height: 700,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        position: "relative",
      }}
    >
      <div className="cover-text-area">
        <h1 className="cover-text text-white">
          We Crush your Competitors, Goals, and Sales Records - Without The B.S.
        </h1>
        <button className="free-btn text-white">Get free consultation</button>
      </div>
    </div>
  );
}
