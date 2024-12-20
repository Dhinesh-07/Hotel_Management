import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editHotel } from "../redux/hotelSlice";
import "../styles/AddItemsPage.css";

const EditHotelPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const hotelToEdit = location.state;

  const [formData, setFormData] = useState({
    id: hotelToEdit?.id || null,
    title: hotelToEdit?.title || "",
    description: hotelToEdit?.description || "",
    price: hotelToEdit?.price || "",
    latitude: hotelToEdit?.latitude || "",
    longitude: hotelToEdit?.longitude || "",
    image: hotelToEdit?.image || "",
  });

  useEffect(() => {
    if (hotelToEdit) {
      setFormData(hotelToEdit);
    }
  }, [hotelToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedHotel = {
      id: formData.id, 
      updatedHotel: formData,
    };
    
    dispatch(editHotel(updatedHotel));
    navigate("/viewItems");
  };
  
  return (
    <div className="add-items-page">
      <h1>Edit Hotel</h1>
      <form className="add-item-form" onSubmit={handleSubmit}>
        {/* Form fields for editing */}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="number"
            id="latitude"
            name="latitude"
            step="0.01"
            value={formData.latitude}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="number"
            id="longitude"
            name="longitude"
            step="0.01"
            value={formData.longitude}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditHotelPage;
