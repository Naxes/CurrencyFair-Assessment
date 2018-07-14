// Import React
import React, { Component } from 'react';

// Import Components
import Button from './components/Button/button';
import Card from './components/Card/card';
import Navbar from './components/Navbar/navbar';
import Section from './components/Section/section';
import Splitter from './components/Splitter/splitter';
import Steps from './components/Steps/steps';

// Import Stylesheets
import './fonts/font.css';
import './App.css';
import './components/Button/button.css';
import './components/Card/card.css';
import './components/Navbar/navbar.css';
import './components/Section/section.css';
import './components/Splitter/splitter.css';
import './components/Steps/steps.css';

// Define & Export Component
export default class App extends Component {

  // Implement Render
  render () {
    return (      
      <div className="container">
        <Navbar />
        <div className="grid">        
          <div className="left-section">

            {/* Transaction Steps */}
            <div className="spacer-m"></div>            
            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                <Steps />
              </div>
            </div>

            {/* Transaction Overview */}
            <div className="spacer-s"></div>
            <div className="grid">
              <div className="col-xs"></div>
                <div className="col-m">
                  <h4>Let’s set up your transaction!</h4>
                  <p className="font-s grey">Specify the amount to be sent or received.</p>
                </div>
            </div>
            
            <div className="spacer-s"></div>
            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                <Section />
              </div>
            </div>

            {/* Next Button */}
            <div className="spacer-m"></div>
            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                <Button name="Next" />
              </div>
            </div>

            {/* Footer */}
            <div className="spacer-l"></div>
            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                <Splitter />
              </div>
            </div>

            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                <div className="grid footer">
                  <div className="col-s">
                    <p className="font-s grey">© 2016 CurrencyFair</p>
                  </div>
                  <div className="col-s">
                    <div className="grid footer align-right">
                      <div className="col-m">
                        <p className="font-s">
                          <a href="/">Help & Support</a>
                        </p>
                      </div>
                      <div className="col-s">
                        <p className="font-s">
                          <a href="/">Legal Stuff</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>                                
          </div>
          <div className="right-section">
            <div className="spacer-m"></div>
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
