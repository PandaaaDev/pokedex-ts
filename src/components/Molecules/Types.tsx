import React from 'react';
import { TTypes, TList } from '@/types/main';
import { capitalize } from '@/utils/capitalize/capitalize';
import { styled } from 'styled-components';
const Container = styled.div`
	grid-area: type;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h4 {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 2rem;
		width: 100%;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		/* margin: 0 0.5rem; */
		margin-top: 0.5rem;
		width: 100%;
		li {
			margin: 0 0;
		}
	}
`;
const Types: React.FC<TList<TTypes>> = ({ data }) => {
	return (
		<Container>
			<h4>Types</h4>
			<ul>
				{data?.map((type: TTypes) => (
					<li key={type.type.name}>{capitalize(type.type.name)}</li>
				))}
			</ul>
		</Container>
	);
};

export default Types;
