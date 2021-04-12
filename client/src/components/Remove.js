import React from 'react';
import NavBar from './NavBar';
import './Remove.css';

export default function Remove() {
    return (
        <div>
         <NavBar />
         <div className="remove fw-bolder">
          
            <h1 className="text-white">Plant Trees</h1>
            <p className="text-white ">Reforestation projects fight climate change, <br></br>
            create jobs, and protect wildlife.</p>

            <div>
                <h2>Capture carbon with natural solutions</h2>
                <p>Trees take the CO2 out of the atmosphere and<br></br> 
                turn it into branches, bark and leaves - <br></br>
                capturing excess carbon sustainably. This<br></br> 
                powerful natural climate solution protects<br></br> 
                biodiversity, provide sustainable jobs, and <br></br>
                has nearly limitless potential to scale.</p>
            </div>
            </div>
        </div>
    )
}
