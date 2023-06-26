<?php
session_start();

if (!isset($_SESSION['mail'])) {
    echo '
        <script>
            alert("Por favor debes iniciar sesión");
            window.location = "index.php";
        </script>
        ';
    session_destroy();
    die();
}
?>


<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simulador de cuotas</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" />
    <link rel="icon" href="assets/images/BBCC_icon.ico" />
    <link rel="stylesheet" href="assets/css/forhelp.css" />
    <script src="https://kit.fontawesome.com/192123a608.js" crossorigin="anonymous"></script>
</head>

<body>
    <header>
        <div class="text_logo">BBCC Inmobiliaria</div>
        <div class="userTarget">
            <img src="assets/images/login/user_icon.png" alt="alt=" ícono de usuario"" />
            <nav>
                <a class="textUser">
                    <?php echo $_SESSION['mail']; ?>
                </a>
                <ul>
                    <a href="php/cerrar_sesion.php" class="cerrar-sesion">Cerrar sesión</a>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div class="welcome">
            <p>
                Bienvenido !
            </p>
        </div>

        <div class="options">
            <!--<ul>
          <li class="active">Ver inmuebles</li>
          <li><a href="verTabla.php">Simulador de cuotas</a></li>
        </ul>-->
            <div class="option1">
                <a href="main.php">Ver inmuebles</a>
            </div>
            <div class="option2">
                <a href="simulador.php">Simulador de cuotas</a>
            </div>
            <div class="option3">
                <a>Ayuda <i class="fa-solid fa-circle-question" style="color: #1e3240;"></i></a>
            </div>
        </div>

        <div class="contenedor-guia">
            <div class="guia">
                <h1>Guía de uso</h1>
                <p>A continuación se muestra el formulario con notas que explican como llenar cada campo.</p>
            </div>
        </div>

        <div class="contenedor-imagen">
            <div class="imagen">
                <img src="assets/images/help/guiaPagina.png" alt="imagen de ayuda" />
            </div>
        </div>

    </main>

    <!--<script src="assets/js/simulador.js"></script>-->
</body>

</html>