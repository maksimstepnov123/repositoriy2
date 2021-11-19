import React from 'react'
import team1 from './img/team1.jpg'
import team2 from './img/team2.jpg'
import team3 from './img/team3.jpg'

function Dessiners(){

return(
<>
<div id="dessiners">
     <h3>Dessiners</h3>
     <hr/>
     <p>The best team in the world.</p>
     <p>Teachers, apparently, reasoned the same way as Hermione. They literally overwhelmed the students with homework, and therefore the Easter holidays, compared to the Christmas holidays, were completely unhappy. Yes, and how can you relax when next to you Hermione aloud repeats twelve ways to use the blood of a dragon or works out the technique of movements of a magic wand. Yawning and moaning with displeasure, Harry and Ron spent most of their free time in the library, trying to simultaneously repeat what they had learned and learn new things.</p>
     <div className="members">
       <img src={team1}/>
       <div className="otstyp">
         <h3>Jane Doe</h3>
         <p>Kakoito text ya pishy on ne tak vajen. A eto chelovek v shlape. Holla ya ne govory po Ispanski.</p>
       </div>
     </div>

     <div className="members">
       <img src={team2}/>
       <div className="otstyp">
         <h3>John Doe</h3>
         <p>…Zlatopust Lokone bukval'no vporkhnul v auditoriyu, yego zhizneradostnoye poyavleniye prikovalo.</p>
      </div>
    </div>
    <div className="members">
      <img src={team3}/>
      <div className="otstyp">
        <h3>Stiven Popins</h3>
        <p>Nakonets vse zanyali svoi mesta, i k professorskomu stolu potyanulis' prepodavateli, shestviye zamy.</p>
      </div>
    </div>
</div>
</>
)

}

export default Dessiners
