import Main from './components/Main/Main';
import Header from './components/Header/Header';
import './styles/App.scss';
import { useSelector } from 'react-redux';

function App() {
	const gameStatus = useSelector((state) => state.gameStatus.value);
	const loading = useSelector((state) => state.loading.value);

	return (
		<>
			{gameStatus !== 'not-running' && !loading && <Header />}
			<Main />
		</>
	);
}

export default App;
