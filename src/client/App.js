import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './containers/Layout';
import { StoreProvider } from './store';

import './App.scss';

const App = () => {
  return (
    <StoreProvider>
      <Layout />
    </StoreProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
