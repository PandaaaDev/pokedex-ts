import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/store/themeReducer';
import { selectorType } from '@/types/main';
const StyledThemeButton = styled.button`
	border: none;
`;
const ThemeButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = () => {
	const mode = useSelector((state: selectorType) => state.theme.$darkTheme);
	const dispatch = useDispatch();
	return (
		<StyledThemeButton
			onClick={() => {
				dispatch(toggle());
			}}
		>
			{mode}
		</StyledThemeButton>
	);
};

export default ThemeButton;
