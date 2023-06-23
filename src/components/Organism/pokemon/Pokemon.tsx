import React, { useState, useEffect } from 'react';
import { PokemonType } from '@/types/main';
import axios from 'axios';

const Pokemon: React.FC<PokemonType> = ({ name, url }) => {

	const [loading, setLoading] = useState(true);
	const [URL] = useState<string>(url as string);
	const [pokemonData, setPokemonData] = useState<PokemonType>();
	useEffect(() => {
		const controller = new AbortController();
		const signal: AbortSignal = controller.signal;
		const reason = new DOMException('clean up', 'AbortError');
		setLoading(true);
		axios
			.get(URL, { signal })
			.then((response) => {
				setPokemonData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
		return () => {
			controller.abort(reason);
		};
	}, [URL]);
	if (loading) return <div>Loading...</div>;
	if (pokemonData)
		return (
			<div>
				Name: {name}
				ID: {pokemonData.id}
				{pokemonData.sprites && (
					<img src={pokemonData.sprites.front_default}></img>
				)}
			</div>
		);
};

export default Pokemon;
