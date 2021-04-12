import React from 'react';
import NavBar from './NavBar';
import './Learn.css';


export default function Learn() {
    return (
        <div>
            <NavBar />

            <div className="learn fw-bold lead">
           

<h2 className="ml-3"><u>What is carbon intensity?</u></h2>
               <p>
               When we talk about the carbon intensity of electricity, we are referring to<br></br> the number of grams of carbon dioxide (CO2) that it takes to make one<br></br>unit of electricity a kilowatt per hour (kW/hour).</p>

<p>When electricity is generated using coal power stations, the carbon<br></br> intensity value is high as carbon dioxide (CO2) is produced as part of the<br></br> power generation process.</p>

<p>Renewable forms of generation such as hydro or solar produce almost no<br></br> emissions, so their carbon intensity is very low.

The lower the carbon <br></br>intensity,the greener the electricity.
               </p>
        </div>
        </div>
    )
}
