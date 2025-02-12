import React from "react";

const OrderSummary = () => {
  return (
    <div className="card-section">
      <h5 className="section-title">Order summary</h5>
      <div className="d-flex justify-content-between">
        <span>Item's total (1)</span>
        <span>N150,000</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>Delivery fees</span>
        <span>N900</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between total">
        <span>Total</span>
        <span>N150,900</span>
      </div>
      <div className="form-check my-2">
        <input className="form-check-input" type="checkbox" id="freeDelivery" checked />
        <label className="form-check-label" htmlFor="freeDelivery">
          Use your Free Delivery Coupon
        </label>
      </div>
    </div>
  );
};

export default OrderSummary;
