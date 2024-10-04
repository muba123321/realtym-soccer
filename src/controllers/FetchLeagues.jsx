import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeagues = createAsyncThunk(
  "soccer/fetchLeagues",
  async (page = 1) => {
    const response = await axios.get("/api/v3/football/leagues", {
      params: {
        api_token:
          "L3Bn8ZB6nHmk65k5ATpOxsbK8Htf2KWzSdZ1od7yXnqYLKWUPWSPw1yE9Osf",
        page,
      },
    });
    console.log(response.data);
    return response.data;
  }
);
