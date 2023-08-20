import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import base from '../util/base';
import { incrementScore, updateHighscore } from '../../app/scoreSlice/scoreSlice';
import { loseGame, winGame } from '../../app/gameRunningSlice/gameStatusSlice';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import GameOverScreen from '../GameOverScreen/GameOverScreen';
import styles from './Game.module.scss';

const Game = () => {
	const { shuffleArray, getRandomPokemons, updateCardsClicked } = base;
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const [cardsShowing, setCardsShowing] = useState(true);

	const numberOfCards = useSelector((state) => state.numberOfCards.value);
	const score = useSelector((state) => state.score.value);
	const highscore = useSelector((state) => state.score.highscore);
	const gameStatus = useSelector((state) => state.gameStatus.value);

	const dispatch = useDispatch();

	const getPokemonList = useCallback(async () => {
		const pokemonList = await getRandomPokemons(numberOfCards);

		setPokemons(pokemonList);
		setLoading(false);
	}, [getRandomPokemons, numberOfCards]);

	useEffect(() => {
		getPokemonList();
	}, [getPokemonList]);

	useEffect(() => {
		if (gameStatus === 'play-again') {
			getPokemonList();
			setCardsShowing(true);
			return;
		}
	}, [getPokemonList, gameStatus]);

	useEffect(() => {
		if (score > highscore) {
			dispatch(updateHighscore(score));
		}
	}, [score, highscore, dispatch]);

	const handleCardClick = (index) => {
		setCardsShowing(false);

		if (!pokemons[index].isClicked) {
			//set isClicked to true
			updateCardsClicked(pokemons, index, setPokemons);
			//add point
			dispatch(incrementScore());
		} else {
			dispatch(loseGame());
			setCardsShowing(false);
			return;
		}

		const everyCardClicked = pokemons.every((card) => card.isClicked);

		if (everyCardClicked) {
			dispatch(winGame());
			return;
		}

		setTimeout(() => {
			setCardsShowing(true);
			shuffleArray(pokemons, setPokemons);
		}, 850);

		return;
	};

	return (
		<>
			{(!loading || gameStatus === 'play-again') && (
				<div className={styles.cards}>
					<p>Highscore {highscore}</p> <br />
					{score} / {numberOfCards}
					{gameStatus !== 'running' && gameStatus !== 'play-again' && (
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
