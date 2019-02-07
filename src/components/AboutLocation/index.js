import React, { Component } from "react";
import './styles.css';
class AboutLocation extends Component {

    render() {
    
        return (
            <div className='mainSection'>
                <h1>{this.props.header}</h1>
            </div>
        );
    }
};
 
export default AboutLocation;