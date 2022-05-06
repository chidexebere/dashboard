import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ON: true,
  selectedNav: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleConfig(state) {
      state.ON = !state.ON;
    },
    selectNav(state, action) {
      state.selectedNav = action.payload;
    },
  },
});

export const { toggleConfig, selectNav } = appSlice.actions;

export default appSlice.reducer;
