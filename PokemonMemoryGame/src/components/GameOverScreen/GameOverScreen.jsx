import { useDispatch, useSelector } from 'react-redux';
import { playAgain, stopGame } from '../../app/gameRunningSlice/gameStatusSlice';
import { selectNumberOfCards } from '../../app/numberOfCardsSlice/numberOfCardsSlice';
import { resetScore } from '../../app/scoreSlice/scoreSlice';
import global from '../../config';
import style from './GameOverScreen.module.scss';

const GameOverScreen = () => {
	const { cardGoals } = global;

	const gameStatus = useSelector((state) => state.gameStatus.value);
	const score = useSelector((state) => state.score.value);
	const dispatch = useDispatch();

	const playAgainHandler = () => {
		dispatch(resetScore());
		dispatch(playAgain());
	};

	const quitGameHandler = () => {
		dispatch(resetScore());
		dispatch(selectNumberOfCards(cardGoals[0]));
		dispatch(stopGame());
	};

	return (
		<div className={style.gameOverContainer}>
			<h3>{gameStatus === 'game-won' ? 'You win!' : 'Game over!'}</h3>
			<div className={style.imageContainer}>
				<img src={gameStatus === 'game-won' ? 'https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif' : 'https://media.tenor.com/TRTMIXMvMlAAAAAC/ditto-sad.gif'} alt={gameStatus} />
			</div>
			<h4>Your final score is {score}</h4>
			<div className={style.gameOver}>
				<button onClick={playAgainHandler}>Play again</button>
				<button onClick={quitGameHandler}>Quit</button>
			</div>
		</div>
	);
};

export default GameOverScreen;
