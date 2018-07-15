// Import React
import React, { Component } from 'react';

// Import Stylesheets
import '../../App.css';

// Define & Export Component
export default class Modal extends Component {    
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    // Implement Render
    render() {
        const classes = this.props.show ? 'fadeIn':'fadeOut';
        
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="overlay">
                <div className={`modal ${ classes }`}>                    
                    <button className="button-s default" onClick={(e) => { this.onClose(e) }}>Back</button>            
                </div>
            </div>            
        );
    }
}