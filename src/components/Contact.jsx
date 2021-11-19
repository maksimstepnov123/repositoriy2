import React from 'react'




function Contact(){

return(
<>
<div id="contact">
      <h3>Contact.</h3>
      <hr/>
      <p>Choto ya tyt napisal</p>
      <p className="adress">Москва, что то там</p>
      <p className="nomer">Телефон: <a href="tel:+78005553535">+78005553535</a></p>
      <p className="pochta">Email: <a href="mailto:yacheburechek@mail.ru">yacheburechek@mail.ru</a></p>
      <form>
        <p>
          <input type="text" name="Name" placeholder="Имя" />
        </p>
        <p>
          <input type="email" name="Email" placeholder="E-mail" />
        </p>
        <p>
          <input type="text" name="Theme" placeholder="Тема"/>
        </p>
        <p>
          <input type="text" name="Messege" placeholder="Сообщения"/>
        </p>
        <button className="baton">Отправить сообщение</button>
      </form>
</div>
</>
)

}

export default Contact