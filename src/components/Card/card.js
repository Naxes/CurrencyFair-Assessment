// Import React
import React, { Component } from 'react';

// Import Local Images
import question from '../.././img/question-mark-icon.png';

// Define & Export Component
export default class Card extends Component {
    
    // Implement Render
    render () {        
        
        // Props for Card Component
        const rate = this.props.details.rate;        
        const savings = this.props.details.savings;
        const fee = this.props.details.fee.toFixed(2);
        const deliveryDate = this.props.details.deliveryDate;
        const [sendInteger, sendFractional] = this.props.details.sendPrice.toFixed(2).split(".");
        const [recipientInteger, recipientFractional] = this.props.details.recipientPrice.toFixed(2).split(".");

        return (
            <div className="card font-m">

                {/* Sending Details */}
                <div className="card-header">
                    <div className="card-body">
                        <p className="black">Sending Details</p>
                    </div>
                </div>
                <div className="card-section">
                    <div className="grid card-body">                        
                        <div className="col-s">
                            <p className="grey">You send</p>
                        </div>
                        <div className="col-s">
                            <p className="black align-right">€{sendInteger +"."+  sendFractional}</p>
                        </div>
                    </div>
                </div>

                {/* Receiving Details */}
                <div className="card-header">
                    <div className="grid card-body">
                        <div className="col-s">
                            <p className="black">Receiving Details</p>
                        </div>
                        <div className="col-s">
                            <p className="light-blue align-right">
                                <a href="/">As of right now <img src={question} alt="question mark icon" width="12px"/></a>
                            </p>
                        </div>
                    </div>                                
                </div>
                <div className="card-section">
                    <div className="grid card-body grey">
                        <div className="col-s">
                            <p>Rate</p>
                        </div>
                        <div className="col-s align-right">
                            <p>{rate}</p>
                        </div>
                    </div>
                    <div className="grid card-body grey">
                        <div className="col-s">
                            <p>Fee</p>
                        </div>
                        <div className="col-s align-right">
                            <p>£{fee}</p>
                        </div>
                    </div>
                    <div className="grid card-body grey">
                        <div className="col-s">
                            <p>Delivery date</p>
                        </div>
                        <div className="col-s align-right">
                            <p>{deliveryDate}</p>
                        </div>
                    </div>
                    <div className="grid card-body">
                        <div className="col-s grey">
                            <p>Recipient gets</p>
                        </div>
                        <div className="col-s align-right black">
                            <p>£{recipientInteger + "." + recipientFractional}</p>
                        </div>
                    </div>
                </div>

                {/* Savings */}
                <div className="card-section orange">
                    <p className="card-body align-center">You save £{ savings } compared your bank!</p>
                </div>
            </div>
        );
    }
}