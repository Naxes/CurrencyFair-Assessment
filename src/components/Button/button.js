// Import React
import React, { Component } from 'react';

// Define & Export Component
export default class Button extends Component {

    // Implement Render
    render () {
        return (
            <button className="button"><span className="font-m">{this.props.name}</span></button>
        );
    }
}