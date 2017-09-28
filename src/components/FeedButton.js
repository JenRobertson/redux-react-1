import React, { Component } from 'react';

class FeedButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Feed me</button>
    );
  }
}

export default FeedButton;