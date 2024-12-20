import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HotelRoomCard from "../components/HotelRoomCard";
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotels } from "../redux/hotelSlice"; // Update the Redux action
import "../styles/Hotel.css";

const HotelListPage = () => {
  const { items: hotels, status, error } = useSelector((state) => state.hotels);

  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 4;

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const totalPages = Math.ceil(hotels.length / hotelsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="hotel-list">
          {currentHotels.map((hotel, index) => (
            <HotelRoomCard key={index} hotel={hotel} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default HotelListPage;
