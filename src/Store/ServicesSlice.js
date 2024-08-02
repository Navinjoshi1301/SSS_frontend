// src/features/services/servicesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Replace 'API_URL' with your actual API URL
const API_URL = 'API_URL';

export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

const ServicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ServicesSlice.reducer;
