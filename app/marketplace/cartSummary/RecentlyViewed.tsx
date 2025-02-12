import React from "react";
import Product from "./Product";

const RecentlyViewed: React.FC = () => {
    return (
        <div>
            <h5>Recently Viewed</h5>
            <div className="row">
                <div className="col-6 col-md-4 col-lg-3 mb-3">
                    <Product name="Nike Air Max 270" price={150000} oldPrice={170000} image="/marketplace/img/shoe.jpeg" />
                </div>
                <div className="col-6 col-md-4 col-lg-3 mb-3">
                    <Product name="Nike Air Max 270" price={150000} oldPrice={170000} image="/marketplace/img/shoe.jpeg"  />
                </div>
            </div>
        </div>
    );
};
export default RecentlyViewed;