import { createBrowserRouter, RouterProvider } from 'react-router';

import { createRoot } from 'react-dom/client';
import 'normalize.css';

import App from './app/index.tsx';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');
const router = createBrowserRouter([
	{
		path: '/*',
		Component: App,
	},
]);

createRoot(root).render(<RouterProvider router={router} />);
