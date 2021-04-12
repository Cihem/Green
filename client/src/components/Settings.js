import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import './Settings.css';
import { AiOutlineLogout } from 'react-icons/ai';
import { SiGnuprivacyguard } from 'react-icons/si';
import { GrUserSettings } from 'react-icons/gr';
import {Link} from "react-router-dom";




export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    
        
    
        logOut = () => {
            // remove token from local storage and redirect to login page 
            localStorage.removeItem("email");
            localStorage.removeItem("token");
            this.setState({ email: "" });
            this.props.history.push("/login");
          };
          
         
   
       
  

      render() {
    return (
        <div>
            <NavBar />
            <Header />
            <div className="settings fw-bold">
         <Link to="/accountsettings" className="settings-nav" > <GrUserSettings /> Account Settings</Link><br></br>
         <Link to="privacy" className="settings-nav">  <SiGnuprivacyguard/> Terms and Privacy</Link><br></br>

         <div className="settings-nav" onClick={() => this.logOut()}>  <AiOutlineLogout /> Logout </div>
            </div>
        </div>
    )
      }
}
