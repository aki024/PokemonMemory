import { createSlice } from '@reduxjs/toolkit';

const getHighscore = () => {
	if (!localStorage.getItem('highscore')) {
		localStorage.setItem('highscore', 0);
	}
	const highScore = JSON.parse(localStorage.getItem('highscore') || 0);
	return highScore;
};

export const scoreSlice = createSlice({
	name: 'score',
	initialState: {
		value: 0,
		highscore: getHighscore()
	},
	reducers: {
		incrementScore: (state) => {
			state.value++;
		},
		resetScore: (state) => {
			state.value = 0;
		},
		updateHighscore: (state, action) => {
			localStorage.setItem('highscore', action.payload);
			state.highscore = getHighscore();
		}
	}
});

export const { incrementScore, resetScore, updateHighscore } = scoreSlice.actions;

export default scoreSlice.reducer;
