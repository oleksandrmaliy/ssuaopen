import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b388ab7fba54a5b7ed51b4.mockapi.io/';

export const fetchSurfers = createAsyncThunk(
  'surfers/fetchSurfers',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/surfers');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const postSurfer = createAsyncThunk(
  'surfers/postSurfer',

  async (player, thunkAPI) => {
    try {
      const response = await axios.post('/surfers', player);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteSurfer = createAsyncThunk(
  'surfers/deleteSurfer',

  async (playerId, thunkAPI) => {
    try {
      const response = await axios.delete(`/surfers/${playerId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
