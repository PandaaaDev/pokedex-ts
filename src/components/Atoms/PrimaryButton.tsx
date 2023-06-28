import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { darkTheme, lightTheme } from '@/globalStyles.ts';
interface PrimaryButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	$active?: boolean;
	$darktheme?: boolean;
	onClick?: () => void;
}

const StyledPrimaryButton = styled.button<PrimaryButtonType>`
	background-color: transparent;
	padding: 10px;
	margin: 5px;
	color: ${(props) =>
		props.$active
			? props.$darktheme
				? darkTheme.color
				: lightTheme.color
			: 'grey'};
	border: 2px solid
		${(props) => (props.$darktheme ? darkTheme.color : lightTheme.color)};
	border-radius: 20px;
	opacity: ${(props) => (props.$active ? 1 : 0)};
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		color: ${(props) =>
			props.$darktheme ? darkTheme.secondaryColor : lightTheme.secondaryColor};
		border: 2px solid
			${(props) =>
				props.$darktheme
					? darkTheme.secondaryColor
					: lightTheme.secondaryColor};
	}
`;

const PrimaryButton: React.FC<PrimaryButtonType> = (props) => {
	return <StyledPrimaryButton {...props}>{props.children}</StyledPrimaryButton>;
};

export default PrimaryButton;
