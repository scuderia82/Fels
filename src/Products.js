import React from 'react';
import {BiCheckCircle} from "react-icons/bi"

function Products(){
    return(
        <div>
            <div className="container page">
                <div className="col-md-12 row">
                    <div className="col-md-8 mt-5">
                        <h1 className="font-miriam medium-heading">Proizvodi</h1>
                        <hr className="hr-products" />
                        <p className="products"><b>“Fels d.o.o.”</b> poseduje javno carinsko skladište za carinsku i necarinsku robu, kao i dozvolu za skladištenje roba stranih pravnih lica kao i roba u tranzitu. U javnom carinskom skladištu se obavljaju sve manipulacije robom (uzorkovanje, sortiranje, klasifikacija…)</p>
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

 export default Products;