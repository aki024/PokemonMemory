import './styles/App.scss';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';

function App() {
	const [gameRunning, setGameRunning] = useState(false);
	useEffect(() => {
		const getPokemon = async () => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0`);
			const test = await res.json();
			const { results } = test;
			console.log(results);
			return results;
		};
		let a = getPokemon();
		console.log(a);
	}, []);

	return (
		<>
			<Main gameRunning={gameRunning} setGameRunning={setGameRunning} />
		</>
	);
}

export default App;
