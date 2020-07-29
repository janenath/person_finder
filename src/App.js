import React from 'react';

import './App.scss';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <div className="instructions">
          <h1>The Person Finder</h1>
          <p className="instructionText">If you just can't find someone and need to know what they look like, you've come to the right place! Just type the name of the person you are looking for below into the search box!</p>
        </div>
      </main>
    </div>
  );
}

export default App;
