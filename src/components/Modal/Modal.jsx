import styles from './Modal.module.scss';

const Modal = ({ children }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}> {children}</div>
		</div>
	);
};

export default Modal;
