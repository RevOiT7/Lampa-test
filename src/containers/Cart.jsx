import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { CartList, OrderForm } from "../components";
import { quantityUp, quantityDown, getCartProducts } from "../actions/products";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartShall = ({ cartProducts, onGetCartProducts, ...props }) => {
  useEffect(() => {
    onGetCartProducts();
  }, [onGetCartProducts]);

  const createOrder = useCallback(
    (values) => {
      alert(JSON.stringify({ orderData: values, products: cartProducts })); // eslint-disable-line no-alert
    },
    [cartProducts]
  );

  return (
    <Wrapper>
      <CartList cartProducts={cartProducts} {...props} />
      <OrderForm onSubmit={createOrder} />
    </Wrapper>
  );
};

export const Cart = connect(
  (state) => ({
    cartProducts: state.products.cartProducts,
  }),
  (dispatch) => ({
    quantityUp: (id) => dispatch(quantityUp(id)),
    quantityDown: (id) => dispatch(quantityDown(id)),
    onGetCartProducts: () => dispatch(getCartProducts()),
  })
)(CartShall);
