import { useDispatch, useSelector } from 'react-redux';
import { playAgain, stopGame } from '../../app/gameRunningSlice/gameStatusSlice';
import { resetScore } from '../../app/scoreSlice/scoreSlice';

const GameOverScreen = () => {
	const gameStatus = useSelector((state) => state.gameStatus.value);
	const score = useSelector((state) => state.score.value);
	const dispatch = useDispatch();

	const playAgainHandler = () => {
		dispatch(resetScore());
		dispatch(playAgain());
	};

	const quitGameHandler = () => {
		dispatch(resetScore());
		dispatch(stopGame());
	};

	return (
		<div>
			<h3>{gameStatus === 'game-won' ? 'You win!' : 'Game over!'}</h3>
			<div>
				<img src={gameStatus === 'game-won' ? 'https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif' : 'https://media.tenor.com/TRTMIXMvMlAAAAAC/ditto-sad.gif'} alt={gameStatus} />
			</div>
			<h4>Your final score is {score}</h4>
			<div>
				<button onClick={playAgainHandler}>Play again</button>
				<button onClick={quitGameHandler}>Quit</button>
			</div>
		</div>
	);
};

export default GameOverScreen;
