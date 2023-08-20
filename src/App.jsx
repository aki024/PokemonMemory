import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import menuImage from './assets/images/menu.jpg';
import './styles/App.scss';
import BgMusic from './components/BgMusic/BgMusic';

function App() {
	const gameStatus = useSelector((state) => state.gameStatus.value);
	const loading = useSelector((state) => state.loading.value);
	const [background, setBackground] = useState(menuImage);

	return (
		<>
			<BgMusic />
			{gameStatus !== 'not-running' && !loading && <Header setBackground={setBackground} menuImage={menuImage} />}
			<Main background={background} setBackground={setBackground} />
		</>
	);
}

export default App;
