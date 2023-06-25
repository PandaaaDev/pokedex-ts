import { combineReducers } from '@reduxjs/toolkit';
import ThemeReducer from '@/store/themeReducer';
const rootReducer = combineReducers({
	theme: ThemeReducer.reducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
