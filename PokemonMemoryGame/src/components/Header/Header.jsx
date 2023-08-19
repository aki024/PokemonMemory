import { useDispatch, useSelector } from 'react-redux';
import { stopGame } from '../../app/gameRunningSlice/gameStatusSlice';
import { resetScore } from '../../app/scoreSlice/scoreSlice';
import styles from './Header.module.scss';

const Header = () => {
	const score = useSelector((state) => state.score.value);
	const highscore = useSelector((state) => state.score.highscore);
	const numberOfCards = useSelector((state) => state.numberOfCards.value);

	const dispatch = useDispatch();

	const quitGameHandler = () => {
		dispatch(resetScore());
		dispatch(stopGame());
	};

	return (
		<header>
			<div>
				<button onClick={quitGameHandler}>
					<img src='https://sharkri.github.io/pokememo/pokeball.png' alt='Pokeball' />
					<span>Poke</span>
					<span>Memo</span>
				</button>
			</div>
			<div>
				<h4>Score: {score}</h4>
				<h4>Highscore : {highscore}</h4>
			</div>
			<div>
				<h4>
					{score} / {numberOfCards}
				</h4>
			</div>
		</header>
	);
};

export default Header;
