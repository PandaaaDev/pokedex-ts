import { useState } from 'react';
import { PokemonType, URLType } from '@/types/main';
import useFetch from '@/hooks/useFetch';
import Pokemon from '@/components/Molecules/Pokemon';
import Pagination from '@/components/Molecules/Pagination';
import { styled } from 'styled-components';

const StyledPokemonList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	flex-wrap: wrap;
`;
const PokemonList = () => {
	const [currentUrl, setCurrentUrl] = useState<URLType>(
		'https://pokeapi.co/api/v2/pokemon'
	);
	const { data, loading, error, next, prev } = useFetch(currentUrl);
	const handlePrev = () => {
		setCurrentUrl(prev);
	};
	const handleNext = () => {
		setCurrentUrl(next);
	};
	const handleReset = () => {
		setCurrentUrl('https://pokeapi.co/api/v2/pokemon');
	};
	if (error) {
		if (error.code == 'ERR_CANCELED') return;
		console.error(error);
	}

	return (
		<div>
			<Pagination
				nextLink={next ? true : false}
				prevLink={prev ? true : false}
				reset={prev ? true : false}
				handleNext={handleNext}
				handlePrev={handlePrev}
				handleReset={handleReset}
			/>
			{loading ? (
				<div>Loading... </div>
			) : (
				<StyledPokemonList>
					{data &&
						data.results.map((element: PokemonType) => {
							return (
								<Pokemon
									key={element.name}
									url={element.url}
									name={element.name}
								/>
							);
						})}
				</StyledPokemonList>
			)}
		</div>
	);
};
export default PokemonList;
