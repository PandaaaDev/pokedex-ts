import { PokemonType } from '@/types/main';
import { createSlice } from '@reduxjs/toolkit';
const initialState: PokemonType = {
	name: '',
};
const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		post(state: PokemonType, payload) {
			console.log(payload);
			console.log(state);
			// state = payload;
		},
	},
});
export default pokemonSlice;
export const { post } = pokemonSlice.actions;
