import { createSlice } from "@reduxjs/toolkit";
import { fetchLeagues } from "../../controllers/FetchLeagues";

const soccerSlice = createSlice({
  name: "soccer",
  initialState: {
    leagues: [],
    status: null,
    pagination: {},
  },
  reducers: {
    selectLeague: (state, action) => {
      state.selectedLeague = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeagues.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLeagues.fulfilled, (state, action) => {
        state.leagues = [...state.leagues, ...action.payload.data];
        state.pagination = action.payload.pagination;
        state.status = "success";
      })
      .addCase(fetchLeagues.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default soccerSlice.reducer;
