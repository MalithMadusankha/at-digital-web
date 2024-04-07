import React from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

export default function FrequentlyArea() {
  return (
    <div className="">
      <div className="w-60 my-5 ">
        <div className="row">
          <h2 className="dev-header text-center">Frequently asked questions</h2>
        </div>
        <div className="row mt-5 w-100 ">
          <h2 className="freq-header width-r">
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </h2>
          <div className="d-flex justify-content-end width--r">
            <p className="text-end">
              <FaMinus />
            </p>
          </div>
        </div>
        <div className="row w-100">
          <p className="freq-text ">
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
            ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
            Sapien massa morbi risus sagittis tortor integer.
          </p>
        </div>
        <div className="row mt-4 w-100">
          <h2 className="freq-header-1  width-r">
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </h2>
          <div className="d-flex justify-content-end width--r">
            <p className="text-end">
              <FaPlus />
            </p>
          </div>
        </div>
        <div className="row mt-4 pb-5 w-100">
          <h2 className="freq-header-1  width-r">
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </h2>
          <div className="d-flex justify-content-end width--r">
            <p className="text-end">
              <FaPlus />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
