import React from 'react';
import { capitalize } from '@/utils/capitalize/capitalize';
import { TStats, TList } from '@/types/main';
import { styled } from 'styled-components';
const Container = styled.div`
	grid-area: stats;
`;
const Stats: React.FC<TList<TStats>> = ({ data }) => {
	return (
		<Container>
			<h4>Stats</h4>
			<ul>
				{data?.map((stat: TStats) => (
					<li key={stat.stat.name}>
						<span>{capitalize(stat.stat.name)}:</span> {stat.base_stat}
					</li>
				))}
			</ul>
		</Container>
	);
};

export default Stats;
