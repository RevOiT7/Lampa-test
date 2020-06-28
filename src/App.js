import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { ProductsPage, Cart } from "./containers";
import { Header } from "./components";
import { getProducts, getCartProducts } from "./actions/products";

const AppShell = ({ onGetProducts, total, onGetCartProducts }) => {
  useEffect(() => {
    onGetProducts();
    onGetCartProducts();
  }, [onGetCartProducts, onGetProducts]);

  return (
    <>
      <Router>
        <Header total={total} />
        <Route exact path="/" component={ProductsPage} />
        <Route path="/cart" component={Cart} />
      </Router>
    </>
  );
};

export const App = connect(
  (state) => ({
    total: state.products.totalPrice,
  }),
  (dispatch) => ({
    onGetProducts: () => dispatch(getProducts()),
    onGetCartProducts: () => dispatch(getCartProducts()),
  })
)(AppShell);
