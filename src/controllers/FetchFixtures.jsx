import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiToken = import.meta.env.VITE_API_TOKEN;
export const fetchFixtures = createAsyncThunk(
  "soccer/fetchFixtures",
  async (leagueId) => {
    const response = await axios.get(`/api/v3/football/fixtures`, {
      params: {
        api_token: apiToken,

        // league_id: leagueId,
      },
    });

    console.log(response.data);
    return response.data.data;
  }
);
