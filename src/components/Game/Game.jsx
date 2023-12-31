import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import GameOverScreen from '../GameOverScreen/GameOverScreen';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { startLoading, stopLoading } from '../../app/loadingSlice/loadingSlice';
import { incrementScore, updateHighscore } from '../../app/scoreSlice/scoreSlice';
import { loseGame, winGame } from '../../app/gameRunningSlice/gameStatusSlice';
import base from '../../util/base';
import styles from './Game.module.scss';
import flipCardSound from '../../assets/sounds/flip.mp3';
import gameStartSound from '../../assets/sounds/gameStart.mp3';

const flipCardAudio = new Audio(flipCardSound);
flipCardAudio.volume = 0.2;

const gameStartAudio = new Audio(gameStartSound);
gameStartAudio.volume = 0.2;

const Game = () => {
	const { shuffleArray, getRandomPokemons, updateCardsClicked, playAudio } = base;

	const [pokemons, setPokemons] = useState([]);
	const [cardsShowing, setCardsShowing] = useState(true);

	const numberOfCards = useSelector((state) => state.numberOfCards.value);
	const score = useSelector((state) => state.score.value);
	const highscore = useSelector((state) => state.score.highscore);
	const gameStatus = useSelector((state) => state.gameStatus.value);
	const loading = useSelector((state) => state.loading.value);

	const dispatch = useDispatch();

	const getPokemonList = useCallback(async () => {
		dispatch(startLoading());

		const pokemonList = await getRandomPokemons(numberOfCards);

		setPokemons(pokemonList);

		dispatch(stopLoading());
		playAudio(gameStartAudio);
	}, [getRandomPokemons, numberOfCards, playAudio, dispatch]);

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
			playAudio(flipCardAudio);
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

	if (loading) {
		return (
			<>
				<LoadingSpinner />
			</>
		);
	}

	return (
		<>
			{(!loading || gameStatus === 'play-again') && (
				<div className={styles.cards}>
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
