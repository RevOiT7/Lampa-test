import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

const Input = styled(Field)`
  padding: 1em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid black;
  cursor: pointer;
  margin-left: 35%;

  &:hover {
    background-color: blue;
  }
`;

const OrderFormShell = ({ handleSubmit }) => {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Input name="name" component="input" type="text" placeholder="Name" />
        </div>
        <div>
          <Input
            name="surname"
            component="input"
            type="text"
            placeholder="Surname"
          />
        </div>
        <div>
          <Input
            name="address"
            component="input"
            type="text"
            placeholder="Address"
          />
        </div>
        <div>
          <Input
            name="phone"
            component="input"
            type="text"
            placeholder="Phone"
          />
        </div>
        <div>
          <Button type="submit">ORDER</Button>
        </div>
      </form>
    </Wrapper>
  );
};

export const OrderForm = reduxForm({
  form: "order",
})(OrderFormShell);
