
import { createSlice } from"@reduxjs/toolkit";
import { register, login, logout, refreshCurrentUser} from 'API/API.Axios';


const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = (state, action) => {
    state.isLoading = false;
    // state.isLoggedIn = false;
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
        [refreshCurrentUser.pending](state) {
          state.isRefreshing = true;
        },
        [refreshCurrentUser.fulfilled](state, action) {
          state.user = action.payload;
          state.isLoggedIn= true;
          state.isRefreshing = true;
        },
        [refreshCurrentUser.rejected](state) {
          state.isRefreshing = true;
        }
         
    },
});

export const authReducer = authSlice.reducer