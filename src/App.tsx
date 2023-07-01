import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// Style
import { dark, light } from '@/store/themeReducer';
import { RootState } from '@/store/rootReducer';
import GlobalStyle from './globalStyles';
import PokemonList from '@/components/Organism/PokemonList';
import PokemonModal from '@/components/Molecules/PokemonModal';
import Navigation from '@/components/Organism/Navigation';
import { PokemonType } from '@/types/main';
import { darkTheme, lightTheme } from '@/globalStyles';
import Container from '@/components/Atoms/Container';
const App = () => {
	//Modal root
	const root = document.getElementById('modal') as HTMLElement;
	//Modal root ^
	const dispatch = useDispatch();
	// Redux Theme
	const theme = useSelector((state: RootState) => state.theme.$darkTheme);
	// Redux Theme ^
	// Redux Pokemon
	const pokemon = useSelector((state: RootState) => {
		return state.pokemon.pokemon;
	}) as unknown as PokemonType;
	const showModule = useSelector((state: RootState) => {
		return state.pokemon.showPokemon;
	}) as unknown as boolean;
	// Redux Pokemon^
	// On initial useEffect
	useEffect(() => {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			dispatch(dark());
		} else {
			dispatch(light());
		}
	}, [dispatch]);
	// On initial useEffect ^

	return (
		<div>
			<ThemeProvider theme={theme ? darkTheme : lightTheme}>
				<GlobalStyle />
				<Navigation />
				<Container>
					{showModule && createPortal(<PokemonModal pokemon={pokemon} />, root)}
					<PokemonList />
				</Container>
			</ThemeProvider>
		</div>
	);
};

export default App;
