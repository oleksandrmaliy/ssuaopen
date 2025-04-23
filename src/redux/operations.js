import axios from 'axios';
// import { fetchInProgress, fetchSuccess, fetchError } from './surfersSlice';

// axios.defaults.baseURL = 'https://dummyjson.com/test';
// axios.defaults.baseURL = 'https://66b388ab7fba54a5b7ed51b4.mockapi.io/';

// export const fetchSurfers = () => async (dispatch) => {
//   try {
//     dispatch(fetchInProgress());
//     const response = await axios.get(`/surfers`);
//     // console.log(response.data);
//     dispatch(fetchSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchError(error.message));
//   }
// };

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b388ab7fba54a5b7ed51b4.mockapi.io/';

const fetchSurfers = createAsyncThunk(
  'surfers/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/surfers');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  },

  //   async () => {
  //   const response = await axios.get('/surfers');
  //   return response.data;
  // }
);

export default fetchSurfers;
