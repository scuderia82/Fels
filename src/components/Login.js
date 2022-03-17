import React from 'react';
import '../styles/Actual.css';

function Login(){
    
    fetch('Data.json')
    .then(res => res.json())
    .then(data => console.log(data.username))
    
    return(
        <div>
            <div>
                <div className="container page">
                    <div className="col-md-12 row">
                        <div className="col-md-8 mt-5">
                            <h1 className="font-miriam medium-heading">Redirection</h1>
                            <hr className="hr-act" />
                            <p className="acomm"></p>
                            <h1>You are loggedin!</h1>
                        </div>
                    </div>
                </div> 
           </div>
        </div>

    )
}

    
export default Login;