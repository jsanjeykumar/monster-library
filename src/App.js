import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
    //when using props pass the props in constructor
    this.props = props 
  }
  //this also works -> state as class variable
  /* state = {
    monsters:[]
  } */

  handleClick = () => {
    //setstate()=>asynchronus
    this.setState(
      //prevState= state before this, props before this
      (prevState, prevProps) => {},
      () => console.log("this.state")
    );
    
  };
  //when this component mount(puts it on the page)
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }
  onChangeSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value });
  };
  render() {
    //de-Structuring => object & it properties
    const { monsters, searchField } = this.state;

    let filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      //sender - state
      //receiver - props
      <div className="App">
        <h1>Monster Library</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.onChangeSearch}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}
export default App;
