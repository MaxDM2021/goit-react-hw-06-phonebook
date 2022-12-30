
import { configureStore } from '@reduxjs/toolkit';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';




export const store = configureStore({
  reducer: {
  contact: contactReducer,
  filter: filterReducer, 
},
  middleware(getDefaultMiddleware) {

  return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
  },
});

export const persistor = persistStore(store);


// ===== Selectors =====

// export const getContacts = state => state.contact.item;

