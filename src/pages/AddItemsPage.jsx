import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addHotel } from "../redux/hotelSlice";
import "../styles/AddItemsPage.css";

const AddItemsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    image: "",
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHotel(formData));
    console.log("New Item:", formData);
    setFormData({
      title: "",
      description: "",
      price: "",
      latitude: "",
      longitude: "",
      image: "",
    });
    navigate("/viewItems");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
  
    if (name === "latitude" || name === "longitude") {
      const formattedValue = value ? parseFloat(value).toFixed(2) : "";
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    }
  };

  return (
    <div className="add-items-page">
      <h1>Add New Item</h1>
      <form className="add-item-form" onSubmit={handleSubmit}>
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
            onBlur={handleBlur}
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
            onBlur={handleBlur}
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
        <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
        </button>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemsPage;