export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ENABLE_EDIT_MODE = "ENABLE_EDIT_MODE";
export const DISABLE_EDIT_MODE = "DISABLE_EDIT_MODE";
export const UPDATE_RATINGS = "UPDATE_RATINGS";
export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const UNSORT = "UNSORT";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";

// action_creaters

export const LoadProduct = (products) => {
  return {
    type: LOAD_PRODUCTS,
    products,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

export const enableEditMode = (id) => {
  return {
    type: ENABLE_EDIT_MODE,
    id,
  };
};
export const disableEditMode = (id) => {
  return {
    type: DISABLE_EDIT_MODE,
    id,
  };
};

export const updatePrice = (id, price) => {
  return {
    type: UPDATE_PRICE,
    id,
    price,
  };
};

export const updateRatings = (id, rating) => {
  return {
    type: UPDATE_RATINGS,
    id,
    rating,
  };
};

export const updateDescription = (id, description) => {
  return {
    type: UPDATE_DESCRIPTION,
    id,
    description,
  };
};

export const updateTitle = (id, title) => {
  return {
    type: UPDATE_TITLE,
    id,
    title,
  };
};


export const viewProductDetail = (product) => {
  return {
    type:PRODUCT_DETAIL,
    product
  }
}

export const sortByPrice = () => {
  return {
    type: SORT_BY_PRICE,
  };
};

export const unsort = () => {
  return {
    type: UNSORT,
  };
};
