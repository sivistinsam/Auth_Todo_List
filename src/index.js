// Import React and ReactDOM for rendering the application
import React from "react";
import ReactDOM from "react-dom/client";

// Import CSS styles from the index.css file
import "./index.css";

// Import the main App component from the "App.js" file
import App from "./App";

// Import the Auth0Provider component from the "@auth0/auth0-react" library
import { Auth0Provider } from "@auth0/auth0-react";

// Create a ReactDOM root for rendering the app into the "root" element in the HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in the Auth0Provider
root.render(
  <Auth0Provider
    domain="dev-1u4q4n6dse8ka3a7.us.auth0.com" // Auth0 domain
    clientId="2fsgF3vPFYHRBpuNleTq5v2spAvWznEF" // Auth0 client ID
    redirectUri={window.location.origin} // Redirection URI
  >
    <App />
  </Auth0Provider>
);
