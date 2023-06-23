import React from 'react';
import { TPagination } from '@/types/main';
import PrimaryButton from '@/components/Atoms/PrimaryButton';
const Pagination: React.FC<TPagination> = ({
	handleNext,
	handlePrev,
	handleReset,
	nextLink,
	prevLink,
	reset,
}) => {
	return (
		<>
			{prevLink && <PrimaryButton onClick={handlePrev}>Previous</PrimaryButton>}
			{nextLink && <PrimaryButton onClick={handleNext}>Next</PrimaryButton>}
			{reset && handleReset && (
				<PrimaryButton onClick={handleReset}>Reset</PrimaryButton>
			)}
		</>
	);
};

export default Pagination;
