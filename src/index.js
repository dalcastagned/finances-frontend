import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { client } from "./config/client-graphql";
import { ApolloProvider } from "@apollo/client";
import ContextProvider from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

