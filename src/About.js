import React from 'react';
import {BiCheckCircle} from "react-icons/bi"

function About(){
    return(
        <div className="about">
            <div className="container">
                <div className="col-md row">
                    <div className="col-md-8 mt-5 pb-5">
                        <h1 className="font-miriam medium-heading">Reference</h1>
                        <hr className="hr-about" />
                        <p>Preduzeće <b>“Fels d.o.o.”</b> posluje od 2021 godine sa sedištem u Temerinu, u sopstvenoj zgradi na adresi ulica Novosadska 107, 24000 Temerin. Zapošljava oko dvadeset radnika, stručno osposobljenih da udovolje i najsloženijim zahtevima i obavezama.</p>
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
export default About;
