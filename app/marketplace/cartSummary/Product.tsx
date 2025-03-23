"use client";
import React from "react";
import HeartIcon from "./HeartIcon";

interface ProductProps {
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
}

const Product: React.FC<ProductProps> = ({ name, price, oldPrice, image }) => {
    return (
        <div className="product-card">
            <HeartIcon/>
            {/* <i className="fa-regular fa-heart heart-icon"></i> */}
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <p className="price">N{price}</p>
            {oldPrice && <p className="old-price">N{oldPrice} <span className="discount">-13.33%</span></p>}
        </div>
    );
};
export default Product;