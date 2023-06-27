import { PokemonType } from '@/types/main';
import useFetch from '@/hooks/useFetch';
import styled from 'styled-components';
const StyledPokemon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 350px;
	max-width: 350px;
	background-color: #333;
	color: white;
	border: 1px solid red;
	border-radius: 25px;
	img {
		width: 100px;
		height: 100px;
	}
`;
const Pokemon: React.FC<PokemonType> = ({ name, url }) => {
	const { data, loading, error } = useFetch(url);
	console.log(data);
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
						<div>
							<p>Type:</p>
							{data.types.map(
								(e: { slot: number; type: { name: string; url: string } }) => {
									return <p>{e.type.name}</p>;
								}
							)}
						</div>
						<div>{name}</div>
					</StyledPokemon>
				)
			)}
		</>
	);
};

export default Pokemon;
