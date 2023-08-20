import { createSlice } from '@reduxjs/toolkit';

export const gameRunningSlice = createSlice({
	name: 'gameRunning',
	initialState: {
		isRunning: false
	},
	reducers: {
		startGame: (state) => {
			state.isRunning = true;
		},
		stopGame: (state) => {
			state.isRunning = false;
		}
	}
});

export const { startGame, stopGame } = gameRunningSlice.actions;

export default gameRunningSlice.reducer;
