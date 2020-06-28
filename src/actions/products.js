import { MOCK_API_DATA } from "../constants/index";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
export const SET_INITIAL_TOTAL_PRICE = "SET_INITIAL_TOTAL_PRICE";
export const SET_CART_PRODUCTS = "SET_CART_PRODUCTS";
export const QTY_UP = "QTY_UP";
export const QTY_DOWN = "QTY_DOWN";

export const getProducts = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: MOCK_API_DATA });
  }, 2000);
};

export const getCartProducts = () => (dispatch) => {
  const cartProducts = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const initialTotalPrice = cartProducts.reduce((accum, value) => {
    return accum + value.price * value.quantity;
  }, 0);

  dispatch({ type: SET_INITIAL_TOTAL_PRICE, payload: initialTotalPrice });
  dispatch({ type: SET_CART_PRODUCTS, payload: cartProducts });
};

export const quantityUp = ({ id, price }) => (dispatch, getState) => {
  const cartProducts = JSON.parse(localStorage.getItem("products")).map(
    (item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }
  );
  localStorage.setItem("products", JSON.stringify(cartProducts));
  dispatch({
    type: QTY_UP,
    payload: cartProducts,
    totalPrice: getState().products.totalPrice + price,
  });
};

export const quantityDown = ({ id, price }) => (dispatch, getState) => {
  const cartProducts = JSON.parse(localStorage.getItem("products"))
    .map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity !== 0);

  localStorage.setItem("products", JSON.stringify(cartProducts));
  dispatch({
    type: QTY_DOWN,
    payload: cartProducts,
    totalPrice: getState().products.totalPrice - price,
  });
};

export const setTotalPrice = (price) => ({
  type: SET_TOTAL_PRICE,
  payload: price,
});
