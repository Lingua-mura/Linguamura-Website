"use client";
import React, { useState } from 'react';
import './cart.css';
// import HeartIcon from './HeartIcon';

interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    stock: number;
}

const Cart: React.FC = () => {
    // Sample product data
    const initialProducts: Product[] = [
        {
            id: 1,
            name: 'Nike Air Max 270, Blue and Black',
            price: 150000,
            oldPrice: 170000,
            image: '/marketplace/img/shoe.jpeg',
            stock: 5,
        },
        {
            id: 2,
            name: 'Adidas UltraBoost, White and Black',
            price: 120000,
            oldPrice: 150000,
            image: '/marketplace/img/shoe.jpeg',
            stock: 3,
        },
    ];

    const [products, setProducts] = useState<Product[]>(initialProducts);

    // Update quantity for a specific product
    const changeQuantity = (id: number, amount: number) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? {
                          ...product,
                          stock: product.stock + amount >= 0 ? product.stock + amount : product.stock,
                      }
                    : product
            )
        );
    };

    // Calculate total cart value
    const calculateTotal = () => {
        return products.reduce((total, product) => total + product.price * product.stock, 0);
    };

    return (
        <div className="container mt-3">
            <div className="cart-container">
               

                <div className="cart-summary">
                    <p>
                        <strong>Cart summary</strong>
                    </p>
                    <p>
                        Subtotal: <strong>₦{calculateTotal().toLocaleString()}</strong>
                    </p>
                    <p className="text-muted">Delivery fee not included yet</p>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="freeDelivery" />
                        <label className="form-check-label text-success" htmlFor="freeDelivery">
                            Use your Free Delivery Coupon
                        </label>
                    </div>
                </div>

                {/* Product List */}
                {products.map((product) => (
                    <div key={product.id} className="product my-3">
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <p className="mb-0">{product.name}</p>
                            <small>Seller: Dragon-Seas | Size: EU 40</small>
                            <p className="mb-0 mt-1">
                                <strong>₦{product.price.toLocaleString()}</strong>{' '}
                                {product.oldPrice && (
                                    <>
                                        <del>₦{product.oldPrice.toLocaleString()}</del>
                                        <span className="discount">-13.33%</span>
                                    </>
                                )}
                            </p>
                            <p className="low-stock">
                                <i className="fas fa-exclamation-circle"></i> {product.stock} units left
                            </p>
                        </div>
                        <div className="actions d-flex justify-content-between">
                            <button className="btn btn-danger btn-sm">
                                <i className="fas fa-trash"></i>
                            </button>
                            <div className="quantity-control">
                                <button onClick={() => changeQuantity(product.id, -1)}>-</button>
                                <span className="mx-2">{product.stock}</span>
                                <button onClick={() => changeQuantity(product.id, 1)}>+</button>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="checkout-container mb-5">
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
