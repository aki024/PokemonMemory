import './styles/App.scss';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {
	const [gameRunning, setGameRunning] = useState(false);

	return (
		<>
			<Main gameRunning={gameRunning} setGameRunning={setGameRunning} />
		</>
	);
}

export default App;
