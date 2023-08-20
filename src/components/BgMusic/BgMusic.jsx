import { useState } from 'react';
import clickSound from '../../assets/sounds/click.mp3';
import playAudio from '../../util/playAudio';
import styles from './BgMusic.module.scss';
import musicOn from '../../assets/images/music-on.png';
import musicOff from '../../assets/images/music-off.png';
import openingBGM from '../../assets/sounds/opening.mp3';
import ReactHowler from 'react-howler';

const clickAudio = new Audio(clickSound);
clickAudio.volume = 0.3;

const initialBgmOn = JSON.parse(localStorage.getItem('bgm-on'));

const BgMusic = () => {
	const [isBGMOn, setIsBGMOn] = useState(initialBgmOn === null ? true : initialBgmOn);

	const imgName = isBGMOn ? musicOn : musicOff;

	const musicHandler = () => {
		playAudio(clickAudio);

		const newIsBGMOn = !isBGMOn;
		localStorage.setItem('bgm-on', newIsBGMOn);
		setIsBGMOn(newIsBGMOn);
	};

	return (
		<>
			<ReactHowler src={openingBGM} volume={0.2} loop playing={isBGMOn} />
			<button className={styles.bgmToggle} onClick={musicHandler}>
				<img src={imgName} alt={imgName} />
			</button>
		</>
	);
};

export default BgMusic;
