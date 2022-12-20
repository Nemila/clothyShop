import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import articleSlice from "./articles";
import authSlice from "./auth";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    articles: articleSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
