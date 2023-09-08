import { createSlice } from "@reduxjs/toolkit";
import { selectProductsTotalPrice } from "./selectors";
import { toast } from "react-toastify";

export interface Product {
  title: string;
  price: number;
  size: number;
  quantity: number;
  photo: Photo;
  id: number;
}

interface Photo {
  id: number;
  photo_link: string;
}

interface StateProps {
  isOpen: boolean;
  products: Product[];
}

const products =
  localStorage.getItem("cart_products") !== null 
    ? JSON.parse(localStorage.getItem("cart_products") || "")
    : [];

const initialState: StateProps = {
  isOpen: false,
  products: products,
};

export const CartSlice = createSlice({
  name: "sidebar/cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
      );

      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product
        );
        localStorage.setItem(
          "cart_products",
          JSON.stringify(state.products.map((item) => item))
        );
        localStorage.setItem(
          "cart_products_totalPrice",
          JSON.stringify(selectProductsTotalPrice)
        );
        return;
      }

      state.products = [
        ...state.products,
        { ...action.payload, quantity: action.payload.quantity },
      ];
      localStorage.setItem(
        "cart_products",
        JSON.stringify(state.products.map((item) => item))
      );
      toast.success("Produto adicionado do carrinho!")
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) =>
          product.id !== action.payload.id ||
          (product.id === action.payload.id &&
            product.size !== action.payload.size)
      );
      localStorage.setItem(
        "cart_products",
        JSON.stringify(state.products.map((item) => item))
      );
      toast.success("Produto removido do carrinho!")
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id && product.size === action.payload.size
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      );
      localStorage.setItem(
        "cart_products",
        JSON.stringify(state.products.map((item) => item))
      );
    },
    decreaseProductQuantity: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        )
        .filter((product) => product.quantity > 0);
      localStorage.setItem(
        "cart_products",
        JSON.stringify(state.products.map((item) => item))
      );
    },
    onToggle: (state, _) => {
      state.isOpen = !state.isOpen.valueOf();
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  onToggle,
} = CartSlice.actions;

export default CartSlice.reducer;
