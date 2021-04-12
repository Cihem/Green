
import React, { useState, useEffect } from "react";
import './Track.css'
import NavBar from "./NavBar";


export default function Track() {
  const [carbon, setCarbon] = useState([]);

  useEffect(() => {
    const headers = {
      Accept: "application/json"
    };

    fetch("https://api.carbonintensity.org.uk/intensity", {
      method: "GET",

      headers: headers
    })
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        console.log(body.data);
        setCarbon(body.data);
      });
  }, []);

  return (
    <div>

       <NavBar />

      
      
      {carbon.length > 0 && (
        <div >
          {carbon.map((c, i) => (
            <p key={i}>
             <span className="header-container text-center">
             <h2>Carbon Intensity Forecast</h2>
              <p className="fw-bold">from: {c.from} </p>
              <p className="fw-bold">to: {c.to}</p>
              </span>
           
              <div className="track-container" >
              <p className="numberCircle lead fw-bold"><span className="track-title">Forecast </span><br></br>{c.intensity.forecast} gCO2/kWh</p>
              <p className="numberCircle lead fw-bold"><span className="track-title fw-bold">Actual</span><br></br>{c.intensity.actual} gCO2/kWh</p>
              <p className="numberCircle lead fw-bold"><span className="track-title fw-bold">Index</span> {c.intensity.index}</p>
              </div>
            </p>
          ))}


        </div>
      )}
    </div>
  );
}
