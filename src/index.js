import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createRoot} from 'react-dom/client'
import {

  ApolloClient,

  InMemoryCache,

  ApolloProvider,

  useQuery,

  gql

} from "@apollo/client";
const client = new ApolloClient({

  uri: 'http://localhost:1337/graphql',

  cache: new InMemoryCache()

});
const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <App />
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
