import { configureStore } from '@reduxjs/toolkit';
import gameStatusReducer from './gameRunningSlice/gameStatusSlice';
import numberOfCardsReducer from './numberOfCardsSlice/numberOfCardsSlice';
import scoreReducer from './scoreSlice/scoreSlice';

export default configureStore({
	reducer: {
		gameStatus: gameStatusReducer,
		numberOfCards: numberOfCardsReducer,
		score: scoreReducer
	}
});
