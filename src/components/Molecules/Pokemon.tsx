import { PokemonType } from '@/types/main';
import useFetch from '@/hooks/useFetch';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { post } from '@/store/pokemonReducer';

const StyledPokemon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 270px;
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
	cursor: pointer;
`;

const Pokemon: React.FC<PokemonType> = ({ name, url }) => {
	const dispatch = useDispatch();
	const { data, loading, error } = useFetch(url);
	const handleOnClick = () => {
		dispatch(post({ showPokemon: true, pokemon: data }));
	};
	if (error) {
		<div>An error occurred sorry!</div>;
	}
	return (
		<>
			{loading ? (
				<StyledPokemon>Loading...</StyledPokemon>
			) : (
				data && (
					<StyledPokemon onClick={handleOnClick}>
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
									return <p key={e.type.url}>{e.type.name}</p>;
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
