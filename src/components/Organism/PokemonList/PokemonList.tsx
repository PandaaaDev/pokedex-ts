import { useState, useEffect } from 'react';
import { PokemonArray, PokemonType, URLType } from '@/types/main';
import useFetch from '@/hooks/useFetch';
import Pokemon from '@/components/Molecules/Pokemon/Pokemon';
import Pagination from '@/components/Molecules/Pagination/Pagination';
const PokemonList = () => {
	const [currentUrl, setCurrentUrl] = useState<URLType>(
		'https://pokeapi.co/api/v2/pokemon'
	);
	const [nextUrl, setNextUrl] = useState<URLType>(null);
	const [prevUrl, setPrevUrl] = useState<URLType>(null);
	const { response, loading, error } = useFetch(currentUrl);
	const [data, setData] = useState<PokemonArray>([]);

	useEffect(() => {
		setData(response?.data.results);
		setNextUrl(response?.data.next);
		setPrevUrl(response?.data.previous);
	}, [response?.data]);
	const handlePrev = () => {
		setCurrentUrl(prevUrl);
	};
	const handleNext = () => {
		setCurrentUrl(nextUrl);
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
			{loading ? (
				<>Loading... </>
			) : (
				<div>
					{data &&
						data.map((element: PokemonType) => {
							return (
								<Pokemon
									key={element.name}
									url={element.url}
									name={element.name}
								/>
							);
						})}
				</div>
			)}

			<Pagination
				handleNext={handleNext}
				handlePrev={handlePrev}
				handleReset={handleReset}
			/>
		</div>
	);
};
export default PokemonList;
