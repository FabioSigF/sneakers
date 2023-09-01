import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  title: string;
  rating: number;
  price: number;
  promotion: number;
  photos: Photo[];
  id: number;
  isOpen: boolean;
}

interface Photo {
  id: number;
  photo_link: string;
}

const initialState: StateProps = {
  title: "",
  rating: 0,
  price: 0,
  promotion: 0,
  photos: [],
  isOpen: false,
  id: 0
};

export const QuickViewSlice = createSlice({
  name: "modal/quickView",
  initialState,
  reducers: {
    setStates: (state, action) => {
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.rating = action.payload.rating;
      state.promotion = action.payload.promotion;
      state.photos = action.payload.photos;
      state.id = action.payload.id;
    },
    onToggle: (state, _) => {
      state.isOpen = !state.isOpen.valueOf();
    }
  },
});

export const { setStates, onToggle } = QuickViewSlice.actions;

export default QuickViewSlice.reducer;
