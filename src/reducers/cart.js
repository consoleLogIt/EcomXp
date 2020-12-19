import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";
import { store } from "react-notifications-component";

const initialCartState = {
  cart: [],
};

const notification = {
  title: "ExcomXp says:",
  message: "",
  type: "success",
  insert: "top",
  container: "top-right",
  dismiss: {
    duration: 2000,
  },
};
var modifiedArray;

export const  cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      store.addNotification({
        ...notification,
        message: `${action.product.title} added to cart `,
      });
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case REMOVE_FROM_CART:
      store.addNotification({
        ...notification,
        message: `product removed from cart `,
      });
      modifiedArray = state.cart.filter((item) => item.id !== action.id);
      return {
        ...state,
        cart: modifiedArray,
      };
      default:
        return state;
  }
};
