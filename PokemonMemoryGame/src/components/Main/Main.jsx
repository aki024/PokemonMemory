import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Main.module.scss';
import menuImage from '../../assets/images/menu.jpg';

import Modal from '../Modal/Modal';
import OptionMenu from '../OptionMenu/OptionMenu';
import Game from '../Game/Game';

const Main = () => {
	const [difficulty, setDifficulty] = useState(menuImage);
	const gameStatus = useSelector((state) => state.gameStatus.value);

	return (
		<main className={styles.main} style={{ backgroundImage: `url(${difficulty})` }}>
			{gameStatus === 'not-running' && (
				<Modal>
					<OptionMenu setDifficulty={setDifficulty} />
				</Modal>
			)}
			{gameStatus !== 'not-running' && <Game />}
		</main>
	);
};

export default Main;
