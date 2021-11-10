import React from 'react';
import { Link } from 'react-router-dom';

function Gallery(){
    return(
        <div className="gallery">
            <div className="container page">
                <div className="col-md-12 row">
                    <div className="col-md-8 mt-5">
                        <h1 className="font-miriam medium-heading">Galerija</h1>
                        <hr className="hr-accomm" />
                        <ul className="gallery">
                            <li>
                              <Link to="/projects" className=" text-black text-decoration-none">Projekti</Link>
                            </li>
                            <li>Poslovni Prostor</li>
                            <li>
                              <Link to="/production" className=" text-black text-decoration-none">Proizvodni Pogon</Link>
                            </li>
                            <li>
                              <Link to="/transport" className=" text-black text-decoration-none">Transport</Link>
                            </li>
                            <li>
                              <Link to ="/machine" className=" text-black text-decoration-none">Masine</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Gallery;