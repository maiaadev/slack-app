import React from 'react';
import App from './App';
import { DataContextProvider } from './context/UseContext';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>);
