import React, { lazy } from 'react';
const App = lazy(() => import('./App'));

import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('app');
const root = createRoot(domNode);

root.render(<App />);
