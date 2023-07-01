import React from 'react';
import { styled } from 'styled-components';
type BurgerButtonType = {
	onClick: () => void;
};
const StyledBurger = styled.button`
	grid-area: burger;
	z-index: 2;
	
`;
const BurgerButton: React.FC<BurgerButtonType> = (props) => {
	return <StyledBurger {...props}>BurgerButton</StyledBurger>;
};

export default BurgerButton;
