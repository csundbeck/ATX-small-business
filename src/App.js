import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
