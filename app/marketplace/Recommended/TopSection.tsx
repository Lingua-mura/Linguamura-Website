import React from 'react';

const TopSection = () => {
  return (
    <div className="top-section">
      <div className="container">
        <div className="nav-icons">
          <a href="#">
            <i className="fas fa-store"></i> Market
          </a>
          <a href="#">
            <i className="fas fa-building"></i> Apartment
          </a>
          <a href="#">
            <i className="fas fa-hotel"></i> Hotels
          </a>
          <a href="#" className="active">
            <i className="fas fa-home"></i> Properties
          </a>
          <a href="#">
            <i className="fas fa-plane"></i> Travel by air
          </a>
          <a href="#">
            <i className="fas fa-car"></i> Travel by land
          </a>
          <a href="#">
            <i className="fas fa-ship"></i> Travel by water
          </a>
        </div>
        <h2 className="mt-4">Properties</h2>
        <p>We look forward to welcoming you onboard.</p>
        <div className="search-bar">
          <input type="text" placeholder="Where are you going?" />
          <input type="date" />
          <input type="text" placeholder="Select city" />
          <button>
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;