
import "./Order.css"
import React from "react";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import CustomerAddress from "./CustomerAddress";
import DeliveryDetails from "./DeliveryDetails";
import "bootstrap/dist/css/bootstrap.min.css";


const OrderPage = () => {
  return (
    <div className="container">
      <div className="fa-icons mb-2">
        <i className="fa-solid fa-bars"></i>
        <div>
          <i className="fa-solid fa-coins"></i> 25k
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
      <p className="text-center text-muted">No Ads yet...</p>

      <OrderSummary />
      <PaymentMethod />
      <CustomerAddress />
      <DeliveryDetails />

      <button className="btn btn-confirm">Confirm order</button>
    </div>
  );
};

export default OrderPage;
