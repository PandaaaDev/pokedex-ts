import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import { Provider } from 'react-redux';
import store from '@/store/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/Pages/Home.tsx';
import Pokedex from '@/Pages/Pokedex';
import Login from '@/Pages/Login';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home></Home>,
	},
	{ path: 'login', element: <Login /> },
	{ path: 'pokedex', element: <Pokedex /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
