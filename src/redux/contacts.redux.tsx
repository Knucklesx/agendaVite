import { createSlice } from "@reduxjs/toolkit";
import Contacts from "../models/contacs.models";

export interface ContatosState {
	contatos: {
		contacts: Contacts[];
		filterContacts: string;
		filterBy: string;
		activeButton: string;
		lastContactId: number;
	};
}

export const contatoSlice = createSlice({
	name: "contatos",
	initialState: {
		contacts: [],
		filterContacts: "",
		filterBy: "nome",
		activeButton: "nome",
		lastContactId: 0,
	},
	reducers: {
		setContacts: (state, action) => {
			state.contacts = action.payload;
			state.lastContactId =
				action.payload.length > 0
					? action.payload[action.payload.length - 1].id
					: 0;
		},
		setFilterContacts: (state, action) => {
			state.filterContacts = action.payload;
		},
		setFilterBy: (state, action) => {
			state.filterBy = action.payload;
		},
		setActiveButton: (state, action) => {
			state.activeButton = action.payload;
		},
	},
});

export const { setContacts, setFilterContacts, setFilterBy, setActiveButton } =
	contatoSlice.actions;

export default contatoSlice.reducer;
