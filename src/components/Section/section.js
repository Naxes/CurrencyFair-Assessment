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

        // Props for Section Component
        const [sendInteger, sendFractional] = this.props.details.sendPrice.toFixed(2).split(".");
        const [recipientInteger, recipientFractional] = this.props.details.recipientPrice.toFixed(2).split(".");

        return (
            <div className="section">

                {/* Sender Section */}
                <div className="sender-header">
                    <div className="grid">
                        <div className="col-s">
                            <p className="font-m light-blue">YOU SEND</p>
                            <h2>€ {sendInteger}<span className="font-l">.{sendFractional}</span></h2>
                        </div>

                        <div className="col-s">
                            <Geotag currency="EUR" flag={euroTag} />
                        </div>                        
                    </div>
                </div>

                {/* Receiver Section */}
                <div className="receiver-header">
                    <div className="grid">
                        <div className="col-s">
                            <p className="font-m grey">RECEIVER GETS</p>
                            <h2>£ { recipientInteger }<span className="font-l">.{recipientFractional}</span></h2>
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