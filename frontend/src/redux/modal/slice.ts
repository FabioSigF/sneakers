import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  isOpen: boolean;
}

const initialState: StateProps = {
  isOpen: false,
}

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onToggle: (state, _) => {
      state.isOpen = !state.isOpen.valueOf();
    }
  }
})

export const {onToggle} = ModalSlice.actions;

export default ModalSlice.reducer;