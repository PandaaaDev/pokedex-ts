import React, { ReactNode } from 'react';
import styled from 'styled-components';
type Props = {
	children: ReactNode;
};
const StyledContainer = styled.div`
	padding: 80px 8%;
`;
const Container: React.FC<Props> = (props) => {
	return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
