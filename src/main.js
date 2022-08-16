// Este es el punto de entrada de tu aplicacion

// import { home } from './components/home.js';
// import { login } from './components/login.js';
// import { register } from './components/register.js';
// // import { myFunction } from './lib/index.js';

// const rootDiv = document.getElementById("root")

// // myFunction();
// const routes ={
//   '/':home,
//   'register/':register,
//   'register/':login,
// }

// const component = routes[window.location.pathname]
// rootDiv.appendChild(component())
import { changeview } from './view-controller/index-controller.js'

const init = () => {
  changeview(window.location.hash)
  window.addEventListener('hashchange' , () => changeview(window.location.hash))
}

window.addEventListener('load', init);
