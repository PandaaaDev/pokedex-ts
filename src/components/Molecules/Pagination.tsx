import React from 'react';
import { TPagination } from '@/types/main';
import PrimaryButton from '@/components/Atoms/PrimaryButton';
import Container from '@/components/Atoms/Container';
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
			<PrimaryButton active={prevLink} onClick={handlePrev}>
				Previous
			</PrimaryButton>
			<PrimaryButton active={nextLink} onClick={handleNext}>
				Next
			</PrimaryButton>
			<PrimaryButton active={reset} onClick={handleReset}>
				Reset
			</PrimaryButton>
		</Container>
	);
};

export default Pagination;
