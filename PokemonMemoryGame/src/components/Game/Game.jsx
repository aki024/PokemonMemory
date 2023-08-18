import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import styles from './Game.module.scss';
import Card from '../Card/Card';
import getRandomPokemons from '../util/getRandomPokemons';

const Game = () => {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cardsShowing, setCardsShowing] = useState(true);
	const numberOfCards = useSelector((state) => state.numberOfCards.value);

	useEffect(() => {
		const getPokemonList = async () => {
			const pokemonList = await getRandomPokemons(numberOfCards);
			setPokemons(pokemonList);
			setLoading(false);
		};
		getPokemonList();
	}, [numberOfCards]);

	useEffect(() => {
		console.log('Game component + pokemons updated');
	}, []);

	const handleClickTest = (id) => {
		// const newArray = shuffleCards(pokemons);
		setCardsShowing(false);
		console.log(pokemons);
		setTimeout(() => {
			setCardsShowing(true);
			shufflePokemons();
		}, 850);
		return;

		// setPokemons(newArray);
		// console.log(newArray);
	};

	const shuffleCards = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const shufflePokemons = () => {
		const availableCards = [...pokemons];
		const shuffledPokemons = [];
		while (availableCards.length) {
			const index = Math.floor(Math.random() * availableCards.length);
			const card = availableCards[index];
			// Need to give a new key/uniqid for react to detect a rerender
			card.id = uniqid();
			shuffledPokemons.push(card);
			availableCards.splice(index, 1);
		}
		setPokemons(shuffledPokemons);
	};

	return (
		<>
			{!loading && (
				<div className={styles.cards}>
					{pokemons.map((pokemon, index) => {
						return <Card key={pokemon.id} pokemon={pokemon} test={() => handleClickTest(index)} cardsShowing={cardsShowing} />;
					})}
					<button onClick={() => setCardsShowing(true)}>Turn</button>
				</div>
			)}
		</>
	);
};

export default Game;
