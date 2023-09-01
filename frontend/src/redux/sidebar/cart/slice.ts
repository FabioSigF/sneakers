import { createSlice } from "@reduxjs/toolkit";

interface Product {
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
  totalPrice: number;
}

const initialState: StateProps = {
  isOpen: false,
  products: [],
  totalPrice: 0,
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

        return;
      }

      state.products = [
        ...state.products,
        { ...action.payload, quantity: action.payload.quantity },
      ];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => (
          (product.id !== action.payload.id) || 
          (product.id === action.payload.id &&
            product.size !== action.payload.size)
          )
      );
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
