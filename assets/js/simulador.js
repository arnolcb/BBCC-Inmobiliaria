//Obtener los Inputs del formulario
var tipoMoneda = document.getElementById("moneda");
var valorViviendaInput = document.getElementById("valorvivienda");
var cuotaInicialInput = document.getElementById("cuotainicial");
var monto;
//Obtener los espacios para mostrar los resultados
var porcentajeCuotaInicial = document.getElementById(
  "porcentaje_cuota_inicial"
);

var apoyoElement = document.getElementById("apoyo");
//var cuotaMensual = document.getElementById("cuotamensual");
var bonoBuenPagador = document.getElementById("bono_buen_pagador");
var bbp;
apoyoElement.addEventListener("change", function () {
  // Obtener el valor del input
  var valorVivienda = valorViviendaInput.value;
  var apoyoValor = apoyoElement.value;

  // Realizar una comprobación con la elección
  if (apoyoValor === "1") {
    bbp = 0;
  } else if (apoyoValor === "0") {
    if (valorVivienda < 65200) {
      alert("El valor de la vivienda debe ser mayor a 65.200");
    } else if (65200 < valorVivienda && valorVivienda < 93100) {
      bbp = 25700;
    } else if (93100 < valorVivienda && valorVivienda < 139400) {
      bbp = 21400;
    } else if (139400 < valorVivienda && valorVivienda < 232200) {
      bbp = 19600;
    } else if (232200 < valorVivienda && valorVivienda < 343900) {
      bbp = 10800;
    }
  }

  // Insertar el valor del bono en el span
  bonoBuenPagador.innerHTML = bbp;
});

cuotaInicialInput.addEventListener("input", function () {
  //Obtener el valor del input
  var cuotaInicial = cuotaInicialInput.value;
  var valorVivienda = valorViviendaInput.value;

  //Calcular el porcentaje de la cuota inicial
  var porcentajeCuotaInicial = ((cuotaInicial / valorVivienda) * 100).toFixed(
    2
  );

  //Mostrar el porcentaje de la cuota inicial
  document.getElementById("porcentaje_cuota_inicial").innerHTML =
    porcentajeCuotaInicial + " %";
});

var totalBono = document.getElementById("totalbbp");
var sostenibleElement = document.getElementById("sostenible");
var totalbbp;
sostenibleElement.addEventListener("change", function () {
  // Obtener el valor seleccionado
  var valorVivienda = valorViviendaInput.value;
  var selectedValue = sostenibleElement.value;

  // Realizar una comprobación con la elección
  if (selectedValue === "1") {
    if (valorVivienda < 65200) {
      alert("El valor de la vivienda debe ser mayor a 65.200");
    } else if (65200 < valorVivienda && valorVivienda < 93100) {
      totalbbp = 31100;
    } else if (93100 < valorVivienda && valorVivienda < 139400) {
      totalbbp = 26800;
    } else if (139400 < valorVivienda && valorVivienda < 232200) {
      totalbbp = 25000;
    } else if (232200 < valorVivienda && valorVivienda < 343900) {
      totalbbp = 16200;
    }
  } else if (selectedValue === "0") {
    totalbbp = bbp;
  }

  // Insertar el valor del total del bono en el span
  totalBono.innerHTML = totalbbp;

  //Calcular el monto
  var valorVivienda = valorViviendaInput.value;
  var cuotaInicial = cuotaInicialInput.value;
  monto = valorVivienda - cuotaInicial - totalbbp;

  //Mostrar el monto
  document.getElementById("monto").innerHTML = monto;
});

function insertarDatos(datos) {
  // Crear una solicitud HTTP
  var xhr = new XMLHttpRequest();

  // Definir la URL del script PHP
  var url = "php/insertar.php";

  // Abrir una conexión POST hacia el script PHP
  xhr.open("POST", url, true);

  // Establecer el encabezado de la solicitud
  xhr.setRequestHeader("Content-Type", "application/json");

  // Escuchar el evento de carga de la solicitud
  xhr.onload = function () {
    // Verificar el estado de la respuesta del servidor
    if (xhr.status === 200) {
      // La solicitud se ha realizado correctamente
      console.log(xhr.responseText);
    } else {
      // Ha ocurrido un error en la solicitud
      console.error("Error al insertar los datos");
    }
  };

  // Convertir los datos a formato JSON
  var jsonData = JSON.stringify(datos);

  // Enviar la solicitud con los datos JSON
  xhr.send(jsonData);
}

