import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define your API call here
export const fetchFixtures = createAsyncThunk(
  "football/fetchFixtures",
  async (leagueId) => {
    const response = await axios.get(`/api/v3/football/fixtures`, {
      params: {
        api_token:
          "L3Bn8ZB6nHmk65k5ATpOxsbK8Htf2KWzSdZ1od7yXnqYLKWUPWSPw1yE9Osf",
        league_id: leagueId,
      },
    });
    console.log(response.data);
    return response.data.data;
  }
);
