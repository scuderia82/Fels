import React from 'react';
import {BiCheckCircle} from "react-icons/bi"


function Accommodation(){
    return(
        <div>
            <div className="container page">
                <div className="col-md-12 row">
                    <div className="col-md-8 mt-5">
                        <h1 className="font-miriam medium-heading">Usluge</h1>
                        <hr className="hr-accomm" />
                        <p className="acomm">Kao špedicija nudimo rešenja koja donose dodatnu vrednost vašem poslovanju, bilo da se radi o uvozu, izvozu, propratnim dokumentima. Takođe nudimo kompletnu uslugu vezanu za doradne i reeksportne poslove u spoljno trgovinskom poslovanju</p>
                    </div>
                    <div>
                      <div className="box w-50 p-3">
                            <ul className="list-unstyled ">
                            <li>
                              <a className="text-decoration-none text-black"><BiCheckCircle/> <b>Kvalitet:</b> 100 % evropski kvalitet, uključujući statičke proračune</a>
                            </li>
                            <br/>
                            <li>
                              <a className="text-decoration-none text-black"><BiCheckCircle/> <b>Više namena:</b> skladištenje, proizvodnja, logistika, radionice</a>
                            </li>
                            <br/>
                            <li>
                              <a className="text-decoration-none text-black"><BiCheckCircle/> <b>Standardizovanost:</b> u skladu sa evropskim standardima</a>
                            </li>
                            <br/>
                            <li>
                              <a className="text-decoration-none text-black"><BiCheckCircle/> <b>Fleksibilnost</b> prilagođavanje prostoru i vremenskom planu</a>
                            </li>
                            <br/>
                            <li>
                              <a className="text-decoration-none text-black"><BiCheckCircle/> <b>Dostupnost:</b> brza isporuka</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Accommodation;