import { createSlice } from "@reduxjs/toolkit";
import { fetchLeagues } from "../../controllers/FetchLeagues";
import { fetchFixtures } from "../../controllers/FetchFixtures";

const soccerSlice = createSlice({
  name: "soccer",
  initialState: {
    leagues: [],
    status: "idle",
    pagination: {},
    selectedLeague: null,
    fixtures: [],
  },
  reducers: {
    selectLeague: (state, action) => {
      state.selectedLeague = action.payload;
    },
    resetLeagues: (state) => {
      state.leagues = [];
      state.pagination = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeagues.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLeagues.fulfilled, (state, action) => {
        state.leagues = action.payload.data;
        state.pagination = action.payload.pagination;
        state.status = "success";
      })
      .addCase(fetchLeagues.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchFixtures.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFixtures.fulfilled, (state, action) => {
        state.fixtures = action.payload;
        state.status = "success";
      })
      .addCase(fetchFixtures.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { selectLeague, resetLeagues } = soccerSlice.actions;
export default soccerSlice.reducer;
