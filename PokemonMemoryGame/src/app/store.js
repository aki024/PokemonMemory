import { configureStore } from '@reduxjs/toolkit';
import gameRunningReducer from './gameRunningSlice/gameRunningSlice';
import numberOfCardsReducer from './numberOfCardsSlice/numberOfCardsSlice';

export default configureStore({
	reducer: {
		gameRunning: gameRunningReducer,
		numberOfCards: numberOfCardsReducer
	}
});
