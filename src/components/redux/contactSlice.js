import {  createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        item: initialContacts,
    },

    reducers: {
        addContact(state, action) {
           state.item.push(action.payload);
        },
        deleteContact(state, action) {
            return state.item.filter(contact => contact.id !==action.payload.id);
        },

        


    },
})


const persistConfig = {
    key: 'contacts',
    storage,
  whitelist: ['item'],

  };
  
  export const contactReducer = persistReducer(persistConfig, contactSlice.reducer);
  

export const { addContact, deleteContact } = contactSlice.actions;


// ===== Selectors =====

export const getClicksValue = state => state.item.isLoggedIn;