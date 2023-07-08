import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// Style
import { dark, light } from '@/store/themeReducer';
import { RootState } from '@/store/rootReducer';
import GlobalStyle from '@/globalStyles';
import Navigation from '@/components/Organism/Navigation';
import { darkTheme, lightTheme } from '@/globalStyles';
import Container from '@/components/Atoms/Container';
import Footer from '@/components/Organism/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type PageType = {
	children: ReactNode;
};
const Page: React.FC<PageType> = ({ children }) => {
	const queryClient = new QueryClient();

	const dispatch = useDispatch();
	// Redux Theme
	const theme = useSelector((state: RootState) => state.theme.$darkTheme);
	// Redux Theme ^
	// On initial useEffect
	useEffect(() => {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			dispatch(dark());
		} else {
			dispatch(light());
		}
	}, [dispatch]);
	// On initial useEffect ^

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme ? darkTheme : lightTheme}>
					<GlobalStyle />
					<Navigation />
					<Container>{children}</Container>
					<Footer />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
};

export default Page;
