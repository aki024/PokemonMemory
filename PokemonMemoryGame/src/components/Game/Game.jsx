import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getRandomPokemons from '../util/getRandomPokemons';

const Game = () => {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const numberOfCards = useSelector((state) => state.numberOfCards.value);

	useEffect(() => {
		const getPokemonList = async () => {
			const pokemonList = await getRandomPokemons(numberOfCards);
			setPokemons(pokemonList);
			setLoading(false);
		};
		getPokemonList();
	}, [numberOfCards]);

	return (
		<>
			{!loading && (
				<div>
					GAME IS RUNNING {numberOfCards} {pokemons.length}
				</div>
			)}
		</>
	);
};

export default Game;
