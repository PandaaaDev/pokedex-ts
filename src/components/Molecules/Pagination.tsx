import React from 'react';
import { TPagination } from '@/types/main';
import PrimaryButton from '@/components/Atoms/PrimaryButton';
import Container from '@/components/Atoms/Container';
import { useSelector } from 'react-redux';
import { selectorType } from '@/types/main';
const Pagination: React.FC<TPagination> = ({
	handleNext,
	handlePrev,
	handleReset,
	nextLink,
	prevLink,
	reset,
}) => {
	const theme = useSelector((state: selectorType) => state.theme.$darkTheme);
	return (
		<Container>
			<PrimaryButton $darktheme={theme} $active={prevLink} onClick={handlePrev}>
				Previous
			</PrimaryButton>
			<PrimaryButton $darktheme={theme} $active={nextLink} onClick={handleNext}>
				Next
			</PrimaryButton>
			<PrimaryButton $darktheme={theme} $active={reset} onClick={handleReset}>
				Reset
			</PrimaryButton>
		</Container>
	);
};

export default Pagination;
