import React, { Component } from 'react';
import FeedButton from './FeedButton';

class Pet extends Component {
  render() {
    return (
      <div className="Pet">
        <h1>{this.props.name}</h1>
        <p>Hunger: {this.props.hunger}</p>
        <FeedButton onClick={this.props.onClick}/>
      </div>
    );
  }
}


export default Pet;

