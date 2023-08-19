import { createSlice } from '@reduxjs/toolkit';

export const gameStatusSlice = createSlice({
	name: 'gameStatus',
	initialState: {
		value: 'not-running'
	},
	reducers: {
		startGame: (state) => {
			state.value = 'running';
		},
		stopGame: (state) => {
			state.value = 'not-running';
		},
		winGame: (state) => {
			state.value = 'game-won';
		},
		loseGame: (state) => {
			state.value = 'game-lost';
		}
	}
});

export const { startGame, stopGame, winGame, loseGame } = gameStatusSlice.actions;

export default gameStatusSlice.reducer;
