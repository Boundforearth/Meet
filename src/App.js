import React, { Component }from 'react';
import './App.css';
import EventList from "./EventList";
import CitySearch from "./CitySearch"
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken  } from './api';
import "./nprogress.css";
import WelcomeScreen from './WelcomeScreen';
import { OfflineAlert } from "./Alert";

class App extends Component {
  state = {
    events: [],
    locations: [],
    displayCount: 32,
    currentCity: "all",
    showWelcomeScreen: undefined,
    infoText:""
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({
      showWelcomeScreen: !(code || isTokenValid)
    });
    if((code || isTokenValid) && this.mounted) {
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
    if(!navigator.onLine) {
      this.setState({
        infoText: "You are currently browsing offline.  To get up to date events, please go online"
      })
    }
    else{
      this.setState({
        infoText: ""
      })
    }
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
          infoText: "",
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
    if (this.state.showWelcomeScreen === undefined) {
      return <div className="App" />
    }
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
        <OfflineAlert text={this.state.infoText} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => {getAccessToken() }} />
      </div>
    );
  }
}

export default App;
