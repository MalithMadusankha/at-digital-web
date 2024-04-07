import React from "react";
import { DIGITAL_IMAGE } from "../assets/ConstVariable";

export default function DigitalArea() {
  const width = window.innerWidth;
  return width > 375 ? (
    <div className="w-76 mx-auto mt-5">
      <div className="row pt-5">
        <div className="col align-content-center">
          <div className="">
            <h2 className="dev-header">Digital Strategy Consulting</h2>
            <p className="dev-text">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button className="learn-btn text-white">Learn More</button>
          </div>
        </div>
        <div className="my-col">
          <div className="">
            <img src={DIGITAL_IMAGE} alt="digital-img" className="dev-img" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-76 mx-auto mt-5">
      <div className="row pt-5">
        <div className="my-col w-100">
          <div className="d-flex justify-content-center">
            <img src={DIGITAL_IMAGE} alt="dev-img" className="dev-img" />
          </div>
        </div>
        <div className="col align-content-center">
          <div className="">
            <h2 className="dev-header text-center">
              Digital Strategy Consulting
            </h2>
            <p className="dev-text text-center p-2">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <div className="d-flex justify-content-center">
              <button className="learn-btn text-white">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
