import { createSlice } from "@reduxjs/toolkit";
import { fetchLiveScores } from "../../controllers/FetchLiveScore";

const soccerSlice = createSlice({
  name: "soccer",
  initialState: {
    liveScores: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLiveScores.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLiveScores.fulfilled, (state, action) => {
        state.liveScores = action.payload;
        state.status = "success";
      })
      .addCase(fetchLiveScores.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default soccerSlice.reducer;
