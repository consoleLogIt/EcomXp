import {
    ADD_PRODUCT,
    LOAD_PRODUCTS,
    DELETE_PRODUCT,
    ENABLE_EDIT_MODE,
    DISABLE_EDIT_MODE,
    UPDATE_PRICE,
    UPDATE_DESCRIPTION,
    UPDATE_RATINGS,
    SORT_BY_PRICE,
    UNSORT,
    UPDATE_TITLE,
    PRODUCT_DETAIL
  } from "../actions";

  import { store } from "react-notifications-component";

const initialProductsState = {
  products: [],
  productDetail:null
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

  export const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
      case LOAD_PRODUCTS:
        return {
          ...state,
          products: action.products,
        };
      case ADD_PRODUCT:
        store.addNotification({
          ...notification,
          message: `${action.product.title} added `,
        });
        return {
          ...state,
          products: [action.product, ...state.products],
        };
      case DELETE_PRODUCT:
        store.addNotification({
          ...notification,
          message: `product deleted `,
        });
        modifiedArray = state.products.filter((item) => item.id !== action.id);
        return {
          ...state,
          products: modifiedArray,
        };
      case ENABLE_EDIT_MODE:
        store.addNotification({
          ...notification,
          message: "Edit Mode Turned On",
          type: "warning",
        });
        modifiedArray = state.products.map((item) => {
          if (item.id === action.id) {
            item.editMode = true;
          }
          return item;
        });
        return {
          ...state,
          products: modifiedArray,
        };
      case DISABLE_EDIT_MODE:
        store.addNotification({
          ...notification,
          message: "Edit Mode Turned Off",
          type: "warning",
        });
        modifiedArray = state.products.map((item) => {
          if (item.id === action.id) {
            item.editMode = false;
          }
          return item;
        });
        return {
          ...state,
          products: modifiedArray,
        };
      case UPDATE_PRICE:
        store.addNotification({
          ...notification,
          message: `product price updated `,
        });
        modifiedArray = state.products.map((item) => {
          if (item.id === action.id) {
            item.price = action.price;
          }
          return item;
        });
        return {
          ...state,
          products: modifiedArray,
        };
      case UPDATE_DESCRIPTION:
        store.addNotification({
          ...notification,
          message: `product description updated `,
        });
        modifiedArray = state.products.map((item) => {
          if (item.id === action.id) {
            item.description = action.description;
          }
          return item;
        });
        return {
          ...state,
          products: modifiedArray,
        };
      case UPDATE_RATINGS:
        store.addNotification({
          ...notification,
          message: `product rating updated `,
        });
        modifiedArray = state.products.map((item) => {
          if (item.id === action.id) {
            item.rating = action.rating;
          }
          return item;
        });
        return {
          ...state,
          products: modifiedArray,
        };
      case UPDATE_TITLE:
        store.addNotification({
          ...notification,
          message: `product title updated `,
        });
        modifiedArray = state.products.map((item) => {
          if (item.id === action.id) {
            item.title = action.title;
          }
          return item;
        });
        return {
          ...state,
          products: modifiedArray,
        };
      case SORT_BY_PRICE:
        store.addNotification({
          ...notification,
          message:  "filter applied",
        });
        modifiedArray = [...state.products].sort((a, b) => a.price - b.price);
        return {
          ...state,
          products: modifiedArray,
        };
      case UNSORT:
        store.addNotification({
          ...notification,
          message:  "filter removed",
        });
        modifiedArray = [...state.products].sort((a,b) => Math.random() - 0.5);
        return {
          ...state,
          products: modifiedArray,
        };
      case PRODUCT_DETAIL:
        return {
          ...state,
          productDetail:action.product
        }
      default:
        return state;
    }
  };
  