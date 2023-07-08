import { Link } from 'react-router-dom';
import Page from '@/Templates/Page';
const Home = () => {
	return (
		<Page>
			<Link to={'pokedex'}>POKEDEX</Link>
		</Page>
	);
};

export default Home;
