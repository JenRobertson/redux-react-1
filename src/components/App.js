import React, { Component } from 'react';
import '../style/App.css';
import PetsContainer from '../containers/PetsContainer';
import AddPetContainer from '../containers/AddPetContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jenny's cool app</h1>
        <p>Feed your pets</p>
        <AddPetContainer />
        <PetsContainer />
       
      </div>
    );
  }
}

export default App;
