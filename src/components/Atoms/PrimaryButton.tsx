import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
type PrimaryButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
const StyledPrimaryButton = styled.button``;
const PrimaryButton: React.FC<PrimaryButtonType> = (props) => {
	return <StyledPrimaryButton {...props}>{props.children}</StyledPrimaryButton>;
};

export default PrimaryButton;
