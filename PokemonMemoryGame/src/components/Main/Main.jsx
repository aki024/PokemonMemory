import { useState } from 'react';
import styles from './Main.module.scss';
import menuImage from '../../assets/images/menu.jpg';

import Modal from '../Modal/Modal';
import OptionMenu from '../OptionMenu/OptionMenu';
import Game from '../Game/Game';

const Main = ({ gameRunning, setGameRunning }) => {
	const [difficulty, setDifficulty] = useState(menuImage);
	return (
		<main className={styles.main} style={{ backgroundImage: `url(${difficulty})` }}>
			{!gameRunning && (
				<Modal>
					<OptionMenu gameRunning={gameRunning} setGameRunning={setGameRunning} setDifficulty={setDifficulty} />
				</Modal>
			)}
			{gameRunning && <Game />}
		</main>
	);
};

export default Main;
