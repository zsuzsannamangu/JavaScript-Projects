import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import { App } from "./components";
import './index.css';

// Get the root DOM node where the app will be mounted
const rootElement = document.getElementById("root");

// Initialize the app with 7 columns and 6 rows
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Use createRoot
  root.render(<App columns={7} rows={6} />); // Call render on the root object
}
