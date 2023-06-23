import { useState } from 'react';
import { URLType } from './types/main';
import useFetch from './hooks/useFetch';

function App() {
	const [currentUrl, setCurrentUrl] = useState<URLType>(
		'https://pokeapi.co/api/v2/pokemon'
	);
	const data: any = useFetch(currentUrl);
	console.log(data);
	if (data.error) {
		return <>an error occured</>;
	}
	return <div>{data.loading ? <>Loading... </> : <div>some text</div>}</div>;

	// const [nextPage, setNextPage] = useState<URLType>(undefined);
	// const [prevPage, setPrevPage] = useState<URLType>(undefined);
	// const [pokemons, setPokemons] = useState<PokemonArray>([]);
	// const [loading, setLoading] = useState<boolean>(true);

	// const { data, loading, error } = useFetch(currentUrl);

	// useEffect(() => {
	// 	const controller = new AbortController();
	// 	const signal = controller.signal;
	// 	const reason = new DOMException('clening up', 'AbortError');
	// 	setLoading(true);
	// 	axios
	// 		.get(currentUrl as string, { signal })
	// 		.then((response) => {
	// 			setNextPage(response.data.next);
	// 			setPrevPage(response.data.previous);
	// 			setPokemons(response.data.results);
	// 			setLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// 	return () => {
	// 		controller.abort(reason);
	// 	};
	// }, [currentUrl]);
	// if (loading) return <>Loading....</>;

	// return (
	// 	<>
	// 		{pokemons.length > 0 &&
	// 			pokemons.map((pokemon) => {
	// 				return (
	// 					<Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
	// 				);
	// 			})}
	// 		<button
	// 			onClick={() => {
	// 				setCurrentUrl('https://pokeapi.co/api/v2/pokemon');
	// 			}}
	// 		>
	// 			Reset
	// 		</button>
	// 		{prevPage && (
	// 			<button
	// 				onClick={() => {
	// 					setCurrentUrl(prevPage as string);
	// 				}}
	// 			>
	// 				Previous Page
	// 			</button>
	// 		)}
	// 		{nextPage && (
	// 			<button
	// 				onClick={() => {
	// 					setCurrentUrl(nextPage as string);
	// 				}}
	// 			>
	// 				Next Page
	// 			</button>
	// 		)}
	// 	</>
	// );
}

export default App;
