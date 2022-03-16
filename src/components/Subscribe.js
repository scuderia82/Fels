import React from 'react';
import '../styles/Subscribe.css';

function Subscribe(){
    return(
            <div className="container subsc-color">
                <div className="container subscribe">
                    <a  className="a"href="/#">Dobijajte najnovije vesti na vaš e-mail</a>
                    <hr className="hr-subsc"/>
                </div>
                <div className=" container form-group">
                    <input className="form-control-md subsc-input" type="text" name="email" id="email" placeholder="Email..."/>
                    <button onClick = "" className=" btns btn btn-md text-white" type="button">Prihvati</button>
               </div>
            </div>
        
    );
}

export default Subscribe;