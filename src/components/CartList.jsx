import React from "react";
import styled from "styled-components";

import { CartItem } from "./CartItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const CartList = ({ cartProducts, ...props }) => (
  <Wrapper>
    {cartProducts.map((item) => (
      <CartItem key={item.id} {...item} {...props} />
    ))}
  </Wrapper>
);
