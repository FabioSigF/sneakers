import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  isOpen: boolean;
}

const initialState: StateProps = {
  isOpen: false,
};

export const MobileHeaderSlice = createSlice({
  name: "mobileHeader",
  initialState,
  reducers: {
    onToggle: (state, action) => {
      state.isOpen = !state.isOpen.valueOf();
    },
  },
});

export const { onToggle } = MobileHeaderSlice.actions;

export default MobileHeaderSlice.reducer;
