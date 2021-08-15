// src/CitySearch.js

import React, { Component } from "react";
import { InfoAlert} from "./Alert";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText: " ",
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions: true})
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if(suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: "Location not found"
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: " ",
      })
    }
    
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: '',
    });

    this.props.updateEvents(suggestion, this.props.displayCount);
  }

  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <label htmlFor="selectedLocation">Location: </label>
        <input
          id="selectedLocation"
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder="Enter a city..."
          onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <div className="suggestions-container">
          <ul className="suggestions" style={this.state.showSuggestions ? {}: {display: "none"}}>
            {this.state.suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >{suggestion}</li>
            ))}
            <li 
              key="all"
              onClick={() => this.handleItemClicked("all")}
              >
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;