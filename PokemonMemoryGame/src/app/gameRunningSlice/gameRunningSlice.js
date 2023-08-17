import { createSlice } from '@reduxjs/toolkit';

export const gameRunningSlice = createSlice({
	name: 'gameRunning',
	initialState: {
		isRunning: false
	},
	reducers: {
		startGame: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes.
			// Also, no return statement is required from these functions.
			state.isRunning = true;
		},
		stopGame: (state) => {
			state.isRunning = false;
		}
	}
});

// Action creators are generated for each case reducer function
export const { startGame, stopGame } = gameRunningSlice.actions;

export default gameRunningSlice.reducer;
