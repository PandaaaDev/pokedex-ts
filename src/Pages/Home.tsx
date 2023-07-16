import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
const StyledContainet = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	gap: 15px;
	height: 80vh;
	padding: 10%;
	margin-top: 10%;
	border-radius: 20px;
	border: 2px solid ${({ theme }) => theme.mainAccentColor};
	h1 {
		font-size: 3rem;
	}
	img {
		width: 100%;
	}
	@media (min-width: 1440px) {
		margin-top: 4%;

		img {
			width: 50%;
		}
	}
`;
const LinkContainer = styled.div`
	display: flex;
	gap: 5px;
	font-size: 1.4rem;
	a {
		border: 2px solid ${({ theme }) => theme.color};
		padding: 10px;
		border-radius: 20px;
		text-decoration: none;
		color: ${({ theme }) => {
			return theme.color;
		}};
	}
`;
const Home = () => {
	return (
		<StyledContainet>
			<h1>Wellcome to Pokedex</h1>
			<img src='./pikachu.png'></img>
			<LinkContainer>
				<Link to='/pokedex'>See Pokedex</Link>
				<a target='_blank' href='https://github.com/PandaaaDev/pokedex-ts'>
					See Repository
				</a>
			</LinkContainer>
		</StyledContainet>
	);
};

export default Home;
