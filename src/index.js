import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-1u4q4n6dse8ka3a7.us.auth0.com"
    clientId="DkDENg1UR2V4CUrQnO9uPkDmL084RT9Q"
    redirectUri={window.location.origin}
    // authorizationParams={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
