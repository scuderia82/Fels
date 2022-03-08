import React from 'react';
import '../styles/Accommodation.css';

function Accommodation(){
    return(
            <div className="container page">
                <div className="col-md-12 row">
                    <div className="col-md-12 mt-5">
                        <h1 className="font-miriam medium-heading">Usluge</h1>
                        <hr className="hr-accomm" />
                        <p className="acomm">Osnovna delatnost našeg preduzeća jeste proizvodnja metalnih konstrukcija. Naš proizvodni pogon nalazi se u Temerinu.
                        <br/>
                        <strong>Zašto čelična konstrukcija?</strong>
                        <br/>Čelik je moderan i pouzdan materijal pogodan za gradnju. Daje veliku slobodu arhitektama i projektantima kako bi se što više približili Vašim potrebama i željama. Odlikuje ga elegancija, jednostavnost i izdržljivost. Pogodan je za sve vrste nadogradnji i kombinacija materijala.</p>
                        <p><b>Glavne prednosti kada je u pitanju proizvodnja metalnih konstrukcija:</b></p> 
                        <ul className="acomm-p">
                          <li>moguća potpuna fabrička izrada konstrukcije te samim time montaža gotovih delova;</li>
                          <li>brza ekološka izgradnja objekta s minimalnim narušavanjem životne sredine;</li>
                          <li>laka adaptacija na postojeće stanje (prilagođavanje novoj funkciji);</li>
                          <li>lako održavanje i dugi vek trajanja;</li>
                          <li>mogućnost demontaže i premeštanja;</li>
                          <li>laka mogućnost naknadne nadogradnje;</li>
                          <li>mogućnost kombinovanja različitih materijala;</li>
                          <li>materijal pogodan za recikliranje koji ne opterećuje okolinu.</li>
                        </ul>
                    </div>
                  </div> 
             </div>
         ); 
}

export default Accommodation;