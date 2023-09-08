import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const products = (state: RootState) => state.wishList.products;

export const selectProductsCount = createSelector([products], (products) => {
  let count = 0;
  products.forEach((item) => count++);
  return count;
});

export const selectProductAlreadyOnCart = (id: number) =>
  createSelector([products], (products) => {
    return products.some((product) => product.id === id);
  });
