import React from 'react';

class Rough extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with three input values set to 0 or empty strings, and sum
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      sum: 0,
    };
  }

  // Update the corresponding state on each input change
  handleChange = (event) => {
    const { name, value } = event.target;

    // Update the state for the corresponding input
    this.setState({ [name]: value });
  };

  // Calculate the sum of the three values and update the state
  calculateSum = () => {
    const { value1, value2, value3 } = this.state;
    const sum = [value1, value2, value3].reduce((acc, cur) => acc + (Number(cur) || 0), 0);

    // Update the sum in the state
    this.setState({ sum });
  };

  render() {
    return (
      <div>
        <h2>Sum Calculator</h2>
        <input
          type="number"
          name="value1"
          value={this.state.value1}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="value2"
          value={this.state.value2}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="value3"
          value={this.state.value3}
          onChange={this.handleChange}
        />
        {/* Update button triggers calculateSum */}
        <button onClick={this.calculateSum}>Update</button>
        <p>Sum: {this.state.sum}</p>
      </div>
    );
  }
}

export default Rough;
