import React from "react";
import Cart from "./cart";
import RecentlyViewed from "./RecentlyViewed";
import "./cart.css";

const Page: React.FC = () => {
    return (
        <div className="container mt-3">
            <div className="cart-container">
                <div className="cart-header">
                    <i className="fas fa-bars"></i>
                    <span className="coin-badge"><i className="fas fa-coins"></i> 25k</span>
                    <i className="fas fa-bell"></i>
                </div>
                <Cart />
                <RecentlyViewed />
               

            </div>
        </div>
    );
};
export default Page;