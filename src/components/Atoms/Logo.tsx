import { styled } from 'styled-components';
const LogoContainer = styled.div`
	grid-area: logo;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
	}
`;
const LogoImg = styled.img`
	width: 50px;
	height: 50px;
`;
const LogoText = styled.div`
	color: ${(props) => props.theme.color};
	font-size: 4rem;
	@media only screen and (max-width: 767px) {
		font-size: 2.5rem;
	}
`;

const Logo = () => {
	return (
		<LogoContainer>
			<a href='/home'>
				<LogoImg src='./pokeball.png' alt='pokeball' />
				<LogoText>Pokedex</LogoText>
			</a>
		</LogoContainer>
	);
};

export default Logo;
