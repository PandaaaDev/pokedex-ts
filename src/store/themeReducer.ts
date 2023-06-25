import { createSlice } from '@reduxjs/toolkit';
import { themeType } from '@/types/main';
const initialState: themeType = {
	$darkTheme: true,
};
const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggle(state) {
			state.$darkTheme = !state.$darkTheme;
		},
		dark(state) {
			state.$darkTheme = true;
		},
		light(state) {
			state.$darkTheme = false;
		},
	},
});
export default themeSlice;
export const { toggle, dark, light } = themeSlice.actions;
