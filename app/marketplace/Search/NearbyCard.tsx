import React from 'react';

interface NearbyCardProps {
  image: string;
  title: string;
  description: string;
  location: string;
  price: string;
  rating: number;
}

const NearbyCard = ({
  image,
  title,
  description,
  location,
  price,
  rating,
}: NearbyCardProps) => {
  return (
    <div className="nearby-card">
      <img src={image} className="nearby-img" alt="Nearby Property" />
      <div className="nearby-details">
        <div className="rating">
          <span className="badge">{rating}</span>
          <span>Excellent</span>
          <i className="fas fa-check-circle"></i>
          <span>Verified</span>
          <i className="fas fa-eye"></i>
          <span>Quick look</span>
        </div>
        <h5>{title}</h5>
        <p>{description}</p>
        <p>
          <strong>{location}</strong>
        </p>
        <h4 className="price">{price}</h4>
        <div className="nearby-footer">
          <div className="tour">
            <i className="fas fa-calendar-alt"></i>
            <span>Tour</span>
          </div>
          <button className="btn btn-primary">Check Availability</button>
        </div>
      </div>
    </div>
  );
};

export default NearbyCard;