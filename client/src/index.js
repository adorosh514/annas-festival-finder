import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(domain, clientId);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-yqldejtks5d1e8ql.us.auth0.com"
    clientId="cq7wsp9oqCbjQWblKQGYKllHxCOiYrFC"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);
