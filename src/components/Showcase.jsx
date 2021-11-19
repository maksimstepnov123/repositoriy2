import React from 'react'
import bedroom from './img/bedroom.jpg'
import diningroom from './img/diningroom.jpg'
import atrium from './img/atrium.jpg'
import kitchenconcrete from './img/kitchenconcrete.jpg'
import livingroom from './img/livingroom.jpg'
import livingroom2 from './img/livingroom2.jpg'

function Showcase(){

return(
<>
<div id="showcase">
    <h2>Interior Design</h2>
      <h3>Showcase</h3>
      <hr/>
      <img src={bedroom}/> 
      <img src={diningroom}/>
      <img src={atrium}/>
      <img src={kitchenconcrete}/>
      <img src={livingroom}/>
      <img src={livingroom2}/>
</div>
</>
)

}

export default Showcase
