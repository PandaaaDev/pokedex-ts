import React from 'react';
import { capitalize } from '@/utils/capitalize';
import { TList, TAbility } from '@/types/main';
import { styled } from 'styled-components';
const Container = styled.div`
	grid-area: abilities;
`;
const Abilities: React.FC<TList<TAbility>> = ({ data }) => {
	return (
		<Container>
			<h4>Abilities</h4>
			<ul>
				{data?.map((ability: TAbility) => (
					<li key={ability.ability.name}>{capitalize(ability.ability.name)}</li>
				))}
			</ul>
		</Container>
	);
};

export default Abilities;
