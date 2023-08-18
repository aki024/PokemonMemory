import './styles/App.scss';
import Main from './components/Main/Main';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		console.log('App');
	}, []);
	return (
		<>
			<Main />
		</>
	);
}

export default App;
