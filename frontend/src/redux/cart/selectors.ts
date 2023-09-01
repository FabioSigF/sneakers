import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "./slice";

const products = (state: RootState) => state.cart.products;

export const selectProductsCount = createSelector([products], (products) =>
  products.reduce((acc: number, curr: Product) => (acc += curr.quantity), 0)
);

export const selectProductsTotalPrice = createSelector(
  [products],
  (products) => {
    const totalPrice =  products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    return Number(totalPrice.toFixed(2));
  }
);
