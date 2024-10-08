import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiToken = import.meta.env.VITE_API_TOKEN;

const apiBaseUrl = import.meta.env.PROD ? import.meta.env.VITE_API_URL : "/api";

export const fetchLeagues = createAsyncThunk(
  "soccer/fetchLeagues",
  async (page = 1) => {
    const response = await axios.get(`${apiBaseUrl}/v3/football/leagues`, {
      params: {
        api_token: apiToken,
        // "L3Bn8ZB6nHmk65k5ATpOxsbK8Htf2KWzSdZ1od7yXnqYLKWUPWSPw1yE9Osf",
        page,
      },
    });
    console.log(response.data);
    return response.data;
  }
);
