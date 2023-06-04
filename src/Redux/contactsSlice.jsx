import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact,editContact } from 'Redux/operations';

const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: builder => builder
  .addCase((fetchContacts.pending),handlePending)
  .addCase((fetchContacts.fulfilled),(state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  })
  .addCase((fetchContacts.rejected), handleRejected)
  .addCase((addContact.pending), handlePending)
  .addCase((addContact.fulfilled),(state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
  })
  .addCase((addContact.rejected), handleRejected)
  .addCase((deleteContact.pending), handlePending)
  .addCase((deleteContact.fulfilled),(state, action) => {
    state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
  })
  .addCase((deleteContact.rejected), handleRejected)
  .addCase((editContact.pending), handlePending)
  .addCase((editContact.fulfilled),(state, action) => {
    state.isLoading = false;
      state.error = null;
      // const index = state.items.findIndex(
      //   contact => contact.id === action.payload.id
      // );
      // state.items.splice(index, 1);
      state.items = state.items.map(contact => contact.id !== action.payload.id ? contact: action.payload);

      console.log('replace');
  })
  .addCase((editContact.rejected), handleRejected)
});

   
    
   
    
   
      
     
  

// [fetchContacts.pending]: handlePending,
// [fetchContacts.fulfilled](state, action) {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// },
// [fetchContacts.rejected]: handleRejected,
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
// },



 //  state.items.filter(contact => contact.id !== action.payload);

// export const contactsReducer = contactsSlice.reducer;
