import { PokemonType } from '@/types/main';
import React from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { hide } from '@/store/pokemonReducer';
import Abilities from '@/components/Molecules/Abilities';
import Stats from '@/components/Molecules/Stats';
import Types from '@/components/Molecules/Types';
import { capitalize } from '@/utils/capitalize';
const Container = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 10% 0 0 0;
	@media only screen and (min-width: 1000px) {
		padding: 5% 0 0 0;
	}
`;
const Content = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 0.3fr 1fr 0.5fr 0.2fr;
	gap: 0px 0px;
	grid-template-areas:
		'header header'
		'image image'
		'data data'
		'data data';
	border-radius: 25px;
	background-color: ${(props) => props.theme.backgroundColor};
	width: 90%;
	height: 85%;
	overflow: hidden;
	@media only screen and (min-width: 768px) {
		height: 95%;
	}
`;
const ImageContainer = styled.div`
	grid-area: image;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	border-top: 2px solid ${(props) => props.theme.mainAccentColor};
	border-bottom: 2px solid ${(props) => props.theme.mainAccentColor};
	img {
		width: 100%;
	}
	@media only screen and (min-width: 768px) {
		img {
			width: 50%;
		}
	}
	@media only screen and (min-width: 1400px) {
		/* height: 95%; */
		img {
			width: 20%;
		}
	}
`;
const PokemonDetail = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 0px 5px;
	grid-template-areas:
		'stats abilities'
		'stats abilities'
		'type type';

	grid-area: data;
	width: 100%;
	height: 100%;
	font-size: 1.5rem;
	padding: 0.5rem 1rem;
	ul {
		list-style: none;
		li {
			margin: 0.5rem 0;
		}
	}
	h4 {
		color: ${(props) => props.theme.mainAccentColor};
		font-size: 2rem;
	}
`;
const Header = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 0px 0px;
	grid-template-areas:
		'. . close'
		'title title title'
		'title title title';
	grid-area: header;
	width: 100%;
	height: 100%;
`;
const Title = styled.div`
	grid-area: title;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	color: ${(props) => props.theme.color};
`;
const CloseButton = styled.button`
	grid-area: close;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 12%;
	border: none;
	background-color: transparent;
	color: ${(props) => props.theme.mainAccentColor};
	font-size: 2rem;
`;
const PokemonModal: React.FC<{
	pokemon: PokemonType;
}> = ({ pokemon }) => {
	const dispatch = useDispatch();
	const handleClose = (event: React.MouseEvent<HTMLElement>) => {
		const target = event.target as HTMLButtonElement;
		event.preventDefault();
		if (
			target.id === 'outline' ||
			target.id === 'closeButton' ||
			target.id === 'crossIcon'
		) {
			dispatch(hide());
		}
		event.stopPropagation();
	};
	// error handling
	if (!pokemon) {
		return (
			<Container id='modal-container' onClick={handleClose}>
				<Content>Sorry there is some data issiue with pokemon </Content>
			</Container>
		);
	}
	// Main component
	return (
		<Container onClick={handleClose} id='outline'>
			<Content>
				<Header>
					<CloseButton id='closeButton'>
						<i id='crossIcon' className='fa-solid fa-x'></i>
					</CloseButton>
					<Title>
						<h3>{capitalize(pokemon.name)}</h3>
					</Title>
				</Header>
				<ImageContainer>
					<img src={pokemon.sprites?.front_default}></img>
				</ImageContainer>
				<PokemonDetail>
					{pokemon.stats && <Stats data={pokemon.stats}></Stats>}
					{pokemon.abilities && (
						<Abilities data={pokemon.abilities}></Abilities>
					)}
					{pokemon.types && <Types data={pokemon.types}></Types>}
				</PokemonDetail>
			</Content>
		</Container>
	);
};

export default PokemonModal;
