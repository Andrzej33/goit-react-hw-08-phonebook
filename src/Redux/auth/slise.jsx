
import { createSlice } from"@reduxjs/toolkit";
import { register, login, logout} from 'API/API.Axios';
// import authOperations from './auth-operations'

const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

  const initialState = {
    user:{name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    // error: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState ,
    extraReducers: {
        [register.pending]: handlePending,
        [register.fulfilled](state, action) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        },
        [register.rejected]: handleRejected,
        [login.pending]: handlePending,
        [login.fulfilled](state, action) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        },
        [login.rejected]: handleRejected,
        [logout.pending]: handlePending,
        [logout.fulfilled](state, action) {
          state.user = {name: null, email: null};
          state.token= null;
          state.isLoggedIn= false;
        },
        [logout.rejected]: handleRejected,
        // [addContact.pending]: handlePending,
        // [addContact.fulfilled](state, action) {
        //   state.isLoading = false;
        //   state.error = null;
        //   state.items.push(action.payload);
        // },
        // [addContact.rejected]: handleRejected,
        // [deleteContact.pending]: handlePending,
        // [deleteContact.fulfilled](state, action) {
        //   state.isLoading = false;
        //   state.error = null;
        //   const index = state.items.findIndex(
        //     contact => contact.id === action.payload.id
        //   );
        //   state.items.splice(index, 1);
         
        // },
        // [deleteContact.rejected]: handleRejected,  
    },
});

export const authReducer = authSlice.reducer