import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import { persistReducer } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slise';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig,authReducer),
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
