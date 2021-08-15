import React, { Component }from 'react';
import './App.css';
import EventList from "./EventList";
import CitySearch from "./CitySearch"
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    displayCount: 32,
    currentCity: "all",
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted){
        let filteredEvents = events.slice(0, this.state.displayCount);
        this.setState({
          events: filteredEvents,
          locations: extractLocations(events),
        });
      }
    });
  }

  updateEvents = (location, displayCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted) {
        const locationEvents = (location === "all") ?
          events :
          events.filter((event) => event.location === location);
        let filteredEvents = locationEvents.slice(0, displayCount)
        this.setState({
          events: filteredEvents,
          currentCity: location,
        });
      }
    });
  }

  getDisplayCount = (value) => {
    const location = this.state.currentCity;
    this.setState({
      displayCount: value
    })
    this.updateEvents(location, value);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <h2 className="app-name">Meet App</h2>
        <div className="input-boxes">
          <CitySearch 
            locations={this.state.locations}  
            updateEvents={this.updateEvents} 
            displayCount={this.state.displayCount}
          />
          <NumberOfEvents getDisplayCount={this.getDisplayCount}/>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
