import { createSlice } from "@reduxjs/toolkit";

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

const initialState: StateProps = {
  products: [],
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
