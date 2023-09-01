import { useEffect, useRef } from 'react';
import { PokemonType } from '@/types/main';
import useFetch from '@/hooks/useFetch';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { post } from '@/store/pokemonReducer';
import { lightTheme } from '@/globalStyles';
import { useIntersection } from '@mantine/hooks';
import { capitalize } from '@/utils/capitalize/capitalize';

const StyledPokemon = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-rows: 1fr;
	grid-template-columns: 1fr;
	grid-template-rows: 0.2fr 1fr 0.2fr 0.2fr;
	gap: 0px 0px;
	grid-template-areas:
		'ID'
		'image'
		'type'
		'name';

	width: 100%;
	height: 350px;
	max-width: 270px;
	border-radius: 15px;
	border: 2px solid ${lightTheme.mainAccentColor};
	font-size: 2rem;
	cursor: pointer;
	transition: 0.3s ease;
	&:hover {
		box-shadow: 0px 0px 15px ${lightTheme.mainAccentColor};
	}
	overflow: hidden;
	.imageContainer,
	.pokemonName,
	.pokemonID,
	.pokemonType {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.imageContainer {
		grid-area: image;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		img {
			width: 150px;
			height: 150px;
		}
	}
	.pokemonName {
		background-color: ${lightTheme.mainAccentColor};
		grid-area: name;
	}
	.pokemonID {
		grid-area: ID;
		/* background-color: ${lightTheme.mainAccentColor}; */
	}
	.pokemonType {
		grid-area: type;
		p {
			margin: 2.5px;
		}
	}
`;

const Pokemon: React.FC<PokemonType> = ({ name, url, loadMore }) => {
	const lastPostRef = useRef<HTMLElement>(null);
	const { ref, entry } = useIntersection({
		root: lastPostRef.current,
		threshold: 1,
	});
	useEffect(() => {
		if (entry?.isIntersecting) {
			loadMore?.function();
		}
	}, [entry, loadMore]);

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
					<StyledPokemon ref={ref} onClick={handleOnClick}>
						<div className='pokemonID'>ID: {data?.id}</div>
						<div className='imageContainer'>
							<img
								src={data?.sprites?.other.dream_world.front_default}
								alt={`Image of ${name}`}
							></img>
						</div>
						<div className='pokemonType'>
							<p>Type:</p>
							{capitalize(data?.types[0].type.name)}
						</div>
						<div className='pokemonName'>{capitalize(name)}</div>
					</StyledPokemon>
				)
			)}
		</>
	);
};

export default Pokemon;
