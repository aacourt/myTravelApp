import React, { Component } from 'react';
import LocationItems from '../LocationItems'
import './styles.css';

class LocationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      showForm: false,
      showthing: false
    };
 
    this.handleChange = this.handleChange.bind(this);
    this.addLocation = this.addLocation.bind(this);
    this.deleteLocation = this.deleteLocation.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showForm(){
    this.setState({showForm:true, location: '', type: ''});
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
    
  }

  addLocation(e) {
    if (this.state.location !== "") {
      var newLocation = {
        location: this.state.location,
        type: this.state.type,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          locations: prevState.locations.concat(newLocation), 
          showForm: false
        };
      });
     
    }
       
    e.preventDefault();
  }

  deleteLocation(key) {
    var filteredLocations = this.state.locations.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      locations: filteredLocations
    });
  }

  

    render() {
      let formVisibility = this.state.showForm ? {} : {display: 'none'};

      return (
        <div className="todoListMain">

          <div className='buttonDiv'>
              <button onClick={this.showForm} type='button'>Add New Location</button>
          </div>

          <div className="header" style={formVisibility}>
            <form onSubmit={this.addLocation}>
              <input ref={(a) => this._inputElement = a} value={this.state.location} name='location' placeholder="enter location" onChange={this.handleChange('location')} >
              </input>
              <input ref={(b) => this._inputElement = b} value={this.state.type} name='type' placeholder="enter type" onChange={this.handleChange('type')} >
              </input>
              <button className='buttons' type="submit">Add to Holiday List</button>
            </form>
          </div>
          <LocationItems entries={this.state.locations} open={this.props.openLocation.bind(null, this)}/>
        </div>
      )
    }
}

export default LocationList;