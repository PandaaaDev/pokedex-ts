import { combineReducers } from '@reduxjs/toolkit';
import ThemeReducer from '@/store/themeReducer';
import PokemonReducer from '@/store/pokemonReducer';
const rootReducer = combineReducers({
	theme: ThemeReducer.reducer,
	pokemon: PokemonReducer.reducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
