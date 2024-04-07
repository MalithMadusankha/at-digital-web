import React from "react";
import { DEVELOPMENT_IMAGE } from "../assets/ConstVariable";

export default function DevelopmentArea() {
  const width = window.innerWidth;

  return width > 375 ? (
    <div className="w-76 mx-auto mt-5">
      <div className="row pt-5">
        <div className="my-col">
          <div className="my-auto mx-auto">
            <img src={DEVELOPMENT_IMAGE} alt="dev-img" className="dev-img" />
          </div>
        </div>
        <div className="col align-content-center me-md-2">
          <div className="">
            <h2 className="dev-header text-center">
              Web & Mobile App Development
            </h2>
            <p className="dev-text text-center">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button className="learn-btn text-white">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-76 mx-auto mt-5">
      <div className="row pt-5">
        <div className="my-col w-100">
          <div className="d-flex justify-content-center">
            <img src={DEVELOPMENT_IMAGE} alt="dev-img" className="dev-img" />
          </div>
        </div>
        <div className="col align-content-center">
          <div className="">
            <h2 className="dev-header text-center">
              Web & Mobile App Development
            </h2>
            <p className="dev-text text-center p-2">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
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
