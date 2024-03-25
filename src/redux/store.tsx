import { configureStore } from "@reduxjs/toolkit";
// import { contatoSlice } from "./contacts.redux";
import contactsReducer from "./contacts.redux";

export const store = configureStore({
	reducer: {
		contatos: contactsReducer,
	},
});
