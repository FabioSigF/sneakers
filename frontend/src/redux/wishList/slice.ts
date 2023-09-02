import { createSlice } from "@reduxjs/toolkit";
import { selectProductsTotalPrice } from "../cart/selectors";

interface StateProps {
  products: Product[];
}

interface Photo {
  id: number;
  photo_link: string;
}

export interface Product {
  title: string;
  price: number;
  photo: Photo;
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

      localStorage.setItem('wish_list_products', JSON.stringify(state.products.map((item) => item)))
      return;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const {
  addProduct,
  removeProduct,
} = WishListSlice.actions;

export default WishListSlice.reducer;