function gen_table() {
  //Vectores
  var cuotaMensualSpan = document.getElementById("cuota");
  var tasaSelect = document.getElementById("tasa_tipo");
  var teaInput = document.getElementById("tea");
  var teaSpan = document.getElementById("tea_final");
  var desgravamenInput = document.getElementById("segurod");
  var plazoInput = document.getElementById("plazo");
  var inmuebleInput = document.getElementById("seguroi");
  var valorViviendaInput = document.getElementById("valorvivienda");
  var valorVivienda = valorViviendaInput.value;

  var tea;
  //var tea = Number(teaInput.value);
  if(tasaSelect.value == "1"){
    //Se recibe nominal y se convierte a efectiva
    tea = Math.pow(1 + (Number(teaInput.value/100)/360), 360) - 1;
  }
  else if(tasaSelect.value == "0"){
    tea = Number(teaInput.value)/ 100;
  }
  else{
    alert("Seleccione un tipo de tasa");
  }
  var plazo = Number(plazoInput.value);
  var per_Desgravamen = Number(desgravamenInput.value);
  var per_Inmueble = Number(inmuebleInput.value);
  var periodos = [];
  var saldos = [];
  var amortizaciones = [];
  var intereses = [];
  //var desgravamen = [];
  var inmueble = [];
  var saldo_f = [];
  var cuota = [];
  var cuota_mensual;
  var tem;
  tem = Math.pow(1 + tea, 1 / 12) - 1;

  var sDesgravamen = [];
  var sInmueble;

  sInmueble = (per_Inmueble / 12) * valorVivienda;

  document.getElementById("tabla-res").innerHTML = "";
  saldos[1] = monto;
  cuota_mensual =
    (monto * (tem + per_Desgravamen)) /
      (1 - Math.pow(1 + (tem + per_Desgravamen), -plazo)) +
    sInmueble;

  //Nuevas variables//
  var p_gracia_existe = document.getElementById("p_gracia_select");
  var p_gracia_tipo = document.getElementById("p_gracia_tipo");
  var p_gracia_num = document.getElementById("p_gracia_num");
  var tasa_costo = document.getElementById("costo_oportunidad");
  //tasa_costo = Number(tasa_costo.value);
  var vanSpan = document.getElementById("van");
  var tirSpan = document.getElementById("tir");
  var cuota_mensual_temp = [];
  var valor_van = 0;
  var valor_tir = 0;
  //To number
  var p_gracia_num_value = Number(p_gracia_num.value);
  var tasa_costo_value = Number(tasa_costo.value)/100;

  if (p_gracia_existe.value == "1") {
    //2 -> Periodo de gracia total
    if (p_gracia_tipo.value == "2") {
      for (i = 1; i <= p_gracia_num_value; i++) {
        intereses[i] = saldos[i] * tem;
        sDesgravamen[i] = saldos[i] * per_Desgravamen;

        //CAMBIO
        amortizaciones[i] = 0;

        saldo_f[i] = saldos[i] - amortizaciones[i];
        saldos[i + 1] = saldo_f[i];

        cuota_mensual_temp[i] = amortizaciones[i] + sDesgravamen[i] + sInmueble;
      }
      cuota_mensual_temporal =
          (saldos[1] * (tem + per_Desgravamen)) /
            (1 - Math.pow(1 + (tem + per_Desgravamen), -(plazo-i+1))) +
          sInmueble;
      for (i = p_gracia_num_value + 1; i <= plazo; i++) {
        intereses[i] = saldos[i] * tem;
        sDesgravamen[i] = saldos[i] * per_Desgravamen;
        //inmueble[i] = sInmueble.toFixed(2);
        amortizaciones[i] =
          cuota_mensual_temporal - intereses[i] - sDesgravamen[i] - sInmueble;
        saldo_f[i] = saldos[i] - amortizaciones[i];
        saldos[i + 1] = saldo_f[i];
        cuota_mensual_temp[i] = cuota_mensual_temporal;
      }
      for (i = 1; i <= plazo; i++) {
        document.getElementById("tabla-res").innerHTML =
          document.getElementById("tabla-res").innerHTML +
          `<tr>
                      <td> ${i}</td>
                      <td> ${saldos[i].toFixed(2)}</td>
                      <td> ${amortizaciones[i].toFixed(2)}</td>
                      <td> ${intereses[i].toFixed(2)}</td>
                      <td> ${sDesgravamen[i].toFixed(2)}</td>
                      <td> ${sInmueble.toFixed(2)}</td>
                      <td> ${saldo_f[i].toFixed(2)}</td>
                      <td> ${cuota_mensual_temp[i].toFixed(2)}</td>
                  </tr>`;
      }
      //Inner de cuota_mensual al span de cuota
      cuotaMensualSpan.innerHTML = cuota_mensual_temp[1].toFixed(2) + "   " + cuota_mensual_temp[p_gracia_num_value+1].toFixed(2);

      var i;

      for (i = 1; i <= plazo; i++) {
        // Check if `i` is an integer
        if (typeof i === "number") {
          // Use `Math.pow()`
          valor_van = valor_van + cuota_mensual_temp[i] / Math.pow(1 + tasa_costo_value, i);
        } else {
          // Convert `i` to an integer
          i = Math.floor(i);
          // Use `Math.pow()`
          valor_van = valor_van + cuota_mensual_temp[i] / Math.pow(1 + tasa_costo_value, i);
        }
      }

      valor_van = valor_van - saldos[1];
      //Inner a vanSpan
      vanSpan.innerHTML = valor_van.toFixed(2);

      //Inner de tea a span tea_final
      teaSpan.innerHTML = (tea * 100).toFixed(2) + " %";

    }
    //1 -> Periodo de gracia parcial
    else if (p_gracia_tipo.value == "1") {
      for (i = 1; i <= p_gracia_num_value; i++) {
        intereses[i] = saldos[i] * tem;
        sDesgravamen[i] = saldos[i] * per_Desgravamen;

        //CAMBIO
        amortizaciones[i] = 0;

        saldo_f[i] = saldos[i] - amortizaciones[i];
        saldos[i + 1] = saldo_f[i];

        cuota_mensual_temp[i] = amortizaciones[i] + intereses[i]+ sDesgravamen[i] + sInmueble;
      }
      cuota_mensual_temporal =
          (saldos[1] * (tem + per_Desgravamen)) /
            (1 - Math.pow(1 + (tem + per_Desgravamen), -(plazo-i+1))) +
          sInmueble;
      for (i = p_gracia_num_value + 1; i <= plazo; i++) {
        intereses[i] = saldos[i] * tem;
        sDesgravamen[i] = saldos[i] * per_Desgravamen;
        //inmueble[i] = sInmueble.toFixed(2);
        amortizaciones[i] =
          cuota_mensual_temporal - intereses[i] - sDesgravamen[i] - sInmueble;
        saldo_f[i] = saldos[i] - amortizaciones[i];
        saldos[i + 1] = saldo_f[i];
        cuota_mensual_temp[i] = cuota_mensual_temporal;
      }
      for (i = 1; i <= plazo; i++) {
        document.getElementById("tabla-res").innerHTML =
          document.getElementById("tabla-res").innerHTML +
          `<tr>
                      <td> ${i}</td>
                      <td> ${saldos[i].toFixed(2)}</td>
                      <td> ${amortizaciones[i].toFixed(2)}</td>
                      <td> ${intereses[i].toFixed(2)}</td>
                      <td> ${sDesgravamen[i].toFixed(2)}</td>
                      <td> ${sInmueble.toFixed(2)}</td>
                      <td> ${saldo_f[i].toFixed(2)}</td>
                      <td> ${cuota_mensual_temp[i].toFixed(2)}</td>
                  </tr>`;
      }
    }
      //Inner de cuota_mensual al span de cuota
      cuotaMensualSpan.innerHTML = cuota_mensual_temp[1].toFixed(2) + "   " + cuota_mensual_temp[p_gracia_num_value +1].toFixed(2);

      var i;

      for (i = 1; i <= plazo; i++) {
        // Check if `i` is an integer
        if (typeof i === "number") {
          // Use `Math.pow()`
          valor_van = valor_van + cuota_mensual_temp[i] / Math.pow(1 + tasa_costo_value, i);
        } else {
          // Convert `i` to an integer
          i = Math.floor(i);
          // Use `Math.pow()`
          valor_van = valor_van + cuota_mensual_temp[i] / Math.pow(1 + tasa_costo_value, i);
        }
      }

      valor_van = valor_van - saldos[1];
      //Inner a vanSpan
      vanSpan.innerHTML = valor_van.toFixed(2);

      //Inner de tea a span tea_final
      teaSpan.innerHTML = (tea * 100).toFixed(2) + " %";
  }
  else {
    for (i = 1; i <= plazo; i++) {
      //TODO NUEVO
      periodos[i] = i;
      /*Calculo de valores*/
      //cuota[i] = cuota_mensual;
      intereses[i] = saldos[i] * tem;
      sDesgravamen[i] = saldos[i] * per_Desgravamen;
      //inmueble[i] = sInmueble.toFixed(2);
      amortizaciones[i] =
        cuota_mensual - intereses[i] - sDesgravamen[i] - sInmueble;
      saldo_f[i] = saldos[i] - amortizaciones[i];
      saldos[i + 1] = saldo_f[i];
  
      /*Mostrar tabla*/
      document.getElementById("tabla-res").innerHTML =
        document.getElementById("tabla-res").innerHTML +
        `<tr>
                        <td> ${i}</td>
                        <td> ${saldos[i].toFixed(2)}</td>
                        <td> ${amortizaciones[i].toFixed(2)}</td>
                        <td> ${intereses[i].toFixed(2)}</td>
                        <td> ${sDesgravamen[i].toFixed(2)}</td>
                        <td> ${sInmueble.toFixed(2)}</td>
                        <td> ${saldo_f[i].toFixed(2)}</td>
                        <td> ${cuota_mensual.toFixed(2)}</td>
                    </tr>`;
    }
    //Inner de cuota_mensual al span de cuota
    cuotaMensualSpan.innerHTML = cuota_mensual.toFixed(2);

    var i;

    for (i = 1; i <= plazo; i++) {
      // Check if `i` is an integer
      if (typeof i === "number") {
        // Use `Math.pow()`
        valor_van = valor_van + cuota_mensual / Math.pow(1 + tasa_costo_value, i);
      } else {
        // Convert `i` to an integer
        i = Math.floor(i);
        // Use `Math.pow()`
        valor_van = valor_van + cuota_mensual / Math.pow(1 + tasa_costo_value, i);
      }
    }

    valor_van = valor_van - saldos[1];
    //Inner a vanSpan
    vanSpan.innerHTML = valor_van.toFixed(2);
  }

    //Inner de tea a span tea_final
    teaSpan.innerHTML = (tea * 100).toFixed(2) + " %";

  /*Sección de validaciones*/  
  if(tasaSelect.value == "1"){
    if(teaInput.value > 13.09){
      alert("La tasa nominal debe ser menor a 13.09 %");
      //borrar tabla
      document.getElementById("tabla-res").innerHTML = "";
      document.getElementById("van").innerHTML = "";
      document.getElementById("tir").innerHTML = "";
      document.getElementById("cuota").innerHTML = "";
    }
  } else if(tasaSelect.value == "0"){
    if(teaInput.value > 13.99){
      alert("La tasa efectiva debe ser menor a 13,99 %");
      //borrar tabla
      document.getElementById("tabla-res").innerHTML = "";
      document.getElementById("van").innerHTML = "";
      document.getElementById("tir").innerHTML = "";
      document.getElementById("cuota").innerHTML = "";
    }
  }

  if(plazo > 360){
    alert("El plazo debe ser menor a 360 meses");
    //borrar tabla
    document.getElementById("tabla-res").innerHTML = "";
    document.getElementById("van").innerHTML = "";
    document.getElementById("tir").innerHTML = "";
    document.getElementById("cuota").innerHTML = "";
  }

  var datos = {
    moneda : tipoMoneda.value,
    valor_vivienda : valorVivienda,
    cuota_inicial : cuotaInicialInput.value,
    total_bbp : totalbbp,
    monto_a_financiar : monto,
    tea : tea,
    t_costo : tasa_costo_value,
    s_desgravamen : per_Desgravamen,
    s_inmueble : per_Inmueble,
    plazo : plazo,
    num_per_gracia : p_gracia_num_value,
    cuota_mensual : cuota_mensual,
    van : valor_van,
  };

  insertarDatos(datos);
}

function borrar_tabla() {
  document.getElementById("tabla-res").innerHTML = "";

  pagos = [];
  intereses = [];
  amortizaciones = [];
  saldos = [];
  tasas = [];
  periodos = [];

  totalPagos = 0;
  totalIntereses = 0;
  totalAmortizaciones = 0;
  valor_van = 0;
  //document.getElementById("cuota").innerHTML = "";
  document.getElementById("van").innerHTML = "";
  document.getElementById("tir").innerHTML = "";
  //alert("Tabla borrada");
}