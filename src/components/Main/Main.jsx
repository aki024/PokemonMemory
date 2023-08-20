import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import OptionMenu from '../OptionMenu/OptionMenu';
import Game from '../Game/Game';
import styles from './Main.module.scss';

const Main = ({ background, setBackground }) => {
	const gameStatus = useSelector((state) => state.gameStatus.value);

	useEffect(() => {
		document.body.style.backgroundImage = `url(${background})`;
	}, [background]);

	return (
		<main className={styles.main}>
			{gameStatus === 'not-running' && (
				<Modal>
					<OptionMenu setBackground={setBackground} background={background} />
				</Modal>
			)}
			{gameStatus !== 'not-running' && <Game />}
		</main>
	);
};

export default Main;
