import React from 'react';
import { TPagination } from '@/types/main';
import PrimaryButton from '@/components/Atoms/Button/PrimaryButton';
const Pagination: React.FC<TPagination> = ({
	handleNext,
	handlePrev,
	handleReset,
}) => {
	return (
		<>
			<PrimaryButton onClick={handleNext}>Next</PrimaryButton>
			<PrimaryButton onClick={handlePrev}>Previous</PrimaryButton>
			{handleReset && (
				<PrimaryButton onClick={handleReset}>Reset</PrimaryButton>
			)}
		</>
	);
};

export default Pagination;
