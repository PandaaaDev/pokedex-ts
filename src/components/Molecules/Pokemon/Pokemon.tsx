import { PokemonType } from '@/types/main';
import useFetch from '@/hooks/useFetch';
import styled from 'styled-components';
const StyledPokemon = styled.div`
	min-width: 100px;
	max-width: 300px;
	min-height: 100px;
	max-height: 300px;
	background-color: #333;
	color: white;
	img {
		max-width: 50px;
		max-height: 50px;
	}
`;
const Pokemon: React.FC<PokemonType> = ({ name, url }) => {
	const { data, loading, error } = useFetch(url);
	if (error) {
		<div>An error occurred sorry!</div>;
	}
	return (
		<>
			{loading ? (
				<StyledPokemon>Loading...</StyledPokemon>
			) : (
				data && (
					<StyledPokemon>
						<div>{name}</div>
						<div>ID:{data?.id}</div>
						<div>
							<img
								src={data?.sprites?.front_default}
								alt={`Image of ${name}`}
							></img>
						</div>
					</StyledPokemon>
				)
			)}
		</>
	);
};

export default Pokemon;
