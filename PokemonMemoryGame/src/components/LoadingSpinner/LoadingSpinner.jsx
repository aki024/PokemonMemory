import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
	return (
		<div className={styles.pokemonLoadingScreen}>
			<div className={styles.ballSpinner} />
			<p>Loading Pokemon</p>
		</div>
	);
};

export default LoadingSpinner;
