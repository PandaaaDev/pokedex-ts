import { PokemonType } from '@/types/main';
import { useState, useEffect } from 'react';
import useFetch from '@/hooks/useFetch';

const Pokemon: React.FC<PokemonType> = ({ name, url }) => {
	console.log(name);
	console.log(url);
	const { response, loading, error } = useFetch(url);
	console.log(response, loading, error);
	const [pokemon, setPokemon] = useState<PokemonType>();

	useEffect(() => {
		return () => {
			setPokemon(response?.data);
		};
	}, [response?.data]);

	if (error) {
		<div>An error occurred sorry!</div>;
	}
	console.log(pokemon);
	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : (
				pokemon && (
					<div>
						<div>{name}</div>
						<div>ID:{pokemon?.id}</div>
						<div>
							<img
								src={pokemon?.sprites?.front_default}
								alt={`Image of ${name}`}
							></img>
						</div>
					</div>
				)
			)}
		</>
	);
};

export default Pokemon;
