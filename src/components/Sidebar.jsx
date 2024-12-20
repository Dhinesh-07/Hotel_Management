import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    relatedItems: true,
    hotelChains: true,
    price: true,
    roomType: true,
    ratings: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <aside className="sidebar">
      <section>
        <h3 onClick={() => toggleSection("relatedItems")}>
          Related Items
          <FontAwesomeIcon
            icon={openSections.relatedItems ? faChevronUp : faChevronDown}
            className="dropdown-icon"
          />
        </h3>
        {openSections.relatedItems && (
          <ul>
            <li><input type="checkbox" /> Hotels</li>
            <li><input type="checkbox" /> Resorts</li>
            <li><input type="checkbox" /> Villas</li>
            <li><input type="checkbox" /> Hostels</li>
            <li><input type="checkbox" /> Holiday Homes</li>
            <li><input type="checkbox" /> Bed & Breakfast</li>
            <li><input type="checkbox" /> Motels</li>
          </ul>
        )}
      </section>

      <section>
        <h3 onClick={() => toggleSection("brands")}>
        Hotel Chains
        <FontAwesomeIcon
          icon={openSections.relatedItems ? faChevronUp : faChevronDown}
          className="dropdown-icon"
        />
        </h3>
        {openSections.hotelChains && (
          <ul>
            <li><input type="checkbox" /> Marriott (120)</li>
            <li><input type="checkbox" /> Hilton (90)</li>
            <li><input type="checkbox" /> Hyatt (80)</li>
            <li><input type="checkbox" /> InterContinental (50)</li>
            <li><input type="checkbox" /> Radisson (60)</li>
            <li><input type="checkbox" /> Wyndham (70)</li>
          </ul>
        )}
      </section>

      <section>
  <h3 onClick={() => toggleSection("price")}>
    Price
    <FontAwesomeIcon
      icon={openSections.relatedItems ? faChevronUp : faChevronDown}
      className="dropdown-icon"
    />
  </h3>
  {openSections.price && (
    <>
      <div className="price-range">
        <div>
          <h5>Min</h5>
          <input type="number" placeholder="$10" />
        </div>
        <div>
          <h5>Max</h5>
          <input type="number" placeholder="$1,0000" />
        </div>
      </div>
     
    </>
  )}
</section>

      <section>
        <h3 onClick={() => toggleSection("roomType")}>
          Size
        <FontAwesomeIcon
          icon={openSections.relatedItems ? faChevronUp : faChevronDown}
          className="dropdown-icon"
        />
        </h3>
        {openSections.roomType && (
          <>
            <button className="size-button">Single</button>
            <button className="size-button">Double</button>
            <button className="size-button">Deluxe</button>
            <button className="size-button">Suite</button>
          </>
        )}
      </section>
      <button className="price-button">APPLY</button>
    </aside>
  );
};

export default Sidebar;
