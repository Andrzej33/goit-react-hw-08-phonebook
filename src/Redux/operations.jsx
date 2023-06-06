import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://646885c360c8cb9a2cab8d4d.mockapi.io/api/v5';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''; 
  }
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials,thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials,thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('Your email or password is incorrect');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_,thunkAPI) => {
    try {
     await axios.post('/users/logout');
      // return response.data;
      token.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_,thunkAPI) => {
    
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if(!persistedToken){
        // return state;
         return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);
     try{
      const response = await axios.get('/users/current');
      return response.data;
     }  
     catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contact.id}`,{name: contact.name, number: contact.number});
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
