import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DeviceTypes {
  mobile: boolean;
  tablet: boolean;
  laptop: boolean;
}

const initialState: DeviceTypes = {
  mobile: true,
  tablet: false,
  laptop: false,
};

export const DeviceTypeSlice = createSlice({
  name: "devicetype",
  initialState,
  reducers: {
    setDeviceType: (state, action : PayloadAction<{screenSize: number}>) => {
      const screenSize = action.payload.screenSize;
      if (screenSize < 768) {
        state.mobile = true;
        state.tablet = false;
        state.laptop = false;
      } else if (screenSize < 1024) {
        state.mobile = false;
        state.tablet = true;
        state.laptop = false;
      } else {
        state.mobile = false;
        state.tablet = false;
        state.laptop = true;
      }
    },
  },
});

export const { setDeviceType } = DeviceTypeSlice.actions;

export default DeviceTypeSlice.reducer;
