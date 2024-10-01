import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { ApiState, QuoteResponse } from '../../types/apiTypes';
import { API_URLS } from '../../constants/apiConstants';
import { getErrorMessage } from '../../helpers/apiHelpers';

/**
 * Thunk to fetch a random quote from the API.
 * @returns The quote text and author if successful, or an error message on failure.
 */
export const fetchQuote = createAsyncThunk<QuoteResponse, void, { rejectValue: string }>(
  'api/fetchQuote',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<QuoteResponse[]>(API_URLS.quote);
      return response.data[0]; 
    } catch (error) {
      return rejectWithValue(getErrorMessage(error as AxiosError));
    }
  }
);

/**
 * Initial state for the API slice.
 */
const initialState: ApiState = {
  quote: '',
  image: '',
  tip: '',
  status: 'idle',
};

/**
 * Slice for handling API interactions like fetching quotes.
 */
const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading';
        state.quote = ''; 
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = 'idle';
        state.quote = action.payload.q;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.quote = action.payload || '';
      });
  },
});

export default apiSlice.reducer;
