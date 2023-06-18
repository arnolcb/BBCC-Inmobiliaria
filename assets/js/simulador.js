//Obtener los Inputs del formulario
var valorViviendaInput = document.getElementById("valorvivienda");
var cuotaInicialInput = document.getElementById("cuotainicial");

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
  var monto = valorVivienda - cuotaInicial - totalbbp;

  //Mostrar el monto
  document.getElementById("monto").innerHTML = monto;
});

var cuotaMensualSpan = document.getElementById("cuota");
var teaInput = document.getElementById("tea");
var desgravamenInput = document.getElementById("segurod");
var plazoInput = document.getElementById("plazo");
var inmuebleInput = document.getElementById("seguroi");

plazoInput.addEventListener("input", function () {
  var tea = parseFloat(teaInput.value);
  var desgravamen = parseFloat(desgravamenInput.value);
  var inmueble = parseFloat(inmuebleInput.value);
  var plazo = parseFloat(plazoInput.value);

  // Calculamos la cuota mensual
  var cuotaMensual = desgravamen + inmueble + tea + plazo;

  // Mostrar la cuota mensual
  cuotaMensualSpan.innerHTML = cuotaMensual;
});
