//Obtener los Inputs del formulario
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


function gen_table() {
  //Vectores
  var cuotaMensualSpan = document.getElementById("cuota");
  var teaInput = document.getElementById("tea");
  var desgravamenInput = document.getElementById("segurod");
  var plazoInput = document.getElementById("plazo");
  var inmuebleInput = document.getElementById("seguroi");
  var valorViviendaInput = document.getElementById("valorvivienda");
  var valorVivienda = valorViviendaInput.value;
  var tea = Number(teaInput.value);
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

  sInmueble = ((per_Inmueble/12)) * valorVivienda;

  document.getElementById("tabla-res").innerHTML = "";
  saldos[1] = monto;
  cuota_mensual = ((monto * (tem + per_Desgravamen)) / (1 - Math.pow(1 + (tem + per_Desgravamen), -plazo)) + sInmueble);

  for (i = 1; i <= plazo; i++) {

    /*Calculo de valores*/
    //cuota[i] = cuota_mensual;
    intereses[i] = saldos[i] * tem;
    sDesgravamen[i] = saldos[i] * per_Desgravamen;
    //inmueble[i] = sInmueble.toFixed(2);
    amortizaciones[i] = cuota_mensual - intereses[i] - sDesgravamen[i] - sInmueble;
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

  /*Totales*/
}

function borrar_tabla() {
  document.getElementById("tabla-res").innerHTML = "";
  document.getElementById("t1").innerHTML = "";
  document.getElementById("t2").innerHTML = "";
  document.getElementById("t3").innerHTML = "";
  document.getElementById("t4").innerHTML = "";
  document.getElementById("t5").innerHTML = "";
  document.getElementById("t6").innerHTML = "";
  document.getElementById("t7").innerHTML = "";

  pagos = [];
  intereses = [];
  amortizaciones = [];
  saldos = [];
  tasas = [];
  periodos = [];

  totalPagos = 0;
  totalIntereses = 0;
  totalAmortizaciones = 0;
  //alert("Tabla borrada");
}
