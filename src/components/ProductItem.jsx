import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: grey;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const Title = styled.h1`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const Price = styled.p`
  color: #671818e0;
  font-size: 2em;
  font-weight: bold;
`;

const Button = styled.button`
  width: 50%;
  color: #494949;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: #ffffff;
  padding: 10px;
  border: 4px solid #494949;
  border-radius: 6px;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #494949;
    border-radius: 50px;
    border-color: #494949;
    transition: all 0.3s ease 0s;
  }
  &:focus {
    outline: none;
  }
`;

export const ProductItem = ({ name, price, imgUrl, addToCart, id }) => {
  return (
    <Wrapper>
      <Image src={imgUrl} alt={name}></Image>
      <Title>{name}</Title>
      <Price>{`${price}$`}</Price>
      <Button
        onClick={() => addToCart({ name, price, imgUrl, id, quantity: 1 })}
      >
        Buy
      </Button>
    </Wrapper>
  );
};
