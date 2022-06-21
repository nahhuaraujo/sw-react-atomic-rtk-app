import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  selectedType: 'people',
  results: [],
  isLoading: false,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeType: (state, action) => {
      state.selectedType = action.payload;
    },
    setResults: (state, action) => {
      state.results = [...action.payload];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const search = type => {
  return async dispatch => {
    const sendRequest = async () => {
      dispatch(mainActions.setIsLoading(true));
      const response = await axios.get(
        `${process.env.REACT_APP_SW_API_URL}/${type}`
      );
      dispatch(mainActions.setIsLoading(false));
      return response;
    };
    try {
      const response = await sendRequest();
      dispatch(mainActions.setResults(response.data.results));
    } catch (e) {
      console.log(e);
    }
  };
};

export const mainActions = mainSlice.actions;
export const main = mainSlice.reducer;
