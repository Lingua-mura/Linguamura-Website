import React from 'react';

interface PropertyCardProps {
  image: string;
  title: string;
  description: string;
  location: string;
  price: string;
}

const PropertyCard = ({
  image,
  title,
  description,
  location,
  price,
}: PropertyCardProps) => {
  return (
    <div className="property-card card">
      <img src={image} className="property-img card-img-top" alt="Property Image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="property-footer">
          <div className="location">
            <span>{location}</span>
          </div>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;