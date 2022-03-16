import React from 'react';
import Hala from '../assets/IMG_203.png';
import Hala1 from '../assets/IMG_202.png';
import Hala2 from '../assets/IMG_204.png';
import '../styles/Transport.css';

function Transport(){
    return(
        <div className="products">
            <div className="container page">
                <div className="col-md-12 row">
                    <div className="col-md-8 mt-5">
                        <h1 className="font-miriam medium-heading">Transport</h1>
                        <hr className="hr-trans" />
                    </div>
                    <div className="container hala">
                      <div className="row">
                         <div className="col-md-4">
                            <img className="hala-pic" src={Hala} alt="hala"/> 
                         </div>
                         <div className="col-md-4">
                            <img className="hala-pic" src={Hala1} alt="hala1" />
                         </div>
                         <div className="col-md-4">
                           <img className="hala-pic" src={Hala2} alt="hala2" />
                         </div>
                      </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}
export default Transport;