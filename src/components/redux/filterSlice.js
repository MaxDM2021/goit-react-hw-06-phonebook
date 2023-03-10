import {  createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const filterSlice = createSlice({
    name: 'filters',
    initialState: {
      filt: "",
    },
    reducers: {
        filterContact(state, action) {
            state.filt = action.payload;
        },
    },
})


const persistConfig = {
    key: 'filters',
    storage,
    // whitelist: ['login', 'a'],
    // blacklist: ['c', 'b'],
  };
  
export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
export const { filterContact } = filterSlice.actions;


// ===== Selectors =====

export const getFilterValue = state => state.filter.filt;