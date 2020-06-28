import React from "react";
import styled from "styled-components";

import { ReactComponent as plus } from "../assets/plus.svg";
import { ReactComponent as minus } from "../assets/minus.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #76a6a1;
  margin: 2% 0 2% 5%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Description = styled.p`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const Price = styled.p`
  color: red;
  font-size: 14px;
  font-weight: bold;
`;

const Quantity = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconPlus = styled(plus)`
  transition: fill 0.25s;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const IconMinus = styled(minus)`
  transition: fill 0.25s;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const Span = styled.span`
  color: "white";
  font-size: 1em;
`;

export const CartItem = ({
  name,
  price,
  imgUrl,
  id,
  quantity,
  quantityUp,
  quantityDown,
}) => {
  return (
    <Wrapper>
      <Image src={imgUrl} alt={name}></Image>
      <Description>{name}</Description>
      <Price>{price}</Price>
      <Quantity>
        <IconMinus onClick={() => quantityDown({ price, id })} />
        <Span>{quantity}</Span>
        <IconPlus onClick={() => quantityUp({ price, id })} />
      </Quantity>
    </Wrapper>
  );
};
