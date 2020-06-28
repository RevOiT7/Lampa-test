import {
  FETCH_PRODUCTS_SUCCESS,
  SET_TOTAL_PRICE,
  SET_INITIAL_TOTAL_PRICE,
  SET_CART_PRODUCTS,
  QTY_UP,
  QTY_DOWN,
} from "../actions/products";

const initialState = {
  products: [],
  totalPrice: 0,
  cartProducts: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case SET_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case SET_INITIAL_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case SET_CART_PRODUCTS:
      return { ...state, cartProducts: action.payload };
    case QTY_UP:
      return {
        ...state,
        cartProducts: action.payload,
        totalPrice: action.totalPrice,
      };
    case QTY_DOWN:
      return {
        ...state,
        cartProducts: action.payload,
        totalPrice: action.totalPrice,
      };
    default:
      return state;
  }
};

export default products;
