import { useState, useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import Filter from "../components/Filter";
import "../styles/store.css";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { TEXTS, TITLES } from "../data/Data";

const Store = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    searchText: "",
    priceRange: 100,
    type: "",
    rangeType: "",
  });

  const { loading, error, pizzas } = useContext(PizzaContext);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const filteredPizzas = pizzas.filter((pizza) => {
    const { searchText, priceRange, type, rangeType } = filters;

    // search filter
    const matchesSearch =
      searchText !== ""
        ? pizza.name.toLowerCase().includes(searchText.toLowerCase()) ||
          pizza.description.toLowerCase().includes(searchText.toLowerCase())
        : true;

    // price filter with range type
    let matchesPrice = true;
    if (priceRange !== 0 && rangeType !== "") {
      if (rangeType === "more") {
        matchesPrice = pizza.offerPrice >= priceRange;
      } else if (rangeType === "less") {
        matchesPrice = pizza.offerPrice <= priceRange;
      }
    }

    // type filter
    const matchesType = type !== "" ? pizza.type === type : true;

    return matchesSearch && matchesPrice && matchesType;
  });

  return (
    <div className="store-section">
      <div className="store_header">
        <h3>{TITLES.STORE}</h3>
        <button onClick={() => setOpenFilter(true)} className="filter-btn">
          <FontAwesomeIcon icon={faSliders} />
        </button>
      </div>

      <div className="store-con">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => <Card key={pizza.id} item={pizza} />)
        ) : (
          <h4>{TEXTS.STORE_NO_MATCH_FILTERS}</h4>
        )}
      </div>

      {openFilter && (
        <Filter
          isFilterOpen={setOpenFilter}
          onConfirm={(selectedFilters) => setFilters(selectedFilters)}
        />
      )}
    </div>
  );
};

export default Store;
