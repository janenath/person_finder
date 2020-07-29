import React, { Component } from 'react';

import './App.scss';

import Header from './components/Header';
import Card from './components/Card';

import data from './components/data/data.json';

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



  render() {
    const { query } = this.state;
    const results = data.filter((data) => {
        if(this.state.query === '')
          return ''
        else if (data.name.toLowerCase().includes(this.state.query.toLowerCase())) {
          return data
        } else {
          return ''
        }
    }).map(data => {
      return (
        <Card data={data}/>
      )
    })
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
            {results}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
