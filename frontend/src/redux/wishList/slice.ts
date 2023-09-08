import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface StateProps {
  products: Product[];
}

export interface Product {
  title: string;
  price: number;
  promotion: number;
  id: number;
}

const products =
  localStorage.getItem("wish_list_products") !== null
    ? JSON.parse(localStorage.getItem("wish_list_products") || "")
    : [];

const initialState: StateProps = {
  products: products,
};

export const WishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (!productIsAlreadyInCart) {
        state.products.push(action.payload);
      }

      localStorage.setItem(
        "wish_list_products",
        JSON.stringify(state.products.map((item) => item))
      );
      toast.success("Produto adicionado à Lista de Desejos!")
      return;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem(
        "wish_list_products",
        JSON.stringify(state.products.map((item) => item))
      );
      toast.success("Produto removido da Lista de Desejos!")
    },
  },
});

export const { addProduct, removeProduct } = WishListSlice.actions;

export default WishListSlice.reducer;
