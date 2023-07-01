import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/store/themeReducer';
import { selectorType } from '@/types/main';
const StyledThemeButton = styled.button``;
const ThemeButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = () => {
	const mode = useSelector((state: selectorType) => state.theme.$darkTheme);
	const dispatch = useDispatch();
	return (
		<StyledThemeButton
			theme={{ $darkTheme: mode }}
			onClick={() => {
				dispatch(toggle());
			}}
		>
			{mode ? (
				<div>
					<i className='fa-solid fa-moon'></i>
				</div>
			) : (
				<div>
					<i className='fa-solid fa-sun'></i>
				</div>
			)}
		</StyledThemeButton>
	);
};

export default ThemeButton;
