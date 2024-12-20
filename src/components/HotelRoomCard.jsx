import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hotel.css"

const HotelRoomCard = ({ hotel }) => {
  const navigate = useNavigate();
  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div className="star-rating">
        {Array.from({ length: totalStars }, (_, index) => (
          <span
            key={index}
            className={`star ${index < Math.floor(rating) ? "filled" : ""}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="hotel-card">
      <div className="hotel-image-box">
        <img src={hotel.image} alt={hotel.title} className="hotel-image" />
      </div>
      <div className="hotel-desc">
      <h3>{hotel.title}</h3>
      {renderStars(hotel.rating)}
      <p>{hotel.description}</p>
      <p>{hotel.latitude}</p>
      <p>{hotel.longitude}</p>
      </div>
      <div className="hotel-price-details">
      <div className="hotel-price">
        <span className="price">${hotel.price}</span>
      </div>
      <h3 className="free-shipping-text">Free Shipping</h3>
      <button onClick={() => navigate(`/editHotel/${hotel.id}`, { state: hotel })}>
          Edit
        </button>
      <button>Buy This</button>
      </div>
    </div>
  );
};

export default HotelRoomCard;
