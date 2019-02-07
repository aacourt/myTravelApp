import React, { Component } from "react";
 
class LocationItems extends Component {
    constructor(props) {
        super(props);
     
        this.createLocations = this.createLocations.bind(this);
    }
     
    delete(key) {
        this.props.delete(key);
    }

    open(item){
        this.props.open(item);
    }

    createLocations(item) {
        return <li onClick={() => this.open(item)} key={item.key} className={item.location}>
            <p>{item.type} break in</p>
            <h2>{item.location}</h2>
            </li>
    }
 
    render() {
        var locationEntries = this.props.entries;
        var listItems = locationEntries.map(this.createLocations);
    
        return (
        <ul className="theList">
            {listItems}
        </ul>
        );
    }
    };
 
export default LocationItems;