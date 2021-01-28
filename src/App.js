import React from "react";
import './App.css';
import './components/Box';
import Box from "./components/Box";
import './styles/global.css'


export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      water: 0,
      heart: 120,
      tempertature: -10,
      steps: 3000,



    }
  }

  tempMin = -20;
  tempMax = 40;
  heartMin = 80;
  heartMax = 180;
  stepsMin = 0;
  stepsMax = 50000;
  onHeartChange = (event) => {
    this.setState({ heart: event.target.value });

  }
  onTempsChange = (event) => {
    this.setState({ tempertature: event.target.value });
  }
  onStepChange = (event) => {
    this.setState({ steps: event.target.value });
  }
  calculateWater = () => {
    let water = 1.5 {
      if (condition) {
        
      }
    }
  }
  render() {



    return (

      <div className='container-fluid'>
        <div className='row'>


          <Box toto="water" icon={"local_drink"} color={"#3A85FF"} value={1.5} unit="L" />
          <Box toto="walk" icon={"directions_walk"} color={"black"} value={this.state.steps} min={this.stepsMin} max={this.stepsMax} onChange={this.onStepChange} unit="steps" />
          <Box toto="heart" icon={"favorite"} color={"red"} min={this.heartMin} max={this.heartMax} value={this.state.heart} onChange={this.onHeartChange} unit="bpm" />
          <Box toto="temp" icon={"wb_sunny"} color={"yellow"} min={this.tempMin} max={this.tempMax} value={this.state.tempertature} onChange={this.onTempsChange} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;