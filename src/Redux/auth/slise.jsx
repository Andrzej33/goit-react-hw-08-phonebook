
import { createSlice } from"@reduxjs/toolkit";
import { register, login, logout, refreshCurrentUser} from 'Redux/operations';


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
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState ,
    extraReducers: builder => builder
    .addCase((register.pending),handlePending)
    .addCase((register.fulfilled),(state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    })
      .addCase((register.rejected), handleRejected)
      .addCase((login.pending),handlePending)
      .addCase((login.fulfilled),(state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;})
        .addCase((login.rejected), handleRejected)
        .addCase((logout.pending), handlePending)
        .addCase((logout.fulfilled),(state) => {
          state.user = {name: null, email: null};
          state.token= null;
          state.isLoggedIn= false;
          state.isLoading = false;
          state.error = null;
        },)
        .addCase((logout.rejected), handleRejected)
        .addCase((refreshCurrentUser.pending),(state) => {
          state.isRefreshing = false;
          state.isLoading = true;
        },)
        .addCase((refreshCurrentUser.fulfilled),(state, action) => {
          state.user = action.payload;
          state.isLoggedIn= true;
          state.isRefreshing = true;
          state.isLoading = true;
          state.error = null;
        })
        .addCase((refreshCurrentUser.rejected),(state,action) => {
          state.isRefreshing = true;
          state.isLoading = false;
          state.error =action.payload ;
        })
        
        
      
});

export const authReducer = authSlice.reducer