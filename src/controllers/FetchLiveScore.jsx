import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define your API call here
export const fetchLiveScores = createAsyncThunk(
  "football/fetchLiveScores",
  async () => {
    const response = await axios.get(
      `https://api.sportmonks.com/v3/football/fixtures`,
      {
        params: {
          api_token:
            "L3Bn8ZB6nHmk65k5ATpOxsbK8Htf2KWzSdZ1od7yXnqYLKWUPWSPw1yE9Osf",
        },
      }
    );
    return response.data.data;
  }
);
