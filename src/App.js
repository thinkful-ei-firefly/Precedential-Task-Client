import React from 'react';
import './index.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <main className='App'>
       <Header></Header>
       <Home></Home>
    </main>
  );
}

export default App;