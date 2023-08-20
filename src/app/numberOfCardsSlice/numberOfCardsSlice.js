import { createSlice } from '@reduxjs/toolkit';

export const numberOfCardsSlice = createSlice({
	name: 'numberOfCards',
	initialState: {
		value: 5
	},
	reducers: {
		selectNumberOfCards: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { selectNumberOfCards } = numberOfCardsSlice.actions;

export default numberOfCardsSlice.reducer;
