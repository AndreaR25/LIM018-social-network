// import { signInWithEmailAndPassword, auth } from '../lib/firebase.js';
import { changeview } from '../view-controller/index-controller.js';
import { signInWithEmailPassword } from '../lib/firebase.js';

export default () => {
  const viewLogin = `
  <section class="login">

  
  <div id="form">
    <h3 id="nameApp">PERUVIAN TASTE</h3>

    <input type="text" id="email" class = "inputData" placeholder="Correo">
    <br><br>
    <input type="password" id="password" class = "inputData" placeholder="Contraseña">

    <br><br>

    <button id="login" value="iniciar" class="btns">Iniciar Sesión</button>
    <img id="google" src="./images/logoGoogle.png" alt="">
    <br><br>
    
    <button value="registrarse" id="register" class="btns"><a href="#/register">Registrarse</a></button>
    
  </div>
  </section>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;
  const google = document.querySelector('#google');

  divElement.querySelector('#login').addEventListener('click', () => {
    // google.style.display = 'none';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    signInWithEmailPassword(email, password)
      .then((objectUser) => {
        console.log(objectUser.user.uid);
        const uidUser = objectUser.user.uid;
        sessionStorage.setItem('USER', JSON.stringify(uidUser));

        window.location.href = '#/home';
        // console.log(x)
        // email.innerHTML =
      })
      .catch((error) => { console.log('hola', error); });
    // .catch(error)=>{console.log(error)}
  });
  return divElement;
};
