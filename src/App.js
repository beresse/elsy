import React from "react";
import './App.css';
import './components/Box';
import Box from "./components/Box";
import './styles/global.css'


export class App extends React.Component {

  tempMin = -20;
  tempMax = 40;
  heartMin = 80;
  heartMax = 180;
  stepsMin = 0;
  stepsMax = 50000;

  render() {

    return (

      <div className='container-fluid'>
        <div className='row'>
          <Box />
          <p>Heart : {this.heartMin}</p>
          <p>Temperature : {this.tempMin}</p>
          <p> Steps : {this.stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;