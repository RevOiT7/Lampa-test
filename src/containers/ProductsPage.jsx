import React, { useCallback } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ProductList } from "../components";
import { setTotalPrice } from "../actions/products";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const ProductsPageShall = ({ data, setTotal, currentTotalPrice }) => {
  const itemsArray = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const addToCart = useCallback(
    (product) => {
      const isItemAdded = itemsArray.some((item) => item.name === product.name);
      if (!isItemAdded) {
        itemsArray.push(product);
        localStorage.setItem("products", JSON.stringify(itemsArray));
        setTotal(product.price + currentTotalPrice);
      }
    },
    [currentTotalPrice, itemsArray, setTotal]
  );

  return (
    <Wrapper>
      <ProductList data={data} addToCart={addToCart} />
    </Wrapper>
  );
};

export const ProductsPage = connect(
  (state) => ({
    data: state.products.products,
    currentTotalPrice: state.products.totalPrice,
  }),
  (dispatch) => ({
    setTotal: (price) => dispatch(setTotalPrice(price)),
  })
)(ProductsPageShall);
