import { PokemonType } from '@/types/main';
import useFetch from '@/hooks/useFetch';
import styled from 'styled-components';
const StyledPokemon = styled.div`
	width: 100%;
	height: 350px;
	max-width: 350px;
	background-color: #333;
	color: white;
	border: 1px solid red;
	border-radius: 25px;
	img {
		width: 50%;
		height: 50%;
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
						<div>ID:{data?.id}</div>
						<div>
							<img
								src={data?.sprites?.front_default}
								alt={`Image of ${name}`}
							></img>
						</div>
						<div>{name}</div>
					</StyledPokemon>
				)
			)}
		</>
	);
};

export default Pokemon;
