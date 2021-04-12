import React from 'react';
import {Link} from "react-router-dom";
import {GiDeerTrack, GiGreenhouse} from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import './NavBar.css';



export default function NavBar () {
    
    

    
        
    
        
          

    

 
    return (
        <div className="nav-container">
            <Link to="/track"><GiDeerTrack className="icon" /></Link>
            <Link to="/remove"><GiGreenhouse className="icon" /></Link>
            <Link to="/learn"><FaChalkboardTeacher className="icon"/></Link>
            <Link to="/settings"><FiSettings className="icon"/></Link>
            
         
            </div>
    )
}


