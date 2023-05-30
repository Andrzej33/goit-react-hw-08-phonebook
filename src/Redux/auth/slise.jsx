
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
    extraReducers: builder => builder
    .addCase((register.pending),handlePending)
    .addCase(register.fulfilled,(state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;})
      .addCase((register.rejected), handleRejected)
      .addCase((login.pending),handlePending)
      .addCase((login.fulfilled),(state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;})
        .addCase((login.rejected), handleRejected)
        .addCase((logout.pending), handlePending)
        .addCase((logout.fulfilled),(state) => {
          state.user = {name: null, email: null};
          state.token= null;
          state.isLoggedIn= false;
        },)
        .addCase((logout.rejected), handleRejected)
        // .addCase((refreshCurrentUser.pending),(state) => {
        //   state.isRefreshing = true;
        // },)
        .addCase((refreshCurrentUser.fulfilled),(state, action) => {
          state.user = action.payload;
          state.isLoggedIn= true;
          // state.isRefreshing = true;
        })
        // .addCase((refreshCurrentUser.rejected),(state) => {
        //   state.isRefreshing = false;
        // })
        
        
      
});

export const authReducer = authSlice.reducer