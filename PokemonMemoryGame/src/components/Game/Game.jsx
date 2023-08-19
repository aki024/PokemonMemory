import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Game.module.scss';
import Card from '../Card/Card';
import getRandomPokemons from '../util/getRandomPokemons';
import { incrementScore } from '../../app/scoreSlice/scoreSlice';
import { loseGame, winGame } from '../../app/gameRunningSlice/gameStatusSlice';
import Modal from '../Modal/Modal';
import GameOverScreen from '../GameOverScreen/GameOverScreen';

const Game = () => {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cardsShowing, setCardsShowing] = useState(true);

	const numberOfCards = useSelector((state) => state.numberOfCards.value);
	const score = useSelector((state) => state.score.value);
	const gameStatus = useSelector((state) => state.gameStatus.value);

	const dispatch = useDispatch();

	useEffect(() => {
		const getPokemonList = async () => {
			const pokemonList = await getRandomPokemons(numberOfCards);
			setPokemons(pokemonList);
			setLoading(false);
		};
		getPokemonList();
	}, [numberOfCards]);

	const handleCardClick = (index) => {
		setCardsShowing(false);
		if (!pokemons[index].isClicked) {
			//set isClicked to true
			updateCardsClicked(index);
			//add point
			dispatch(incrementScore());
			// dispatch(winGame())
		} else {
			dispatch(loseGame());
			setCardsShowing(false);
			return;
			//game over code
		}

		setTimeout(() => {
			setCardsShowing(true);
			shuffleCards(pokemons);
		}, 850);
		return;
	};

	const updateCardsClicked = (index) => {
		const newCards = [...pokemons];
		newCards[index].isClicked = true;
		setPokemons(newCards);
	};

	const shuffleCards = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		setPokemons(array);
	};

	return (
		<>
			{!loading && (
				<div className={styles.cards}>
					{score}
					{gameStatus === 'game-lost' && (
						<Modal>
							<GameOverScreen />
						</Modal>
					)}
					{pokemons.map((pokemon, index) => {
						return <Card key={pokemon.id} pokemon={pokemon} onClick={() => handleCardClick(index)} cardsShowing={cardsShowing} />;
					})}
				</div>
			)}
		</>
	);
};

export default Game;
