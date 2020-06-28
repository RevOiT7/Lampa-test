import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as CartSvg } from "../assets/CartSvg.svg";
import { ReactComponent as BackButtonSvg } from "../assets/BackButtonSvg.svg";

const Wrapper = styled.div`
  background-color: grey;
  width: 100%;
  height: 50px;
  position: relative;
`;

const BackButton = styled(BackButtonSvg)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 10px;
  top: 5px;
`;

const TotalPrice = styled.div`
  color: black;
  margin-right: 5px;
  font-weight: bold;
  position: absolute;
  right: 50px;
  top: 15px;
`;

const Icon = styled(CartSvg)`
  transition: fill 0.25s;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: absolute;
  right: 0;

  &:hover {
    fill: rebeccapurple;
  }
`;

export const Header = ({ total }) => {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      {pathname !== "/" && (
        <Link to="/">
          <BackButton />
        </Link>
      )}
      {total !== 0 && <TotalPrice>{`${total}$`}</TotalPrice>}
      <Link to="/cart">
        <Icon />
      </Link>
    </Wrapper>
  );
};
