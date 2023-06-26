<?php
session_start();

if (isset($_SESSION['mail'])) {
  header('Location: main.php');
}
?>

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BBCC Inmobiliaria</title>
    <link rel="icon" href="assets/images/BBCC_icon.ico" />
    <link rel="stylesheet" href="assets/css/login.css" />
  </head>
  <body>
    <main>
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="php/login_usuario_be.php" method="POST" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="assets/images/BBCC_logo.png" alt="easyclass" />
                <h4>BBCC Inmobiliaria</h4>
              </div>

              <div class="heading">
                <h2>Bienvenido de nuevo</h2>
                <h6>¿Aún no te has registrado?</h6>
                <a href="#" class="toggle">Regístrate</a>
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    name = "mail"
                    required
                  />
                  <label>Correo electrónico</label>
                </div>

                <div class="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    name = "password"
                    required
                  />
                  <label>Contraseña</label>
                </div>

                <input type="submit" value="Iniciar sesión" class="sign-btn" />

                <p class="text">
                    ¿Ha olvidado su contraseña o sus datos de acceso?
                  <a href="#">Obtén ayuda</a> para iniciar sesión
                </p>
              </div>
            </form>

            <form action="php/registro_usuario_be.php" method="POST"autocomplete="off" class="sign-up-form">
              <div class="logo">
                <img src="assets/images/BBCC_logo.png" alt="easyclass" />
                <h4>BBCC Inmobiliaria</h4>
              </div>

              <div class="heading">
                <h2>Comencemos</h2>
                <h6>¿Ya tiene una cuenta?</h6>
                <a href="#" class="toggle">Inicia sesión</a>
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    name="user"
                    required
                  />
                  <label>Nombre de usuario</label>
                </div>

                <div class="input-wrap">
                  <input
                    type="email"
                    class="input-field"
                    autocomplete="off"
                    name="mail"
                    required
                  />
                  <label>Correo electrónico</label>
                </div>

                <div class="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    name="password"
                    required
                  />
                  <label>Contraseña</label>
                </div>

                <input type="submit" value="Registrarse" class="sign-btn" />

                <p class="text">
                  Al registrarme, acepto las
                  <a href="#">Condiciones de servicio</a> y la
                  <a href="#">Política de privacidad</a>
                </p>
              </div>
            </form>
          </div>

          <div class="carousel">
            <div class="images-wrapper">
              <img src="assets/images/login/image1.png" class="image img-1 show" alt="" />
              <img src="assets/images/login/image2.png" class="image img-2" alt="" />
              <img src="assets/images/login/image3.png" class="image img-3" alt="" />
            </div>

            <div class="text-slider">
              <div class="text-wrap">
                <div class="text-group">
                  <h2>Encuentra tu hogar ideal</h2>
                  <h2>Obtén asesoramiento</h2>
                  <h2>Usa nuestras herramientas</h2>
                </div>
              </div>

              <div class="bullets">
                <span class="active" data-value="1"></span>
                <span data-value="2"></span>
                <span data-value="3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Javascript file -->

    <script src="assets/js/login.js"></script>
  </body>
</html>