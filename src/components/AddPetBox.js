import React, { Component } from 'react';

class AddPetBox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="AddPetBox">
        <h1>Add a new pet</h1>
        Name: <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={()=>{
          this.props.onSubmit(this.state.value), 
          this.setState({value: ''})
        }}>Submit</button>
      </div>
    );
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  
}


export default AddPetBox;

