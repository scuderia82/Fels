import React from 'react';

function Subscribe(){
    return(
            <div className="container-flex subsc-color">
                <div className="container subscribe">
                    <a>Dobijajte najnovije vesti na vaš e-mail</a>
                    <hr className="hr-subsc"/>
                </div>
                <div className=" container form-group subsc">
                    <input className="form-control-md subsc-input" type="text" name="email" id="email" placeholder="Email..."/>
                    <button onClick = "" className=" btn btn-md" type="button">Prihvati</button>
               </div>
            </div>
        
    );
}

export default Subscribe;