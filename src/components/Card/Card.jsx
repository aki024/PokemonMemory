import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './Card.module.scss';
import cardBack from '../../assets/images/card-back.png';

const ANIMATION_TIME = 850;

export default function Card({ pokemon, onClick, cardsShowing }) {
	const { image, name, id } = pokemon;

	const [interactable, setInteractable] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setInteractable(true), ANIMATION_TIME);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<Tilt
			tiltReverse
			reset
			glareEnable={true}
			glareMaxOpacity={0.4}
			glareColor={'#f1b818'}
			glarePosition='all'
			className={`${styles.cardContainer} ${cardsShowing ? styles.front : styles.back} ${cardsShowing && interactable ? undefined : styles.pointerEventsNone}`}>
			<div className={styles.cardInner}>
				<div className={styles.cardFront}>
					<button className={styles.card} onClick={onClick}>
						<img src={image} alt={name} className={styles.cardImage} draggable='false' />
						<p className={styles.cardName}>
							<span className={styles.name}>{name}</span>
						</p>
					</button>
				</div>
				<div className={styles.cardBack}>
					<img src={cardBack} alt='pokemon card back' className={styles.back} />
				</div>
			</div>
		</Tilt>
	);
}
