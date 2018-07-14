// Import React
import React, { Component } from "react";

// Define Component
class Steps extends Component {

    // Implement Render
    render () {
        return (
            <div>
                <div className="grid steps">                                                                                         
                    <div className="col-s light-blue">
                        <p className="step-title font-s">Step 1</p>                    
                        <span className="step-body font-m">Transaction Info</span>
                    </div>
                    <div className="col-s light-grey">
                        <p className="step-title font-s">Step 2</p>
                        <span className="step-body font-m">Recipient Info</span>
                    </div>
                    <div className="col-s light-grey">
                        <p className="step-title font-s">Step 3</p>
                        <span className="step-body font-m">Make Payment</span>
                    </div>                                                  
                </div>

                <div className="grid">                                   
                    <div className="col-m">
                        <div className="trails">
                            <div className="trail"></div>
                        </div>
                    </div>                                                          
                </div>                             
            </div>            
        );
    }
}

// Export Component
export default Steps;