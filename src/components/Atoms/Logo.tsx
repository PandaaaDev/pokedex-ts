import { styled } from 'styled-components';
import { darkTheme, lightTheme } from '@/globalStyles.ts';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectorType } from '@/types/main';

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
	color: ${(props) =>
		props.theme.$darkMode ? darkTheme.color : lightTheme.color};
`;

const Logo = () => {
	const theme = useSelector((state: selectorType) => state.theme.$darkTheme);
	return (
		<LogoContainer>
			<LogoImg src='./pokeball.png' alt='pokeball' />
			<LogoText theme={{ $darkMode: theme }}>Pokedex</LogoText>
		</LogoContainer>
	);
};

export default Logo;
