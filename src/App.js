import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import GlobalStyle from './global-styles';
import LandingPage from './containers/LandingPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Route path="/" component={LandingPage} />
    </>
  );
}
export default App;
