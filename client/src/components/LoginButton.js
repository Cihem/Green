import React, { Component } from 'react';
import './LoginButton.css'

import {
   
    Link
    
  } from "react-router-dom";

export default class LoginButton extends Component {
    render() {
        return (
            <div>
                 
        
           
      
            
                 <div className="login-container">
              
            <Link to="/register"> <button className="signup-button">SIGN UP</button></Link>
            
            <Link to='/login'> <button className="login-button">LOG IN </button></Link>
        </div>
            </div>
        )
    }
}

