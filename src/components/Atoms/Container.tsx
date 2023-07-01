import React, { ReactNode } from 'react';
import styled from 'styled-components';
type Props = {
	children: ReactNode;
};
const StyledContainer = styled.div`
	/* margin: 10px; */
	padding: 20px 8%;
	/* border: 1px solid red; */
`;
const Container: React.FC<Props> = (props) => {
	return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
