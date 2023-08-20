import { useDispatch, useSelector } from 'react-redux';
import { stopGame } from '../../app/gameRunningSlice/gameStatusSlice';
import { selectNumberOfCards } from '../../app/numberOfCardsSlice/numberOfCardsSlice';
import { resetScore } from '../../app/scoreSlice/scoreSlice';
import global from '../../config';
import styles from './Header.module.scss';
import pokeball from '../../assets/images/pokeball.png';

const Header = ({ setBackground, menuImage }) => {
	const { cardGoals } = global;

	const score = useSelector((state) => state.score.value);
	const highscore = useSelector((state) => state.score.highscore);
	const numberOfCards = useSelector((state) => state.numberOfCards.value);

	const dispatch = useDispatch();

	const quitGameHandler = () => {
		dispatch(resetScore());
		setBackground(menuImage);
		dispatch(selectNumberOfCards(cardGoals[0]));
		dispatch(stopGame());
	};

	return (
		<header>
			<button onClick={quitGameHandler}>
				<img src={pokeball} alt='Pokeball' />
				<span>Poke</span>
				<span>Memo</span>
			</button>
			<div className={styles.scoreBoard}>
				<h4>Score:{score}</h4>
				<h4>Highscore:{highscore}</h4>
			</div>
			<div className={styles.progress}>
				<h4>
					{score} / {numberOfCards}
				</h4>
			</div>
		</header>
	);
};

export default Header;
