import React from 'react';
import { styled } from 'styled-components';
type BurgerButtonType = {
	onClick: () => void;
	shownav: number;
};
const StyledBurger = styled.button`
	grid-area: burger;
	z-index: 2;
`;
const BurgerButton: React.FC<BurgerButtonType> = (props) => {
	return (
		<StyledBurger {...props}>
			{props.shownav ? (
				<i className='fa-solid fa-x'></i>
			) : (
				<i className='fa-solid fa-bars-staggered'></i>
			)}
		</StyledBurger>
	);
};

export default BurgerButton;
