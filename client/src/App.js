import React from "react";
import PlayerCard from "./components/PlayerCard";
import './App.css';
import SearchPlayer from "./components/SearchPlayer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(response => {
        this.setState({...this.state, players: response});
      })
      .catch(err => {console.log("This is the error ", err);});
  }  

  componentDidUpdate() {
    console.log("didUpdate: this.state.players:", this.state.players);
  }

  render() {
    return(
      <section className="App">
        <h1 data-testid="heading">Women's World Cup Players<br/>Ranked By Search Interest</h1>
        <SearchPlayer players={this.state.players}/>
      </section>
    )
  }

};

export default App;