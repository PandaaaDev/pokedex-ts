import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle, dark, light } from '@/store/themeReducer';
import { RootState } from '@/store/rootReducer';
import GlobalStyle from './globalStyles';
import PokemonList from '@/components/Organism/PokemonList';

const App = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state: RootState) => state?.theme?.darkTheme);
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

	return (
		<div>
			<GlobalStyle $darktheme={theme} />
			<button
				onClick={() => {
					dispatch(toggle());
				}}
			>
				TestToggleDarkMode
			</button>
			<PokemonList />
		</div>
	);
};

export default App;
