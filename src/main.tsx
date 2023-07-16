import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import { Provider } from 'react-redux';
import store from '@/store/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/Pages/Home.tsx';
import Pokedex from '@/Pages/Pokedex';
import Page from '@/Templates/Page';
// import LoadingPage from './Pages/LoadingPage';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Page />,
		// loader: <LoadingPage />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: 'pokedex', element: <Pokedex /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
