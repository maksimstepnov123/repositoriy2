import React from 'react'

function Pakages(){

return(
<>
<div id="pakages">
      <h1>Pakages.</h1>
      <hr/>
      <p>Napishy potom</p>
      <div className="pakage">
        <ul>
          <li className="basic">Basic</li>
          <li>Floorplannig</li>
          <li>10 hours support</li>
          <li>Photography</li>
          <li>20% furtiture discount</li>
          <li>Good deals</li>
          <li>
            <p className="Pchena">50 рублей</p>
            <p>В день</p>
          </li>
          <li><a href="#">Sing Up</a></li>
        </ul>
    </div>

    <div className="pakage">
        <ul>
          <li className="pro">Pro</li>
          <li>Floorplannig</li>
          <li>50 hours support</li>
          <li>Photography</li>
          <li>50% furtiture discount</li>
          <li>GREAT deals</li>
          <li>
            <p className="Pchena">50 рублей</p>
            <p>В минуту</p>
          </li>
          <li className="KnopkaPro"><a href="#">Sing Up</a></li>
        </ul>
    </div>
</div>
</>
)

}

export default Pakages
