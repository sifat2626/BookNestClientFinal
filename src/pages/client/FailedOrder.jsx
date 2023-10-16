import React from "react";
import "./SuccessFailed.css";

const SuccessOrder = () => {
  return (
    <div className="row">
      <div className="col-12 py-4 mt-3 ">
        <div className="card mx-auto">
          <div className="header">
            <div className="image order-failed">
              <svg
                fill="#000000"
                height="60px"
                width="60px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490"
                xml:space="preserve"
              >
                <polygon
                  points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
           489.292,457.678 277.331,245.004 489.292,32.337 "
                />
              </svg>
            </div>
            <div className="content">
              <span className="title title-failed">Order failed</span>
              <p className="message">
                For some technical reasons, your order has not been validated. Please try again later.
              </p>
            </div>
            <div className="actions">
              <button className="history failed-btn" type="button">
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
