// src/NumberOfEvents.js
import React, {Component} from "react";

class NumberOfEvents extends Component {
  state = {
    displayCount: 32
  }

  handleInputChange = (event) => {
    let value = event.target.value
    this.setState({
      displayCount: value
    })
  }

  render() {
    return(
      <div>
        <input 
          className="number"
          value={this.state.displayCount}
          onChange={this.handleInputChange}
         />
      </div>
    )
  }
}

export default NumberOfEvents;