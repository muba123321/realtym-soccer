import { configureStore } from "@reduxjs/toolkit";
import soccerReducer from "./soccer/soccerslice";
export const store = configureStore({
  reducer: {
    soccer: soccerReducer,
  },
});
