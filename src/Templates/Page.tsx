import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { RootState } from '@/store/rootReducer';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '@/store/themeReducer';
import { darkTheme, lightTheme } from '@/globalStyles';
import Navigation from '@/components/Organism/Navigation';
import Container from '@/components/Atoms/Container';
import Footer from '@/components/Organism/Footer';
import GlobalStyle from '@/globalStyles';

const Page = () => {
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
					<Container>
						<Outlet />
					</Container>
					<Footer />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
};

export default Page;
