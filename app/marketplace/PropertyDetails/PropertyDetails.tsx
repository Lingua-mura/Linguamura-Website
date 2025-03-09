// PropertyDetails.tsx
import React from 'react';
import './prop.css';

const PropertyDetails = () => {
  return (
    <div className="container mt-4">
      <div className="content-section">
        <div className="d-flex align-items-center">
          <span className="rating me-2">9.0</span>
          <strong>Wonderful</strong>
          <span className="ms-3">Verified</span>
          <span className="ms-3">Quick look</span>
        </div>
        <p className="mt-2">Full furnished | Parking garage | Swimming pool</p>
        <h5>5 bedrooms | 6 bathrooms</h5>
      </div>

     <section>
     <div className="blog-container mt-4">
            <div className="map-container w-50">
                <h6>What&apos;s around</h6>
                <iframe src="https://www.google.com/maps?q=100+Momodu+St,+Ottawa+Off+Abekoko&output=embed" width="100%" height="250" allowfullscreen="" loading="lazy"></iframe>
                <p className="mt-2"><i className="fas fa-map-marker-alt"></i> 100 Momodu St, Ottawa Off Abekoko bus stop</p>
                <ul className="mt-3">
                    <li>Parliament Hill - 3 min walk</li>
                    <li>Iyanu Ipaja - 7 min walk</li>
                    <li>Nyc camp - 5 min walk</li>
                    <li>100 Momodu St, Ottawa Off Abekoko - 18 min drive</li>
                </ul>
            </div>
            <div className="content-section w-50">
                <h6>Popular amenities</h6>
                <div className="amenities">
                    <p><i className="fas fa-swimming-pool"></i> Pool</p>
                    <p><i className="fas fa-door-open"></i> Connecting rooms available</p>
                    <p><i className="fas fa-glass-martini"></i> Bar</p>
                    <p><i className="fas fa-clock"></i> 24/7 front desk</p>
                    <p><i className="fas fa-dumbbell"></i> Gym</p>
                    <p><i className="fas fa-parking"></i> Parking available</p>
                </div>
                
                <h6 className="mt-4">Description</h6>
                <p>This charming three-bedroom house is nestled in a quiet, family-friendly neighborhood. The spacious living room features large windows, allowing natural light to flood the space...</p>
            </div>
        </div>
     </section>



      <div className="details-container">
        <h5 className="mt-5"><strong>Details</strong></h5>
        <div className="details-card">
          <div className="row">
            <div className="col-6">
              <p><strong>Price:</strong> NGN 7M</p>
              <p><strong>Property Size:</strong> 540 Sq Meter</p>
            </div>
            <div className="col-6">
              <p><strong>Land Area:</strong> 540 Sq Meter</p>
              <p><strong>Property Status:</strong> For Sale</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-custom"><i className="fas fa-shopping-cart"></i> Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;