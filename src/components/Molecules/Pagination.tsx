import React from 'react';
import { TPagination } from '@/types/main';
import PrimaryButton from '@/components/Atoms/PrimaryButton';
import { styled } from 'styled-components';
const Container = styled.div`
	margin: 10px 0;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 1024px) {
		align-items: center;
		justify-content: center;
		background-color: ${(props) => props.theme.backgroundColor};
		position: fixed;
		bottom: 0;
		left: 0;
		margin: 0;
		width: 100%;
		border-top: 2px solid ${(props) => props.theme.mainAccentColor};
	}
`;
const Pagination: React.FC<TPagination> = ({
	handleNext,
	handlePrev,
	handleReset,
	nextLink,
	prevLink,
	reset,
}) => {
	return (
		<Container>
			<PrimaryButton $active={prevLink} onClick={handlePrev}>
				<i className='fa-solid fa-chevron-left'></i>
			</PrimaryButton>
			<PrimaryButton $active={nextLink} onClick={handleNext}>
				<i className='fa-solid fa-chevron-right'></i>
			</PrimaryButton>
			<PrimaryButton $active={reset} onClick={handleReset}>
				<i className='fa-solid fa-reply'></i>
			</PrimaryButton>
		</Container>
	);
};

export default Pagination;
