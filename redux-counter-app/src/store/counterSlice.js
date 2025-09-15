import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
	history: [],
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
			state.history.push(state.value);
		},
		decrement: (state) => {
			state.value -= 1;
			state.history.push(state.value);
		},
		reset: (state) => {
			state.value = 0;
			state.history.push(state.value);
		},
		clearHistory: (state) => {
			state.history = [];
		},
	},
});

export const { increment, decrement, reset, clearHistory } = counterSlice.actions;
export const selectValue = (state) => state.counter.value;
export const selectHistory = (state) => state.counter.history;
export default counterSlice.reducer;
