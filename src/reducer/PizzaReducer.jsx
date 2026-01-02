import { updateCartState } from "../../utils/cartUtils";

export const initialState = {
  pizzas: [],
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  cartValue: 0,
  loading: true,
  error: null,
};

export const PizzaReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "SET_PIZZAS":
      return { ...state, pizzas: action.payload, loading: false };

    case "ERROR":
      return { ...state, loading: false, error: action.payload };

    case "ADD_TO_CART": {
      const existing = state.cart.find((i) => i.id === action.payload.id);
      let updatedCart;

      if (existing) {
        updatedCart = state.cart.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      return { ...state, ...updateCartState(updatedCart) };
    }

    case "INCREASE_QTY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, ...updateCartState(updatedCart) };
    }

    case "DECREASE_QTY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, ...updateCartState(updatedCart) };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, ...updateCartState(updatedCart) };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
        cartValue: 0,
      };

    default:
      return state;
  }
};
