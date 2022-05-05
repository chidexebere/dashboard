import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  configID: 1,
  selectedNav: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    selectConfig(state, action) {
      state.configID = action.payload;
    },
    selectNav(state, action) {
      state.selectedNav = action.payload;
    },
  },
});

export const { selectConfig, selectNav } = appSlice.actions;

export default appSlice.reducer;
