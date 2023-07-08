import BurgerButton from '../Atoms/BurgerButton';
import Logo from '@/components/Atoms/Logo';
import NavList from '@/components/Molecules/NavList';
import { useState } from 'react';
import { styled } from 'styled-components';
import ThemeButton from '../Atoms/ThemeButton';
const StyledNav = styled.nav`
	position: fixed;
	width: 100%;
	height: 80px;
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-rows: 1fr;
	grid-template-columns: 0.2fr 1fr 0.2fr;
	grid-template-rows: 1fr;
	gap: 0px 0px;
	grid-template-areas: 'logo list buttons';
	background-color: ${(props) => props.theme.backgroundColor};
	border-bottom: 2px solid ${(props) => props.theme.mainAccentColor};
	z-index: 3;
`;
const ButtonsContainer = styled.div`
	grid-area: buttons;
	display: flex;
	gap: 10px;
	z-index: 2;
	button {
		color: ${(props) => props.theme.color};
		font-size: 3rem;
		width: 80px;
		border: none;
		background-color: transparent;
		cursor: pointer;
		transition: 0.3s;
		&:hover {
			color: ${(props) => props.theme.mainAccentColor};
		}
	}
	@media only screen and (max-width: 767px) {
		button {
			font-size: 2.5rem;
			width: 60px;
		}
	}
`;
const links = [
	{ label: 'Home', href: '/', target: '_self', routerLink: true },
	{ label: 'Pokedex', href: '/pokedex', target: '_self', routerLink: true },
	{
		label: 'GitHub',
		href: 'https://github.com/PandaaaDev',
		target: '_blank',
		routerLink: false,
	},
];
const Navigation = () => {
	const [showNav, setShowNav] = useState(false);
	const handleShowNav = () => {
		setShowNav(!showNav);
	};
	return (
		<>
			<StyledNav>
				<Logo />
				<ButtonsContainer>
					<ThemeButton></ThemeButton>
					<BurgerButton onClick={handleShowNav} showNav={showNav} />
				</ButtonsContainer>
			</StyledNav>
			<NavList links={links} active={showNav} />
		</>
	);
};

export default Navigation;
