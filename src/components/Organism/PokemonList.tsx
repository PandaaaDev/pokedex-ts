import { styled } from 'styled-components';
import axios from 'axios';
import { PokemonType } from '@/types/main';
import Pokemon from '@/components/Molecules/Pokemon';
import { useInfiniteQuery } from '@tanstack/react-query';

const StyledPokemonList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	flex-wrap: wrap;
	@media only screen and (max-width: 767px) {
		padding-top: 20px;
	}
`;

const fetchPokemon = async ({ pageParam = 0 }) => {
	const response = await axios.get(
		`https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=20`
	);
	return response.data;
};
const PokemonList = () => {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
	} = useInfiniteQuery(['pokemonQuery'], fetchPokemon, {
		getNextPageParam: (response) => {
			const params = new URLSearchParams(response.next.split('?')[1]);
			const offset = params.get('offset');
			return offset;
		},
	});
	const pokemons = data?.pages.flatMap((page) => {
		return page.results;
	});
	if (isLoading) {
		return <div> Loading... </div>;
	}
	if (isError) {
		return (
			<div>Error occured when fetching data please check you connection</div>
		);
	}
	return (
		<StyledPokemonList>
			{pokemons?.map((pokemon: PokemonType, i: number) => {
				if (i === pokemons?.length - 1) {
					return (
						<>
							<Pokemon
								key={pokemon.name}
								name={pokemon.name}
								url={pokemon.url}
								loadMore={{ load: true, function: fetchNextPage }}
							/>
						</>
					);
				}
				return (
					<Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
				);
			})}
		</StyledPokemonList>
	);
};
export default PokemonList;
