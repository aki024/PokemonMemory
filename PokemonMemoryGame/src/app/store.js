import { configureStore } from '@reduxjs/toolkit';
import gameRunningReducer from './gameRunningSlice/gameRunningSlice';

export default configureStore({
	reducer: {
		gameRunning: gameRunningReducer
	}
});
