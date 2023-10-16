import React from "react";
import "./SuccessFailed.css";

const SuccessOrder = () => {
  return (
    <div className="row">
      <div className="col-12 py-4 mt-3 ">
        <div className="card mx-auto">
          <div className="header">
            <div className="image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="60px"
                height="60px"
              >
                <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
              </svg>
            </div>
            <div className="content">
              <span className="title">Order validated</span>
              <p className="message">
                Thank you for your purchase. you package will be delivered
                within 2 days of your purchase
              </p>
            </div>
            <div className="actions">
              <button className="history" type="button">
                History
              </button>
              <button className="track" type="button">
                Go To Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrder;
