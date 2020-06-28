import React from "react";

import { ProductItem } from "./ProductItem";

export const ProductList = ({ data, ...props }) =>
  data
    ? data.map((item) => <ProductItem key={item.id} {...item} {...props} />)
    : null;
