import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '../../app/gameRunningSlice/gameRunningSlice';
import easy from '../../assets/images/Easy.jpg';
import normal from '../../assets/images/Normal.jpg';
import hard from '../../assets/images/Hard.png';

const OptionMenu = ({ setDifficulty }) => {
	const cardGoals = [5, 10, 18];
	const gameRunning = useSelector((state) => state.gameRunning.isRunning);
	const dispatch = useDispatch();
	const [cardGoal, setCardGoal] = useState(cardGoals[0]);

	const handleStartGame = (e) => {
		e.preventDefault();
		switch (cardGoal) {
			case '10':
				setDifficulty(normal);
				dispatch(startGame());
				break;
			case '18':
				setDifficulty(hard);
				dispatch(startGame());
				break;
			default:
				setDifficulty(easy);
				dispatch(startGame());
		}
	};

	const handleChange = (newCardGoal) => {
		setCardGoal(newCardGoal);

		// playAudio(clickAudio);
	};
	return (
		<form onSubmit={handleStartGame}>
			<div className='level-options'>
				<label htmlFor='easy'>Easy</label>
				<input type='radio' id='easy' name='test' value={cardGoals[0]} defaultChecked onChange={(e) => handleChange(e.target.value)} />
				<label htmlFor='normal'>Normal</label>
				<input type='radio' id='normal' name='test' value={cardGoals[1]} onChange={(e) => handleChange(e.target.value)} />
				<label htmlFor='hard'>Hard</label>
				<input type='radio' id='hard' name='test' value={cardGoals[2]} onChange={(e) => handleChange(e.target.value)} />
			</div>

			<div className='start-options'>
				<button type='submit'>Click me</button>
			</div>
		</form>
	);
};

export default OptionMenu;
