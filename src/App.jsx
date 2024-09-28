import { useEffect } from "react";
import "./App.css";
import { imagenes } from "./images/images";

function App() {
  useEffect(() => {
    document.getElementById("Presentacion").addEventListener("click", function () {
      document.getElementById("Gmail").checked = false;
      document.getElementById("pantalla1").classList.add('pantallaActiva');
      document.getElementById("pantalla2").classList.remove('pantallaActiva');
    });
    document.getElementById("Projectos").addEventListener("click", function () {
      document.getElementById("Gmail").checked = false;
      document.getElementById("pantalla1").classList.remove('pantallaActiva');
      document.getElementById("pantalla2").classList.add('pantallaActiva');
    });
    document.getElementById("Gmail").addEventListener("click", function () {
      document.getElementById("pantalla1").classList.remove('pantallaActiva');
      document.getElementById("pantalla2").classList.remove('pantallaActiva');
    });
    
  })

  return (
    <>
      <header>
        <h1>Kevin Rodrigo Wawryniuk</h1>
        <h2>Desarrollador de Software</h2>
        <nav>
          <label id="pantalla1" htmlFor="Presentacion">Presentacion</label>
          <label id="pantalla2" htmlFor="Projectos">Projectos</label>
        </nav>
      </header>

      <main>
        <input id="Presentacion" type="radio" name="Secciones" checked />
        <input id="Projectos" type="radio" name="Secciones" />
        <input id="Gmail" type="checkbox" />

        <section id="Presentation">
          <img id="fotoPerfil" src={imagenes[4]} alt="" />
          <article>
            <h2> Hola, Soy Kevin </h2>
            <p> Mucho gusto.
              Soy desarrollador de videojuegos con experiencia en Unity y también tengo conocimientos en desarrollo web, especialmente en el backend, aunque he trabajado un poco en frontend. Me apasiona enfrentar nuevos desafíos, ya que siempre estoy buscando maneras de aprender y crecer en mi carrera profesional.</p>
            <h2>Tecnologias </h2>
            <p>Aqui le dejo alguna de las tecnologias que e utilizado en mi carrera</p>
            <div id="tecnologias">
              <a href="https://www.aseprite.org/"><img id="aseprite" src={imagenes[9]} alt="" /></a>
              <a href="https://git-scm.com/"><img id="git" src={imagenes[10]} alt="" /></a>
              <a href="https://github.com/"><img id="github" src={imagenes[11]} alt="" /></a>
              <a href="https://www.mysql.com/"><img id="mysql" src={imagenes[12]} alt="" /></a>
              <a href="https://nodejs.org/en"><img id="node" src={imagenes[13]} alt="" /></a>
              <a href="https://www.postman.com/"><img id="postman" src={imagenes[14]} alt="" /></a>
              <a href="https://react.dev/"><img id="react" src={imagenes[15]} alt="" /></a>
              <a href="https://unity.com/"><img id="unity" src={imagenes[16]} alt="" /></a>
              <a href="https://code.visualstudio.com/"><img id="visual" src={imagenes[17]} alt="" /></a>
              <a href="https://vitejs.dev/"><img id="vite" src={imagenes[18]} alt="" /></a>
            </div>
          </article>
        </section>

        <section id="Projects">
          <h2>projectos</h2>
          <section>
            <div className="carta">
              <div className="cartaContenedor">
                <h2> Space Travel </h2>
                <p>
                  Tu viaje por el universo ha sido interrumpido por una especie
                  desconocida. Derrótalos para continuar tu travesía y descubrir
                  quién está tratando de detener tu viaje.
                </p>
                <img src={imagenes[5]} alt="" />
              </div>
              <div className="cartaFooter">
                <a href="https://kwawryniuk.itch.io/space-travel">
                  Ir a la pagina
                </a>
              </div>
            </div>
            <div className="carta">
              <div className="cartaContenedor">
                <h2> Climb </h2>
                <p>
                  Escala, resuelve los desafíos y descubre los secretos que la
                  torre guarda, pues en su interior yace la promesa de grandeza
                  destinada para ti.
                </p>
                <img src={imagenes[6]} alt="" />
              </div>
              <div className="cartaFooter">
                <a href="https://kwawryniuk.itch.io/climb">Ir a la pagina</a>
              </div>
            </div>
            <div className="carta">
              <div className="cartaContenedor">
                <h2> En la Carretera no</h2>
                <p>
                  Debes mantener el orden y la limpieza en la selva Misionera pero unos maleantes estan tirando basura
                  ¿Vas a permitir que unos maleantes siguan ensuciando la hermosa selva Misionera y se salgan
                  con la suya?
                </p>
                <img src={imagenes[7]} alt="" />
              </div>
              <div className="cartaFooter">
                <a href="https://nespi.itch.io/enlacarreterano">
                  Ir a la Pagina
                </a>
              </div>
            </div>
            <div className="carta">
              <div className="cartaContenedor">
                <h2> Star Wars Store</h2>
                <p>
                  Esta es mi primera práctica simulando un e-commerce básico. Aunque la
                  página no cuenta con muchas funciones, cumple con los
                  estándares de una aplicación API RESTful.
                </p>
                <img src={imagenes[8]} alt="" />
              </div>
              <div className="cartaFooter">
                <a href="https://github.com/Kevni-Rodrigo-Wawryniuk/final-project-of-the-fullstack-programming-course-Version-0.0">
                  Ir a la pagina
                </a>
              </div>
            </div>
          </section>
        </section>

        <section id="formEmail">
          <form
            action="https://formsubmit.co/kevinwabry@gmail.com"
            method="POST"
          >
            <label htmlFor="">
              Nombre
              <input id="mail" type="text" name="name" placeholder="Nombre" />
            </label>
            <label htmlFor="">
              Email
              <input id="mail" type="email" name="email" placeholder="Email" />
            </label>
            <label htmlFor="">
              Asunto
              <input
                id="mail"
                type="text"
                name="subject"
                placeholder="Asunto"
              />
            </label>
            <label htmlFor="">
              Mensaje
              <input
                id="mensaje"
                type="text"
                name="comments"
                placeholder="Mensaje"
              />
            </label>
            <button id="botonenviar" type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer>
        <ul>
          <li>
            <a id="Enlaces" href="">
              <img id="footertwitch" src={imagenes[19]} alt="" />
            </a>
          </li>
          <li>
            <a id="Enlaces" href="https://github.com/">
              <img id="footergithub" src={imagenes[0]} alt="" />
            </a>
          </li>
          <li>
            <label id="Enlaces" htmlFor="Gmail">
              <img id="footerMail" src={imagenes[1]} alt="" />
            </label>
          </li>
          <li>
            <a id="Enlaces" href="https://www.linkedin.com/feed/">
              <img id="footerlinkedin" src={imagenes[2]} alt="" />
            </a>
          </li>
          <li>
            <a id="Enlaces" href="https://www.instagram.com/">
              <img id="footerinstagram" src={imagenes[3]} alt="" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
