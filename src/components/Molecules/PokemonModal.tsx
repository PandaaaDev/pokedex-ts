import { PokemonType } from '@/types/main';
import React from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { hide } from '@/store/pokemonReducer';
const PokemonModal: React.FC<{
	pokemon: PokemonType;
}> = ({ pokemon }) => {
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
	`;
	const Content = styled.div`
		border-radius: 25px;
		background-color: #333;
		width: 90%;
		height: 90%;
	`;
	const Outline = styled.div`
		background-color: red;
	`;
	const dispatch = useDispatch();
	const handleClose = (event: React.MouseEvent<HTMLElement>) => {
		const target = event.target as HTMLButtonElement;
		event.preventDefault();
		if (target.id === 'outline' || target.id === 'closeButton') {
			dispatch(hide());
		}
		event.stopPropagation();
	};
	if (!pokemon) {
		return (
			<Container id='modal-container' onClick={handleClose}>
				Sorry there is some data issiue with pokemon{' '}
			</Container>
		);
	}

	return (
		<Container>
			<Outline id='outline' onClick={handleClose}></Outline>
			<Content>
				<button id='closeButton' onClick={handleClose}>
					Close
				</button>
				{pokemon.name}
			</Content>
		</Container>
	);
};

export default PokemonModal;
