import { configureStore } from '@reduxjs/toolkit';
import gameStatusReducer from './gameRunningSlice/gameStatusSlice';
import loadingReducer from './loadingSlice/loadingSlice';
import numberOfCardsReducer from './numberOfCardsSlice/numberOfCardsSlice';
import scoreReducer from './scoreSlice/scoreSlice';

export default configureStore({
	reducer: {
		gameStatus: gameStatusReducer,
		numberOfCards: numberOfCardsReducer,
		score: scoreReducer,
		loading: loadingReducer
	}
});
