import { Link } from 'react-router-dom';
import Page from '@/Templates/Page';
const Home = () => {
	return (
		<Page>
			<h1>Pokedex</h1>
			<Link to='/pokedex'>See Pokemons</Link>
			<Link to='/singin'>Sing in!</Link>
			<Link to='/login'>Login</Link>
		</Page>
	);
};

export default Home;
