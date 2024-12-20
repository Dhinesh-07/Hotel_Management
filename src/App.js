import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddItemsPage from "./pages/AddItemsPage";
import ProductListPage from "./pages/ProductListPage";
import EditHotelPage from "./pages/EditHotlePage";

const App = () => {
  return (
    <div className="App">
      {/* <ProductListPage /> */}
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewItems" element={<ProductListPage />} />
        <Route path="/addItems" element={<AddItemsPage />} />
        <Route path="/editHotel/:id" element={<EditHotelPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
