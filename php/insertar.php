<?php
// Obtener los datos enviados desde JavaScript
$data = json_decode(file_get_contents("php://input"));

// Conectar a la base de datos
$servername = "127.0.0.1:33065";
$username = "root";
$password = "";
$dbname = "bbcc_db";
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión a la base de datos
if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Obtener los valores enviados desde JavaScript
$moneda = $data->moneda;
$valor_vivienda = $data->valor_vivienda;
$cuota_inicial = $data->cuota_inicial;
$total_bbp = $data->total_bbp;
$monto_a_financiar = $data->monto_a_financiar;
$tea = $data->tea;
$t_costo = $data->t_costo;
$s_desgravamen = $data->s_desgravamen;
$s_inmueble = $data->s_inmueble;
$plazo = $data->plazo;
$num_per_gracia = $data->num_per_gracia;
$cuota_mensual = $data->cuota_mensual;
$van = $data->van;
// Otros valores que desees insertar en la base de datos

// Preparar la consulta SQL para insertar los valores
$sql = "INSERT INTO operaciones (moneda, valor_vivienda, cuota_inicial, total_bbp, monto_a_financiar, tea, t_costo, s_desgravamen, s_inmueble, plazo, num_per_gracia, cuota_mensual, van)
VALUES ('$moneda', '$valor_vivienda', '$cuota_inicial', '$total_bbp', '$monto_a_financiar', '$tea', '$t_costo', '$s_desgravamen', '$s_inmueble', '$plazo', '$num_per_gracia', '$cuota_mensual', '$van')";
// Ejecutar la consulta SQL
if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error al insertar los datos: " . $conn->error;
}

// Cerrar la conexión a la base de datos
$conn->close();
?>





Regenerate response
