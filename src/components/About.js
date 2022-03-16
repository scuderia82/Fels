import React from 'react';
import '../styles/About.css';
import okrugle from '../assets/okrugle-cevi.png';

function About(){
    return(
       <div className="about container">
           <h1 className="font-miriam medium-heading">Reference</h1>
            <hr className="hr-about" />
            <ul className="gallery">
              <li>A.D. Imlek Beograd,</li>
              <li>Maksima doo Lučani ,</li>
              <li>Metalac Gornji Milanovac,</li>
              <li>Lavazza d.o.o. Novi Sad,</li>
              <li>Swiss Lions doo Trebinje,</li>
              <li>Metalac Gornji Milanovac,</li>
              <li>Metro doo Beograd,</li>
              <li>Keramika Jovanović Zrenjanin,</li>
              <li>Imlek mlekara  Novi Sad ,</li>
              <li>Tekstil doo Užice.</li>
              <br/>
              <div className="okrugle"style={{ backgroundImage: `url(${okrugle})` }}></div>
            </ul> 
            
        </div>

    );
}
export default About;
