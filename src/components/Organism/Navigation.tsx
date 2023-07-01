import BurgerButton from '../Atoms/BurgerButton';
import Logo from '@/components/Atoms/Logo';
import NavList from '@/components/Atoms/NavList';
import { useState } from 'react';
import { styled } from 'styled-components';
import ThemeButton from '../Atoms/ThemeButton';
const StyledNav = styled.nav`
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-rows: 1fr;
	grid-template-columns: 0.2fr 1.1fr 0.1fr;
	grid-template-rows: 1fr;
	gap: 0px 0px;
	grid-template-areas: 'logo list burger';
`;
const links = [
	{ label: 'Home', href: '', target: '' },
	{ label: 'Pokedex', href: '', target: '' },
	{ label: 'GitHub', href: '', target: '' },
];
const Navigation = () => {
	const [showNav, setShowNav] = useState(false);
	const handleShowNav = () => {
		setShowNav(!showNav);
	};
	return (
		<StyledNav>
			<Logo />
			<NavList links={links} active={showNav} />
			<ThemeButton></ThemeButton>
			<BurgerButton onClick={handleShowNav} />
		</StyledNav>
	);
};

export default Navigation;
