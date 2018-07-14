// Import React
import React, { Component } from 'react';

// Import Local Images
import question from '../.././img/question-mark-icon.png';

// Define & Export Component
export default class Card extends Component {

    // Implement Render
    render () {
        return (
            <div className="card font-m">
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
                            <p className="black align-right">€2000.00</p>
                        </div>
                    </div>
                </div>
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
                            <p>0.86022</p>
                        </div>
                    </div>
                    <div className="grid card-body grey">
                        <div className="col-s">
                            <p>Fee</p>
                        </div>
                        <div className="col-s align-right">
                            <p>£2.50</p>
                        </div>
                    </div>
                    <div className="grid card-body grey">
                        <div className="col-s">
                            <p>Delivery date</p>
                        </div>
                        <div className="col-s align-right">
                            <p>25th November</p>
                        </div>
                    </div>
                    <div className="grid card-body">
                        <div className="col-s grey">
                            <p>Recipient gets</p>
                        </div>
                        <div className="col-s align-right black">
                            <p>£1717.94</p>
                        </div>
                    </div>
                </div>
                <div className="card-section orange">
                    <p className="card-body align-center">You save £66.19 compared your bank!</p>
                </div>
            </div>
        );
    }
}