import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import OptionMenu from '../OptionMenu/OptionMenu';
import Game from '../Game/Game';
import styles from './Main.module.scss';
import menuImage from '../../assets/images/menu.jpg';

const Main = () => {
	const [difficulty, setDifficulty] = useState(menuImage);

	const gameStatus = useSelector((state) => state.gameStatus.value);

	useEffect(() => {
		document.body.style.backgroundImage = `url(${difficulty})`;
	}, [difficulty]);

	return (
		<main className={styles.main}>
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
