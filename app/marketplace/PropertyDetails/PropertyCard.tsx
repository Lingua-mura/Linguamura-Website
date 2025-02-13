import React from 'react';
import './prop.css';

const PropertyCard = () => {
  return (
    <div className="container mt-4">
      <h2 className="property-title">Solute Properties</h2>
      <p>Block 21 Morgan estate Ibeju Lekki way, Lagos, Nigeria</p>
      <span className="badge bg-success">For Sale</span>
      <h3 className="price-tag mt-2">NGN 3M</h3>
      <div className="row mt-3 g-2">
        <div className="col-md-6">
          <img src="/marketplace/img/shoe.jpeg" alt="Main House" className="img-fluid rounded main-image" />
        </div>
        <div className="col-md-6 property-gallery">
          <img src="/marketplace/img/shoe.jpeg" alt="Modern House" className="img-fluid" />
          <img src="/marketplace/img/shoe.jpeg" alt="Bedroom" className="img-fluid" />
          <img src="/marketplace/img/shoe.jpeg" alt="Bathroom" className="img-fluid" />
          <img src="/marketplace/img/shoe.jpeg" alt="Pool" className="img-fluid" />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-2">
        <button className="btn btn-outline-primary"><i className="fas fa-images"></i> Show All Photos</button>
      </div>
      <ul className="nav nav-tabs mt-4">
        <li className="nav-item">
          <a className="nav-link active" href="#overview" data-bs-toggle="tab">Overview</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#amenities" data-bs-toggle="tab">Amenities</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#description" data-bs-toggle="tab">Description</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#details" data-bs-toggle="tab">Details</a>
        </li>
      </ul>

    </div>
  );
};

export default PropertyCard;
