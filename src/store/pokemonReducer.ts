import { PokemonType } from '@/types/main';
import { createSlice } from '@reduxjs/toolkit';
const initialState = { showPokemon: false, pokemon: {} };
const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		post(
			state,
			action: {
				payload: { showPokemon: boolean; pokemon: PokemonType };
			}
		) {
			state.showPokemon = action.payload.showPokemon;
			state.pokemon = action.payload.pokemon;
		},
		hide(state) {
			state.showPokemon = false;
		},
		show(state) {
			state.showPokemon = true;
		},
		toggle(state) {
			state.showPokemon = !state.showPokemon;
		},
	},
});
export default pokemonSlice;
export const { post, hide, show, toggle } = pokemonSlice.actions;
