import axios from "axios";

export const fetchProducts = async () => {
  return await axios.get(
    "https://my-json-server.typicode.com/consoleLogIt/DummyEcom/products"
  );
};

// export const addProduct = async () => {

// }

// export const deleteProduct = async () => {

// }

// export const editProduct = async () => {

// }
