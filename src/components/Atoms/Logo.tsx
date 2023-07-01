import { styled } from 'styled-components';
const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	grid-area: logo;
`;
const LogoImg = styled.img`
	width: 50px;
	height: 50px;
`;
const LogoText = styled.div`
	font-size: 4rem;
	color: ${(props) => props.theme.color};
`;

const Logo = () => {
	return (
		<LogoContainer>
			<LogoImg src='./pokeball.png' alt='pokeball' />
			<LogoText>Pokedex</LogoText>
		</LogoContainer>
	);
};

export default Logo;
