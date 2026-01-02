import React, { useState } from "react";
import "../styles/filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BUTTONS, TEXTS, TITLES, ICONS } from "../data/Data";

const Filter = ({ isFilterOpen, onConfirm }) => {
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState(100);
  const [type, setType] = useState("");
  const [rangeType, setRangeType] = useState("");

  // handlers
  const handleSearchChange = (e) => setSearchText(e.target.value);
  const handlePriceChange = (e) => setPriceRange(Number(e.target.value));

  // confirm handler
  const handleConfirm = () => {
    onConfirm({
      searchText,
      priceRange,
      type,
      rangeType,
    });
    isFilterOpen(false);
  };

  return (
    <div className="filter-section">
      <div className="filter-con">
        <div className="filter_header">
          <h3>{TITLES.FILTERS}</h3>
          <button onClick={() => isFilterOpen(false)}>
            <FontAwesomeIcon icon={ICONS.CROSS} />
          </button>
        </div>
        <div className="filters">
          <div className="filter-group">
            <p>{TEXTS.FILTER_SEARCH_PIZZA}</p>
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
          <div className="filter-group">
            <label>
              <input
                type="radio"
                name="type"
                value="Veg"
                checked={type === "Veg"}
                onChange={(e) => setType(e.target.value)}
              />
              {TEXTS.FILTER_VEG}
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="Non-Veg"
                checked={type === "Non-Veg"}
                onChange={(e) => setType(e.target.value)}
              />
              {TEXTS.FILTER_NON_VEG}
            </label>
          </div>

          <div className="filter-group">
            <label>
              {TEXTS.FILTER_PRICE_RANGE} {priceRange}
            </label>
            <input
              type="range"
              min="100"
              max="1000"
              step="10"
              value={priceRange}
              onChange={handlePriceChange}
            />
            <div className="filter-group">
              <label>
                <input
                  type="radio"
                  name="range"
                  value="more"
                  checked={rangeType === "more"}
                  onChange={(e) => setRangeType(e.target.value)}
                />
                {TEXTS.FILTER_MORE_THAN} {priceRange}
              </label>
              <label>
                <input
                  type="radio"
                  name="range"
                  value="less"
                  checked={rangeType === "less"}
                  onChange={(e) => setRangeType(e.target.value)}
                />
                {TEXTS.FILTER_LESS_THAN} {priceRange}
              </label>
            </div>
          </div>
        </div>
        <div className="filter-footer">
          <button className="confirm-btn" onClick={handleConfirm}>
            {BUTTONS.CONFIRM}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
