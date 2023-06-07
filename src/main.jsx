import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Pwn from './Pwn.jsx';
import Web from './Web.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/pwn" element={<Pwn />} />
				<Route path="/web" element={<Web />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
