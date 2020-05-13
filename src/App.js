import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {

  // constructor() runs  before any other code is ran
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount(){
    // fetch api call, convert to json, pull users from json call, set users to monsters array 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // Set a function as an => function in order to bind this key word to function
  handleChange = (e) =>{
    this.setState({
      searchField: e.target.value
    })
  }

  render(){
    // extract monsters and searchField from the state object 
    // when search is active, onChange the setState to re-render the state to set the dom to match
      // const monsters = this.state.monsters
      // const searchField = this.state.searchField
    const { monsters, searchField } = this.state
    const filterdMonsters = monsters.filter((monster) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    // this.handleChange, this key word refrences the e value passed in handleChange(e)
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monsters' handleChange={ this.handleChange } />
        <CardList monsters={ filterdMonsters } />
      </div>
    )
  }
}

export default App;
