import { useEffect, useState } from 'react';
// import "../styles/Card.css";
import Tilt from 'react-parallax-tilt';

export default function Card({ pokemon }) {
	const { image, name } = pokemon;
	const ANIMATION_TIME = 850;
	const [interactable, setInteractable] = useState(false);

	useEffect(() => {
		setTimeout(() => setInteractable(true), ANIMATION_TIME);
	}, []);

	return (
		<Tilt tiltReverse reset glareEnable={true} glareMaxOpacity={0.4} glareColor={'#f1b818'} glarePosition='all' className={`card-container ${cardsShowing ? 'front' : 'back'} ${cardsShowing && interactable ? undefined : 'pointer-events-none'}`}>
			<div className='card-inner'>
				<div className='card-front'>
					<button className='card'>
						<img src={image} alt={name} className='card-image' draggable='false' />
						<p className='card-name'>
							<span className='name'>{name}</span>
						</p>
					</button>
				</div>
				<div className='card-back'>
					<img src={`https://raw.githubusercontent.com/Sharkri/pokememo/main/public/card-back.png`} alt='pokemon card back' className='back' />
				</div>
			</div>
		</Tilt>
	);
}
