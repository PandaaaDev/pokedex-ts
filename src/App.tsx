import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggle, dark, light } from '@/store/themeReducer';
import { RootState } from '@/store/rootReducer';
import GlobalStyle from './globalStyles';
import PokemonList from '@/components/Organism/PokemonList';
import PokemonModal from './components/Molecules/PokemonModal';
import { PokemonType } from './types/main';
import Navigation from './components/Organism/Navigation';

const App = () => {
	const root = document.getElementById('modal') as HTMLElement;
	const dispatch = useDispatch();
	const theme = useSelector((state: RootState) => state.theme.$darkTheme);
	const pokemon = useSelector((state: RootState) => {
		return state.pokemon.pokemon;
	}) as unknown as PokemonType;
	const showModule = useSelector((state: RootState) => {
		return state.pokemon.showPokemon;
	}) as unknown as boolean;
	useEffect(() => {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			dispatch(dark());
		} else {
			dispatch(light());
		}
	}, [dispatch, pokemon, showModule]);

	return (
		<div>
			<Navigation />
			<GlobalStyle
				$darktheme={{
					$darkTheme: theme,
				}}
			/>
			<button
				onClick={() => {
					dispatch(toggle());
				}}
			>
				TestToggleDarkMode
			</button>
			{showModule && createPortal(<PokemonModal pokemon={pokemon} />, root)}
			<PokemonList />
		</div>
	);
};

export default App;
