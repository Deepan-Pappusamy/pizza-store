import { createContext, useEffect, useReducer } from "react";
import { fetchApi } from "../api/config";
import { initialState, PizzaReducer } from "../reducer/PizzaReducer";
import { imageMap } from "../data/Data";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PizzaReducer, initialState);

  useEffect(() => {
    const loadPizzas = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const rawData = await fetchApi();

        const data = rawData.map((pizza) => {
          const getOfferPercentage = () => {
            const min = 10;
            const max = 50;
            return Math.floor(Math.random() * (max - min + 1)) + min;
          };

          const getStarRating = () => {
            const ratings = [3, 3.5, 4, 4.5, 5];
            return ratings[Math.floor(Math.random() * ratings.length)];
          };

          const offerPercentage = getOfferPercentage();

          const offerPrice = Math.floor(
            pizza.actualPrice * (1 - offerPercentage / 100)
          );
          return {
            ...pizza,
            offerPercentage: offerPercentage,
            offerPrice: offerPrice,
            starRatings: getStarRating(),
            image: imageMap[pizza.image] || pizza.image,
          };
        });
        dispatch({ type: "SET_PIZZAS", payload: data });
      } catch (err) {
        dispatch({ type: "ERROR", payload: err.message });
      }
    };
    loadPizzas();
  }, []);

  console.log(state);
  return (
    <PizzaContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};
