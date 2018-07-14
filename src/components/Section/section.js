// Import React
import React, { Component } from 'react';

// Import Components
import Geotag from '../.././components/Geotag/geotag';

// Import Stylesheets
import '../.././components/Geotag/geotag.css';

// Import Local Images
import euroTag from '../.././img/euro-flag.png';
import ukTag from '../.././img/uk-flag.png';

// Define & Export Component
export default class Section extends Component {

    // Implement Render
    render () {
        return (
            <div className="section">
                <div className="sender-header">
                    <div className="grid">
                        <div className="col-s">
                            <p className="font-m light-blue">YOU SEND</p>
                            <h2>€ 2,000<span className="font-l">.00</span></h2>
                        </div>

                        <div className="col-s">
                            <Geotag currency="EUR" flag={euroTag} />
                        </div>                        
                    </div>
                </div>

                <div className="receiver-header">
                    <div className="grid">
                        <div className="col-s">
                            <p className="font-m grey">RECEIVER GETS</p>
                            <h2>£ 1,717<span className="font-l">.94</span></h2>
                        </div>

                        <div className="col-s">
                            <Geotag currency="GBP" flag={ukTag} />
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}