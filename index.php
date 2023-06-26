<?php
session_start();
/*
if (isset($_SESSION['mail'])) {
  header('Location: main.php');
}*/
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BBCC Inmobiliaria</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" />
  <link rel="icon" href="assets/images/BBCC_icon.ico" />
  <link rel="stylesheet" href="assets/css/styles2.css" />
  <script src="https://kit.fontawesome.com/192123a608.js" crossorigin="anonymous"></script>
</head>

<body>
  <header>
  <nav>
      <div class="logo">
        <a href="#"><img src="assets/images/BBCC_logo.png" alt="Logo"></a>
        <!--<p>BBCC Inmobiliaria</p>-->
      </div>
      <ul class="menu" id="menu">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a id="loginnav" href="login.php">Inicia sesión</a></li>
      </ul>
      <div class="menu-toggle" id="menu-toggle">
        <i class="fas fa-bars"></i>
      </div>
    </nav>
  </header>

  <main>
    <div class="hero">
      <div class="ctatext">
        <h1>¡Comienza una nueva aventura en el hogar de tus sueños!</h1>
        <p>
          En <strong>BBCC Inmobiliaria</strong> encontrarás las mejores
          opciones para tu nuevo hogar. <br />
          Recibe además, asesoramiento e información sobre el nuevo crédito
          <strong>Mi vivienda.</strong> <br />
          Échale un vistazo a nuestros nuevos
          <a href="#projects" id="ref-projects">proyectos</a>. Para ver los
          proyectos culminados y acceder a nuestros servicios, regístrate o
          inicia sesión.
        </p>
        <!--
          <a href="#" id="ctabutton1">Regístrate</a>
          <a href="#" id="ctabutton2">Inicia sesión</a>-->
      </div>
      <div class="ctaimage">
        <img src="assets/images/house11.png" alt="Casa blanca de ejemplo" />
      </div>
    </div>

    <div class="about" id="about">
      <div class="aboutimg">
        <img class="logo-img" src="assets/images/fondo_mv.png" alt="Logo del fondo mi vivienda" />
        <!--<div class ="tempimg"></div>-->
      </div>
      <div class="abouttext">
        <h2>¿Necesitas apoyo para encontrar tu nuevo hogar?</h2>
        <p>
          <strong>¿Conoces ya el nuevo crédito Mi Vivienda? </strong><br />
          Si tu respuesta es no, no te preocupes. <br />
          En BBCC te asesoramos y ponemos a tu disposición una calculadora de
          cuotas para el nuevo crédito Mi Vivienda. <br />
        </p>
        <a href="login.php" style="text-decoration:none;">Regístrate y pruébalo ahora</a>
      </div>
    </div>

    <div class="projects" id="projects">
      <div class="projectstext">
        <h2>Nuestros próximos proyectos</h2>
        <p>
          Echa un vistazo a nuestros proyectos inmobiliarios más recientes
        </p>
      </div>
      <div class="projectsimg">
        <img src="assets/images/project1.png" alt="Casa blanca de ejemplo" />
        <img src="assets/images/project2.png" alt="Casa blanca de ejemplo" />
        <img src="assets/images/project3.png" alt="Casa blanca de ejemplo" />
        <!--<img src="assets/images/project4.png" alt="Casa blanca de ejemplo" />-->
      </div>
    </div>

    <div class="testimonial">
      <div class="testimonialtop">
        <h1>Algunas sonrisas y comentarios</h1>
        <p>Algunos comentarios de clientes satisfechos</p>
      </div>
      <div class="contenedortestimonial">
        <div class="testimonialimg">
          <img src="assets/images/testimonialman.png" alt="Casa blanca de ejemplo" />
        </div>

        <div class="testimonialtext">
          <div class="title-test">
            <img src="assets/images/gg_quote.png" alt="Comillas" />
            <h2>El apoyo que necesitaba para encontrar mi nuevo hogar</h2>
          </div>
          <div class="cuerpo-test">
            <p>
              En BBCC Inmobiliaria me asesoraron sobre el nuevo crédito Mi
              Vivienda, y gracias al simulador de cronograma de pagos, estoy
              ahora viviendo en la casa de mis sueños.
            </p>
          </div>
          <div class="autor-test">
            <h4>Brooklyn Simmons</h4>
            <p>Artista</p>
          </div>
        </div>
      </div>
    </div>

    <div class="contact" id="contact">
      <div class="contactimg">
        <img src="assets/images/contacthouse.png" alt="Casa blanca de ejemplo" />
      </div>
      <div class="contactform">
        <h2>Contáctanos</h2>
        <p>
          Envíanos un correo para comunicarte con un agente o solicitar un
          presupuesto
        </p>
        <form action="">
          <div class="form-row">
            <div class="form-group" id="rowg1">
              <input type="text" placeholder="Nombres" />
            </div>
            <div class="form-group">
              <input type="text" placeholder="Apellidos" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" id="rowg1">
              <input type="text" placeholder="Correo electrónico" />
            </div>
            <div class="form-group">
              <input type="text" placeholder="Teléfono" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <input type="submit" value="Enviar" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>

  <footer class="pie-pagina">
    <div class="grupo-1">
      <div class="box">
        <h2>BBCC Inmobiliaria</h2>
        <p><i class="fa-solid fa-location-dot" style="color: #bdbdbd;"></i> 2118 Thornridge Cir. Dubai, UAE 35624</p>
        <p><i class="fa-solid fa-phone" style="color: #bdbdbd;"></i>999 999 999</p>
        <p><i class="fa-solid fa-envelope" style="color: #bdbdbd;"></i>contact@bbcc.com</p>
      </div>
      <div class="box">
        <h2>Acceso Rápido</h2>
        <a href="#">Inicio</a> <br />
        <a href="#about">Nosotros</a> <br />
        <a href="#projects">Projectos</a> <br />
        <a href="#contact">Contacto</a> <br />
        <a href="#">Términos y condiciones</a>
      </div>
      <div class="box">
        <h2>Redes Sociales</h2>
        <div class="red-social">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-youtube"></a>
        </div>
      </div>
    </div>
    <div class="grupo-2">
      <small>&copy; 2023 BBCC Inmobiliaria - Todos los Derechos Reservados.</small>
    </div>
  </footer>

  <!--<script src="assets/js/main.js"></script>-->
  <script>
    // Script para mostrar/ocultar el menú desplegable
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  </script>
</body>

</html>