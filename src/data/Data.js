import MargheritaPizza from "../assets/photos/Pizzas/Margherita Pizza.jpg";
import VeggieSupremePizza from "../assets/photos/Pizzas/Veggie Supreme Pizza.jpg";
import PaneerTikkaPizza from "../assets/photos/Pizzas/Paneer Tikka Pizza.jpg";
import CheeseBurstPizza from "../assets/photos/Pizzas/Cheese Burst Pizza.jpg";
import FarmhousePizza from "../assets/photos/Pizzas/Farmhouse Pizza.jpg";
import PepperoniPizza from "../assets/photos/Pizzas/Pepperoni Pizza.jpg";
import BBQChickenPizza from "../assets/photos/Pizzas/BBQ Chicken Pizza.jpg";
import ChickenTikkaPizza from "../assets/photos/Pizzas/Chicken Tikka Pizza.jpg";
import MeatLoversPizza from "../assets/photos/Pizzas/Meat Lovers Pizza.jpg";

import {
  faCircle,
  faXmark,
  faStore,
  faShoppingCart,
  faUser,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

export const ICONS = {
  CIRCLE: faCircle,
  CROSS: faXmark,
  STORE: faStore,
  CART: faShoppingCart,
  USER: faUser,
  UP_ARROW: faCaretUp,
};

export const imageMap = {
  "MargheritaPizza.jpg": MargheritaPizza,
  "VeggieSupremePizza.jpg": VeggieSupremePizza,
  "PaneerTikkaPizza.jpg": PaneerTikkaPizza,
  "CheeseBurstPizza.jpg": CheeseBurstPizza,
  "FarmhousePizza.jpg": FarmhousePizza,
  "PepperoniPizza.jpg": PepperoniPizza,
  "BBQChickenPizza.jpg": BBQChickenPizza,
  "ChickenTikkaPizza.jpg": ChickenTikkaPizza,
  "MeatLoversPizza.jpg": MeatLoversPizza,
};

export const BUTTONS = {
  //HERO
  EXPLORE_PIZZA: "Explore Pizza",
  BUILD_MY_PIZZA: "Build My Pizza",

  //CUSTOMER SUPPORT
  SEND: "Send",

  //FILTER
  CONFIRM: "Confirm",

  //STORE
  GO_TO_STORE: "Go to Store",

  //CART
  REMOVE: "Remove",
  CLEAR_ALL: "Clear All",
  ADD_TO_CART: "Add To Cart",
  ALREADY_IN_CART: "Already In Cart",

  //ERROR
  BACK_TO_HOME: "Back to Home",
};

export const TITLES = {
  TOP_3_PICS_FOR_YOU: "Top 3 Picks For You",
  CUSTOMIZATION_START: "Customization starts with choices.",
  STORE: "Store",
  FILTERS: "Filters",
};

export const TEXTS = {
  //HERO
  HUNGRY: "HUNGRY",
  HUNGRY_SUBTEXT: "Your pizza is one click away",
  HERO_TRUST: "4.8 ⭐ - 1200+reviews | 6+ 🏆 pizza awards | 🚚 fast delivery",

  //CUSTOMIZATION
  CUSTOMIZATION_CRUST: "Crust - Thin or Thick",
  CUSTOMIZATION_SIZE: "Size - Small or Large",
  CUSTOMIZATION_SPICE: "Spice - Mild or Spicy",
  CUSTOMIZATION_TOPPINGS: "Toppings - Veg or Nonveg",
  CUSTOMIZATION_CHEESE: "Cheese - Regular or Extra",

  //CUSTOMER SUPPORT
  MESSAGE_HI_HEART: "Hii..🤍",
  MESSAGE_HEY_BUDDY_HEART: "Hey Buddy 🤎",
  MESSAGE_DONT_HESITATE: "Don't hesitate to ask",
  MESSAGE_HERE_TO_HELP: "- we're here to help you ",
  MEASSAGE_DETAILS:
    "with orders, customizations, or anything else. we'll assist you right away.",
  MESSAGE_TYPE_BELOW: "Just type your question below..👇🏻",

  //STORE
  STORE_NO_MATCH_FILTERS: "No pizzas match your filters :(",
  //FILTERS
  FILTER_SEARCH_PIZZA: "Search Pizza:",
  FILTER_VEG: "Veg",
  FILTER_NON_VEG: "Non-veg",
  FILTER_PRICE_RANGE: "Price Range: ₹",
  FILTER_MORE_THAN: "More than",
  FILTER_LESS_THAN: "Less than",

  //CART
  CART_EMPTY: "Cart is empty, but your stomach doesn’t have to be…",
  CART_SUB_TOTAL: "Subtotal: ₹",
  CART_TOTAL: "Total: ₹",

  //CARD
  CARD_OFF: "% OFF",

  //ERROR
  ERROR_SOMETHING_WRONG: "Database oven overheated…",

  //LOADING
  FETCHING_DATA: "Fetching Data Please Wait...",
};

export const SYMBOLS = {
  INCREASE: "+",
  DECREASE: "-",
  QUESTION_MARK: "?",
  RUPEES: "₹",
};
