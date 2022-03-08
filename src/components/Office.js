import React from 'react';
import Hala3 from '../assets/IMG_207.png';
import Hala4 from '../assets/IMG_206.png';
import '../styles/Office.css';

function Office(){
    return(
        <div>
            <div className="container page">
                <div className="col-md-12 row">
                    <div className="col-md-8 mt-5">
                        <h1 className="font-miriam medium-heading">Poslovni Prostor</h1>
                        <hr className="hr-production" />
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-4">
                          <img className="hala-pic" src={Hala3} alt="hala3" />
                        </div>
                        <div className="col-md-4">
                          <img  className="hala-pic" src={Hala4} alt="hala4" />
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Office;