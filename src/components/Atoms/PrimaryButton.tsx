import React, { ReactNode } from 'react';
import styled from 'styled-components';
interface PrimaryButtonType {
	children: ReactNode;
	active: boolean;
	onClick?: () => void;
}
const StyledPrimaryButton = styled.button``;
const PrimaryButton: React.FC<PrimaryButtonType> = (props) => {
	return <StyledPrimaryButton {...props}>{props.children}</StyledPrimaryButton>;
};

export default PrimaryButton;
