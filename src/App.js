import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.components.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchKey: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchKey: e.target.value})
  }

  render() {
    const { monsters, searchKey } = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchKey.toLowerCase())
    ));

    return (
      
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search for monsters" 
        handleChange={this.handleChange}/>
      
        <hr/>

        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
}


export default App;
