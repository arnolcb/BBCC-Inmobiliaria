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
  <title>Página principal</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" />
  <link rel="icon" href="assets/images/BBCC_icon.ico" />
  <link rel="stylesheet" href="assets/css/mainv1.css" />
  <script src="https://kit.fontawesome.com/192123a608.js" crossorigin="anonymous"></script>
  <style>
    /* Estilos para la ventana emergente */
    .modal {
      display: none;
      /* Ocultar la ventana emergente por defecto */
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
      position: relative;
      margin: 10% auto;
      padding: 20px;
      width: 60%;
      max-width: 800px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .modal-content img {
      width: 100%;
      height: auto;
    }

    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      color: #aaa;
      cursor: pointer;
    }

    .container-cotizar {
      text-align: center;
    }

    .cotizar-btn {
      color: #ececec;
      display: inline-block;
      text-decoration: none;
      background-color: #1e3240;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      margin-top: 0.6rem;
      font-size: 14px;
      transition: all 0.2s;
    }
  </style>
</head>

<body>
  <header>
    <div class="text_logo">BBCC Inmobiliaria</div>
    <div class="userTarget">
      <img src="assets/images/login/user_icon.png" alt="ícono de usuario" />
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
      <div class="option1">
        <a>Ver inmuebles</a>
      </div>
      <div class="option2">
        <a href="simulador.php">Simulador de cuotas</a>
      </div>
    </div>

    <section class="products">
      <!--<h2>Our Products</h2>-->
      <div class="all-products">
        <div class="product">
          <img src="assets/images/houses/inm1.jpg" />
          <div class="product-info" data-address="Av. Los Pinos 123, San Isidro" data-area="120" data-price="$ 120000" data-bedrooms="3" data-bathrooms="2" data-parking="1" data-sustainable="Sí">
            <h4 class="product-title">Inmueble 1</h4>
            <p class="product-price">$ 120000</p>
            <a class="product-btn" href="#">Más información</a>
          </div>
        </div>
        
        <!-- Agregar más productos aquí -->
        
        <div class="product">
          <img src="assets/images/houses/inm2.jpg" />
          <div class="product-info" data-address="Calle Principal 456, Miraflores" data-area="150" data-price="S/. 180000" data-bedrooms="4" data-bathrooms="3" data-parking="2" data-sustainable="Sí">
            <h4 class="product-title">Inmueble 2</h4>
            <p class="product-price">S/. 180000</p>
            <a class="product-btn" href="#">Más información</a>
          </div>
        </div>
        
        <div class="product">
          <img src="assets/images/houses/inm4.jpg" />
          <div class="product-info" data-address="Avenida Central 789, San Borja" data-area="90" data-price="$ 95000" data-bedrooms="2" data-bathrooms="1" data-parking="0" data-sustainable="Sí">
            <h4 class="product-title">Inmueble 3</h4>
            <p class="product-price">$ 95000</p>
            <a class="product-btn" href="#">Más información</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Ventana emergente (modal) -->
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h4 class="product-title"></h4>
        <img class="product-image" src="" alt="" />
        <p class="product-description">
          <strong>Dirección:</strong> <span class="address"></span><br />
          <strong>Área:</strong> <span class="area"></span> m<sup>2</sup>&nbsp&nbsp&nbsp&nbsp&nbsp<strong>Precio:</strong> 
          <span class="price"></span>&nbsp&nbsp&nbsp&nbsp&nbsp<strong>Dormitorios:</strong> <span class="bedrooms"></span>&nbsp&nbsp&nbsp&nbsp&nbsp
          <strong>Baños:</strong> <span class="bathrooms"></span><br />
          <strong>Estacionamientos:</strong> <span class="parking"></span>&nbsp&nbsp&nbsp&nbsp&nbsp<strong>¿Vivienda Sostenible?:</strong> <span class="sustainable"></span><br />
        </p>
        <!-- Otros elementos de información y botones -->
        <p class="container-cotizar">
          <a class="cotizar-btn" href="simulador.php">Cotizar</a>
        </p>
      </div>
    </div>

  </main>
  <script>
    // Función para abrir la ventana emergente
    function openModal(event) {
      var modal = document.getElementById("myModal");
      var productInfo = event.target.closest(".product-info");
      var title = productInfo.querySelector(".product-title").innerText;
      var image = productInfo.parentNode.querySelector("img").src;
      var address = productInfo.getAttribute("data-address");
      var area = productInfo.getAttribute("data-area");
      var price = productInfo.getAttribute("data-price");
      var bedrooms = productInfo.getAttribute("data-bedrooms");
      var bathrooms = productInfo.getAttribute("data-bathrooms");
      var parking = productInfo.getAttribute("data-parking");
      var sustainable = productInfo.getAttribute("data-sustainable");

      modal.querySelector(".product-title").innerText = title;
      modal.querySelector(".product-image").src = image;
      modal.querySelector(".address").innerText = address;
      modal.querySelector(".area").innerText = area;
      modal.querySelector(".price").innerText = price;
      modal.querySelector(".bedrooms").innerText = bedrooms;
      modal.querySelector(".bathrooms").innerText = bathrooms;
      modal.querySelector(".parking").innerText = parking;
      modal.querySelector(".sustainable").innerText = sustainable;

      modal.style.display = "block";
    }

    // Función para cerrar la ventana emergente
    function closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }

    // Obtener todos los botones de producto
    var productBtns = document.querySelectorAll(".product-btn");

    // Agregar evento de clic a cada botón de producto
    productBtns.forEach(function (btn) {
      btn.addEventListener("click", openModal);
    });

    // Obtener el botón de cierre
    var closeBtn = document.querySelector(".close-btn");

    // Agregar evento de clic al botón de cierre
    closeBtn.addEventListener("click", closeModal);
  </script>
</body>

</html>
