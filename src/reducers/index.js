// import {
//   ADD_PRODUCT,
//   LOAD_PRODUCTS,
//   DELETE_PRODUCT,
//   ADD_TO_CART,
//   REMOVE_FROM_CART,
//   ENABLE_EDIT_MODE,
//   DISABLE_EDIT_MODE,
//   UPDATE_PRICE,
//   UPDATE_DESCRIPTION,
//   UPDATE_RATINGS,
//   SORT_BY_PRICE,
//   UNSORT,
//   UPDATE_TITLE,
//   PRODUCT_DETAIL
// } from "../actions";
// import { store } from "react-notifications-component";

// const initialProductsState = {
//   products: [],
//   cart: [],
//   productDetail:null
// };

// const notification = {
//   title: "ExcomXp says:",
//   message: "",
//   type: "success",
//   insert: "top",
//   container: "top-right",
//   dismiss: {
//     duration: 2000,
//   },
// };
// var modifiedArray;
// export const rootReducer = (state = initialProductsState, action) => {
//   switch (action.type) {
//     case LOAD_PRODUCTS:
//       return {
//         ...state,
//         products: action.products,
//       };
//     case ADD_PRODUCT:
//       store.addNotification({
//         ...notification,
//         message: `${action.product.title} added `,
//       });
//       return {
//         ...state,
//         products: [action.product, ...state.products],
//       };
//     case DELETE_PRODUCT:
//       store.addNotification({
//         ...notification,
//         message: `${action.product.title} deleted `,
//       });
//       modifiedArray = state.products.filter((item) => item !== action.product);
//       return {
//         ...state,
//         products: modifiedArray,
//       };
//     case ADD_TO_CART:
//       store.addNotification({
//         ...notification,
//         message: `${action.product.title} added to cart `,
//       });
//       return {
//         ...state,
//         cart: [...state.cart, action.product],
//       };
//     case REMOVE_FROM_CART:
//       store.addNotification({
//         ...notification,
//         message: `${action.product.title} removed from cart `,
//       });
//       modifiedArray = state.cart.filter((item) => item !== action.product);
//       return {
//         ...state,
//         cart: modifiedArray,
//       };
//     case ENABLE_EDIT_MODE:
//       store.addNotification({
//         ...notification,
//         message: "Edit Mode Turned On",
//         type: "warning",
//       });
//       modifiedArray = state.products.map((item) => {
//         if (item === action.product) {
//           item.editMode = true;
//         }
//         return item;
//       });
//       return {
//         ...state,
//         products: modifiedArray,
//       };
//     case DISABLE_EDIT_MODE:
//       store.addNotification({
//         ...notification,
//         message: "Edit Mode Turned Off",
//         type: "warning",
//       });
//       modifiedArray = state.products.map((item) => {
//         if (item === action.product) {
//           item.editMode = false;
//         }
//         return item;
//       });
//       return {
//         ...state,
//         products: modifiedArray,
//       };
//     case UPDATE_PRICE:
//       store.addNotification({
//         ...notification,
//         message: `${action.product.title}'s price updated `,
//       });
//       modifiedArray = state.products.map((item) => {
//         if (item === action.product) {
//           item.price = action.price;
//         }
//         return item;
//       });
//       return {
//         ...state,
//         products: modifiedArray,
//       };
//     case UPDATE_DESCRIPTION:
//       store.addNotification({
//         ...notification,
//         message: `${action.product.title}'s description updated `,
//       });
//       modifiedArray = state.products.map((item) => {
//         if (item === action.product) {
//           item.description = action.description;
//         }
//         return item;
//       });
//       return {
//         ...state,
//         products: modifiedArray,
//       };
//     case UPDATE_RATINGS:
//       store.addNotification({
//         ...notification,
//         message: `${action.product.title}'s rating updated `,
//       });
//       modifiedArray = state.products.map((item) => {
//         if (item === action.product) {
//           item.rating = action.rating;
//         }
//         return item;
//       });
//       return {
//         ...state,
//         products: modifiedArray,
//       };
//     case UPDATE_TITLE:
//       store.addNotification({
//         ...notification,
//         message: `${action.product.title}'s title updated `,
//       });
//       modifiedArray = state.products.map((item) => {
//         if (item === action.product) {
//           item.title = action.title;
//         }
//         return item;
//       });
//       return {
//         ...state,
//         products: modifiedArray,
//       };
//     case SORT_BY_PRICE:
//       store.addNotification({
//         ...notification,
//         message:  "filter applied",
//       });
//       modifiedArray = [...state.products].sort((a, b) => a.price - b.price);
//       return {
//         ...state,
//         products: modifiedArray,
//       };
//     case UNSORT:
//       store.addNotification({
//         ...notification,
//         message:  "filter removed",
//       });
//       modifiedArray = [...state.products].sort((a,b) => Math.random() - 0.5);
//       return {
//         ...state,
//         products: modifiedArray,
//       };
//     case PRODUCT_DETAIL:
//       console.log("product----->1111")
//       return {
//         ...state,
//         productDetail:action.product
//       }
//     default:
//       return state;
//   }
// };
import { combineReducers } from 'redux';
import {productsReducer} from './products'
import {cartReducer} from './cart'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key:'root',
  storage,
  whitelist:['cartReducer']
}

const rootReducer = combineReducers({
  productsReducer,
  cartReducer
})

export default persistReducer(persistConfig,rootReducer)

