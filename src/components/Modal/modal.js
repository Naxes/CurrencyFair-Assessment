// Import React
import React, { Component } from 'react';

// Import Stylesheets
import '../../App.css';

// Import Local Images
import padlock from '../.././img/padlock.png';
import refresh from '../.././img/refresh.png';
import phone from '../.././img/phone.png';

// Define & Export Component
export default class Modal extends Component {
    
    // Close Modal 
    onClose = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose && this.props.onClose(e);
        }
    }

    // Implement Render
    render() {
        const classes = this.props.show ? 'fadeIn':'fadeOut';
        
        if (!this.props.show) {
            return null;
        }

        return (
            <div className={`overlay ${ classes}`} onClick={(e) => { this.onClose(e) }}>
                <div className="modal">
                    <div className="modal-header">
                        <h4 className="dark-grey"><img src={padlock} alt="padlock icon" width="16"/> Identity verification required</h4>
                        <p className="font-s grey">For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device.</p>
                    </div>                                       
                    <div className="modal-body">
                        <div className="grid">
                            <div className="col-m">
                                <p className="font-m black">Enter the code sent via SMS to</p>
                            </div>
                        </div>

                        <div className="grid">
                            <form className="verification">
                                <div className="grid">
                                    <div className="col-m">
                                        <input type="text" maxLength="1"/>
                                    </div>
                                    <div className="col-m">
                                        <input type="text" maxLength="1"/>
                                    </div>
                                    <div className="col-m">
                                        <input type="text" maxLength="1"/>
                                    </div>
                                    <div className="col-m">
                                        <input type="text" maxLength="1"/>
                                    </div>
                                    <div className="col-m">
                                        <input type="text" maxLength="1"/>
                                    </div>
                                    <div className="col-m">
                                        <input type="text" maxLength="1"/>
                                    </div>
                                </div>

                                <div className="grid font-s">
                                    <div className="col-m">
                                        <p className="grey"><a href="/"><img src={refresh} alt="refresh icon" width="16" /></a> Receive a new code</p>
                                    </div>
                                    <div className="col-m">
                                        <p className="grey"><a href="/"><img src={phone} alt="phone icon" width="16" /></a> Receive code via call instead</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>                    
                    {/* <button className="button-s default" onClick={(e) => { this.onClose(e) }}>Back</button> */}                    
                </div>
            </div>            
        );
    }
}