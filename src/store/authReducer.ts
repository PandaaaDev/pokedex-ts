import { createSlice } from '@reduxjs/toolkit';
const initialState: Istate = { user: null, authToken: null };
interface Istate {
	user: string | null;
	authToken: string | null;
}
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			const { user, authToken } = action.payload;
			state.user = user;
			state.authToken = authToken;
		},
		logout(state) {
			state.user = null;
			state.authToken = null;
		},
	},
});
export default authSlice;
export const { login, logout } = authSlice.actions;
