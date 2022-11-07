import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts } from 'redux/operations';
// import { initialStateTotal } from './sliceFilter';
const initialState = {
  contacts: [],
};

// const initialState = initialStateTotal.contacts;
// console.log('initialState :', initialState);

const phonebookSlice = createSlice({
  name: 'contacts',
  isLoading: false,
  error: false,
  initialState,
  reducers: {
    phoneSetContact: (state, action) => {
      if (state.contacts.some(item => item.name === action.payload.name)) {
        return alert(`${action.payload.name} is already in contacts`);
      }
      state.contacts = [...state.contacts, action.payload];
    },
    phoneDeleteContact(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { phoneSetContact, phoneDeleteContact, phoneFilterContact } =
  phonebookSlice.actions;
export default phonebookSlice.reducer;
