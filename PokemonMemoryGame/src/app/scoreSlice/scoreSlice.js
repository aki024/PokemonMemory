import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
	name: 'score',
	initialState: {
		value: 0
	},
	reducers: {
		incrementScore: (state) => {
			state.value += 1;
		}
	}
});

export const { incrementScore } = scoreSlice.actions;

export default scoreSlice.reducer;
