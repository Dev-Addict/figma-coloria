import {createRoot} from 'react-dom/client';

import {App} from './components/app.component';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.createElement('div');

	document.body.appendChild(container);
	const root = createRoot(container);

	root.render(<App />);
});
