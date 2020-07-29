import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import './App.scss';

import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
  state = {
    loading: false,
    query: '',
    results: [],
    errorMessage: ''
  }

  handleInputChange = (event) => {
    const query = event.target.value;
    this.setState({query: query, loading: true, errorMessage: ''})
  }

  getSearchResults = (query) => {

  }

  render() {
    const { query } = this.state;
    return (
      <div className="App">
        <Header/>
        <main>
          <div className="instructions">
            <h1>The Person Finder</h1>
            <p className="instructionText">If you just can't find someone and need to know what they look like, you've come to the right place! Just type the name of the person you are looking for below into the search box!</p>
          </div>
          <div className="search">
            <label className="search" htmlFor="search-input">
              <input 
                type="text" 
                placeholder="Type a name..." 
                id="search-input" 
                value={query}
                onChange={this.handleInputChange}
              />
            </label>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
