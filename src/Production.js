import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Hala from '../src/IMG_203.png';
import Hala1 from '../src/IMG_202.png';
import Hala2 from '../src/IMG_204.png';


function Production(){
    return(
        <div>
            <div className="container page">
                <div className="col-md-12 row">
                    <div className="col-md-8 mt-5">
                        <h1 className="font-miriam medium-heading">Proizvodni Pogon</h1>
                        <hr className="hr-production" />
                    </div>
                    <div className="hala">
                      <img className="hala-pic" src={Hala} alt="hala"/>
                    </div>
                    <div className="hala1">
                      <img  className="hala-pic" src={Hala1} alt="hala1" />
                    </div>
                    <div className="hala1">
                      <img  className="hala-pic" src={Hala2} alt="hala2" />
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Production;