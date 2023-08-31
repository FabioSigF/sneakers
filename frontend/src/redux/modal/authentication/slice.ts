import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  isOpen: boolean;
}

const initialState: StateProps = {
  isOpen: false,
};

export const AuthenticationModalSlice = createSlice({
  name: "modal/authentication",
  initialState,
  reducers: {
    onToggle: (state, _) => {
      state.isOpen = !state.isOpen.valueOf();
    }
  },
});

export const { onToggle } = AuthenticationModalSlice.actions;

export default AuthenticationModalSlice.reducer;
