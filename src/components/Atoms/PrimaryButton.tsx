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
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		color: gray;
		border: 2px solid grey;
	}
`;

const PrimaryButton: React.FC<PrimaryButtonType> = (props) => {
	return <StyledPrimaryButton {...props}>{props.children}</StyledPrimaryButton>;
};

export default PrimaryButton;
