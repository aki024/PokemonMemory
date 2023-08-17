import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
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
					{pokemons.map((pokemon) => {
						return (
							<div key={pokemon.id}>
								<Card pokemon={pokemon} />
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Game;
