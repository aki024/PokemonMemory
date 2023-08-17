import styles from './Modal.module.scss';

const Modal = ({ children }) => {
	return <div className={styles.modal}>{children}</div>;
};

export default Modal;
