import React, { ReactNode } from 'react';
import Footer from '@/components/Organism/Footer';
import Nav from '@/components/Organism/Navigation';
import Container from '@/components/Atoms/Container';
const Page: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Nav />
			<Container>{children}</Container>;
			<Footer />
		</>
	);
};

export default Page;
