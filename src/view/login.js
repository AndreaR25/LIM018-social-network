export default() => {
  const viewLogin = `
  <h2>Bienvenida iniciar sesion</h2>
  <section class="login">
  <h2>bienvenidos a login</h2>

  <img id="logoPeruvian" src="./images/depositphotos_59216213-stock-illustration-peruvian-food-illustration.jpg" alt="">
  <div id="form">
    <input type="text" id="email" placeholder="Correo">
    <br><br>
    <input type="password" id="password" placeholder="Contraseña">

    <br><br>

    <button type="" id="login" value="Registrarse">Iniciar Sesión</button>
    <img id="google" src="./images/logoGoogle.png" alt="">
    <br><br>
    <button type="" value="Registrarse"><a href="#/register">Registrarse</a></button>
  </div>
  </section>
  `

  const divElement = document.createElement('div')
  divElement.innerHTML = viewLogin;

  return divElement
}