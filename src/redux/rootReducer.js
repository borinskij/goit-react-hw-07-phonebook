import phonebookReducer from './Phonebook/slicePhonebook';
import filterReducer from './Phonebook/sliceFilter';
const { combineReducers } = require('redux');

export const rootReducer = combineReducers({
  contacts: phonebookReducer,
  filter: filterReducer,
});
