import React from 'react';
import Cri from '../src/CRI.png'
function Projects(){
    return(
        <div className="products">
            <div className="container page">
                <div className="col-md-12 row">
                    <div className="col-md-8 mt-5">
                        <h1 className="font-miriam medium-heading">Projekti</h1>
                        <hr className="hr-accomm" />
                    </div>
                    <div className="cri-pic">
                      <img  src={Cri} alt="cri" />
                    </div>
                </div>
            </div> 
        </div>
    );
}
export default Projects;