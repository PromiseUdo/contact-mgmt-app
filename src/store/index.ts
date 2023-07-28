// Import the necessary functions from "@reduxjs/toolkit" and the custom contactReducer.
import { configureStore, createAction } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactReducer";

// Create a Redux store using the configureStore function from "@reduxjs/toolkit".
const store = configureStore({
  reducer: {
    contacts: contactReducer, // Set the "contacts" slice of the store to use the custom contactReducer.
  },
});
// Export the created Redux store as the default export of this module.
export default store;
