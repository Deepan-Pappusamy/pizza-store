import "../styles/topoffers.css";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Card from "./Card";
import Loading from "./Loading";
import Error from "./Error";
import { TITLES } from "../data/Data";

const TopOffers = () => {
  const { pizzas, loading, error } = useContext(PizzaContext);

  const highOffersPizzas = [...pizzas]
    .sort((a, b) => b.offerPercentage - a.offerPercentage)
    .slice(0, 3);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="offers-section">
      <h2 className="offers-title">{TITLES.TOP_3_PICS_FOR_YOU}</h2>

      <div className="offers-flex">
        {highOffersPizzas.map((pizza) => (
          <Card key={pizza.id} item={pizza} />
        ))}
      </div>
    </div>
  );
};

export default TopOffers;
