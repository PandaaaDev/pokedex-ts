import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
interface PrimaryButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	$active?: boolean;
	onClick?: () => void;
}

const StyledPrimaryButton = styled.button<PrimaryButtonType>`
	background-color: transparent;
	padding: 10px;
	margin: 5px;
	color: ${(props) => (props.$active ? props.theme.color : 'grey')};
	border: 2px solid ${(props) => props.theme.color};
	border-radius: 20px;
	opacity: ${(props) => (props.$active ? 1 : 0)};
	cursor: pointer;
	transition: 0.3s;
	display: ${(props) => (props.$active ? 'block' : 'none')};
	&:hover {
		color: ${(props) => props.theme.mainAccentColor};
		border: 2px solid ${(props) => props.theme.mainAccentColor};
	}
`;

const PrimaryButton: React.FC<PrimaryButtonType> = ({ children, ...rest }) => {
	return <StyledPrimaryButton {...rest}>{children}</StyledPrimaryButton>;
};

export default PrimaryButton;
