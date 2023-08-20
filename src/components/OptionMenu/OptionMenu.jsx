import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../../app/gameRunningSlice/gameStatusSlice';
import { selectNumberOfCards } from '../../app/numberOfCardsSlice/numberOfCardsSlice';
import styles from './OptionMenu.module.scss';
import easy from '../../assets/images/Easy.jpg';
import normal from '../../assets/images/Normal.jpg';
import hard from '../../assets/images/Hard.png';
import clickSound from '../../assets/sounds/click.mp3';
import playAudio from '../../util/playAudio';
import global from '../../config';

const clickAudio = new Audio(clickSound);
clickAudio.volume = 0.2;

const OptionMenu = ({ background, setBackground }) => {
	const { cardGoals } = global;

	const dispatch = useDispatch();

	const [cardGoal, setCardGoal] = useState(cardGoals[0]);

	const handleStartGame = (e) => {
		e.preventDefault();

		switch (cardGoal) {
			case 10:
				setBackground(normal);
				dispatch(startGame());
				break;

			case 18:
				setBackground(hard);
				dispatch(startGame());
				break;

			default:
				setBackground(easy);
				dispatch(startGame());
		}
	};

	const handleChange = (newCardGoal) => {
		setCardGoal(newCardGoal);
		dispatch(selectNumberOfCards(newCardGoal));
		playAudio(clickAudio);
	};
	return (
		<form onSubmit={handleStartGame} className={styles.optionForm}>
			<div className={styles.title}>Please select difficulty</div>
			<div className={styles.difficultyOptions}>
				<label htmlFor='easy' className={cardGoal === 5 ? styles.checked : ''}>
					Easy
					<input type='radio' id='easy' name='test' value={cardGoals[0]} defaultChecked onChange={(e) => handleChange(+e.target.value)} />
				</label>
				<label htmlFor='normal' className={cardGoal === 10 ? styles.checked : ''}>
					Normal
					<input type='radio' id='normal' name='test' value={cardGoals[1]} onChange={(e) => handleChange(+e.target.value)} />
				</label>
				<label htmlFor='hard' className={cardGoal === 18 ? styles.checked : ''}>
					Hard
					<input type='radio' id='hard' name='test' value={cardGoals[2]} onChange={(e) => handleChange(+e.target.value)} />
				</label>
			</div>

			<div className={styles.startDiv}>
				<button type='submit'>start game</button>
				<button type='button' onClick={() => window.open('https://github.com/aki024/PokemonMemory/tree/main/PokemonMemoryGame', '_blank')}>
					Github repo
				</button>
			</div>
		</form>
	);
};

export default OptionMenu;
