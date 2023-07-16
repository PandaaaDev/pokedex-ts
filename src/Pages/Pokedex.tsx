import Page from '@/Templates/Page';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { PokemonType } from '@/types/main';
import PokemonList from '@/components/Organism/PokemonList';
import PokemonModal from '@/components/Organism/PokemonModal';

const Pokedex = () => {
	const root = document.getElementById('modal') as HTMLElement;

	const pokemon = useSelector((state: RootState) => {
		return state.pokemon.pokemon;
	}) as unknown as PokemonType;
	const showModule = useSelector((state: RootState) => {
		return state.pokemon.showPokemon;
	}) as unknown as boolean;
	return (
		<Page>
			{showModule && createPortal(<PokemonModal pokemon={pokemon} />, root)}
			<PokemonList />
		</Page>
	);
};

export default Pokedex;
