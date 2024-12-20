import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchHotels } from "../redux/hotelSlice";
import "../styles/HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, status, error } = useSelector((state) => state.hotels);

  // Fetch data only if the items list is empty
  useEffect(() => {
    if (items.length === 0 && status === "idle") {
      dispatch(fetchHotels());
    }
  }, [dispatch, items, status]);

  return (
    <div className="home-page">
      <h1>Welcome to Product Management</h1>
      <div className="button-container">
        <button className="home-button" onClick={() => navigate("/addItems")}>
          Add Items
        </button>
        <button className="home-button" onClick={() => navigate("/viewItems")}>
          View Items
        </button>
      </div>
    </div>
  );
};

export default HomePage;
