import React from 'react';
type BurgerButtonType = {
	onClick: () => void;
};
const BurgerButton: React.FC<BurgerButtonType> = (props) => {
	return <div {...props}>BurgerButton</div>;
};

export default BurgerButton;
