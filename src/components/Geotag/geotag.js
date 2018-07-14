// Import React
import React, { Component } from 'react';

// Define & Export Component
export default class Geotag extends Component {

    // Implement Render
    render () {
        return (
            <div className="geotag">
                <div className="grid">
                    <div className="col-s geotag-flag">
                        <img src={this.props.flag} alt="European Flag" width="25px"/>
                    </div>
                    <div className="col-s geotag-currency">
                        <h4>{this.props.currency}</h4>
                    </div>
                </div>
            </div>
        );
    }
}