import React, { Component } from 'react';
import {CardList} from './components/card-list/CardList'
import './App.css'
import { searchBox } from './components/search-box/searchBox';


export default class App extends Component {
constructor(){
  super();
  this.state = {
    monsters: [],
    searchField : ''
  };
}

  componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters : users}));
  }

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
           < searchBox 
           placeholder='search monsters'
           handleChange= {e => this.setState({ searchField : e.target.value})}
           />
          < CardList monsters={filteredMonsters} />       
      </div>
    );
  } 
}