import BurgerButton from '../Atoms/BurgerButton';
import Logo from '@/components/Atoms/Logo';
import NavList from '@/components/Atoms/NavList';
import ThemeButton from '../Atoms/ThemeButton';
import { styled } from 'styled-components';
const StyledNav = styled.nav`
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-rows: 1fr;
	grid-template-columns: 0.2fr 1.1fr 0.1fr;
	grid-template-rows: 1fr;
	gap: 0px 0px;
	grid-template-areas: 'logo list burger';
`;
const Navigation = () => {
	return (
		<StyledNav>
			<Logo />
			<NavList />
			<ThemeButton>Some text i dont consider to be important! XD</ThemeButton>
			<BurgerButton
				onClick={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
		</StyledNav>
	);
};

export default Navigation;
