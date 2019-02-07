import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './index.css';
import AboutLocation from './components/AboutLocation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.openLocation = this.openLocation.bind(this);
 
  }

  openLocation(component, event){

    this.setState(component.state);
    this.setState({showthing : true , location : event.location});

  }

  render() {
    
    return (
      <div className="App" id='App'>
        <LocationList openLocation={this.openLocation}/>
        {this.state.showthing && <AboutLocation header={this.state.location}/>}
      </div>
    );
  }
}

export default App;
