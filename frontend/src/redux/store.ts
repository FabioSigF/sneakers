import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux/";
import { CartSlice } from "./cart/slice";
import { DeviceTypeSlice } from "./deviceType/slice";
import { MobileHeaderSlice } from "./mobileHeader/slice";
import { AuthenticationModalSlice } from "./modal/authentication/slice";
import { QuickViewSlice } from "./modal/quickView/slice";
import { WishListSlice } from "./wishList/slice";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    deviceType: DeviceTypeSlice.reducer,
    mobileHeader: MobileHeaderSlice.reducer,
    modalAuthentication: AuthenticationModalSlice.reducer,
    modalQuickView: QuickViewSlice.reducer,
    wishList: WishListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
