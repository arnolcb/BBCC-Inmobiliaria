/*Now*/

var monto_financiar;
var v_vivienda = document.getElementById("valorvivienda");
var cuota_inicial = document.getElementById("cuotainicial");
var bono;

var v_vivienda_value = parseFloat(v_vivienda.value);
var cuota_inicial_value = parseFloat(cuota_inicial.value);

function calcularbono() {
  var sostenible = document.getElementById("sostenible");
  var sostenible_value = parseFloat(sostenible.value);
  if (sostenible_value == 1) {
    if (v_vivienda_value < 65200) {
      //alert("El valor de la vivienda debe ser mayor a 65.200");
    } else if (65200 < v_vivienda_value && v_vivienda_value < 93100) {
      bono = 31100;
    } else if (93100 < v_vivienda_value && v_vivienda_value < 139400) {
      bono = 26800;
    } else if (139400 < v_vivienda_value && v_vivienda_value < 232200) {
      bono = 25000;
    } else if (232200 < v_vivienda_value && v_vivienda_value < 343900) {
      bono = 16200;
    }
  } else if (sostenible_value == 0) {
    bono = 0;
  }
  //return bono;
}

calcularbono();

monto_financiar = v_vivienda_value - cuota_inicial_value - bono;

/*Vectores*/
var saldos = [];
var amortizaciones = [];
var intereses = [];
var desgravamen = [];
var inmueble = [];
var saldo_f = [];
var cuota = [];

function gen_table() {
  document.getElementById("tabla-res").innerHTML = "";
  var apoyoSelect = document.getElementById("apoyo");
  var apoyo_value = apoyoSelect.value;
  var plazoInput = document.getElementById("plazo");
  //var plazo_value = Number(plazoInput.value);
  //var saldoiterador = 0;
  if (v_vivienda_value > 0) {
    for (i = 1; i <= plazoInput.value; i++) {
      //hacer push a los vectores
      periodos.push(i);
      saldos[i] = 0;
      amortizaciones[i] = 0;
      intereses[i] = 0;
      desgravamen[i] = 0;
      inmueble[i] = 0;
      saldo_f[i] = 0;
      cuota[i] = 0;
      document.getElementById("tabla-res").innerHTML =
        document.getElementById("tabla-res").innerHTML +
        `<tr>
                      <td> ${i}</td>
                      <td> ${saldos[i]}</td>
                      <td> ${amortizaciones[i]}</td>
                      <td> ${intereses[i]}</td>
                      <td> ${desgravamen[i]}</td>
                      <td> ${inmueble[i]}</td>
                      <td> ${saldo_f[i]}</td>
                      <td> ${cuota[i]}</td>
                  </tr>`;
    }
    /*
    for(i =0; i < periodos.length; i++){
      totalPagos += pagos[i];
      totalIntereses += intereses[i];
      totalAmortizaciones += amortizaciones[i];
    }*/
    /*
    n1 = n.toFixed(2);
    t_i = i2 * n2;
    d4 = t_i.toFixed(2);
    t_p = r * n2;
    d5 = t_p.toFixed(2);*/

    /*
    var n1 = n.toFixed(2);
    var t_i = intereses.reduce((a, b) => a + b, 0);
    var d4 = t_i.toFixed(2);
    var t_p = amortizaciones.reduce((a, b) => a + b, 0);
    var d5 = t_p.toFixed(2);
    */
    //total1 = pagos.reduce((a, b) => a + b, 0);
    //total2 = intereses.reduce((a, b) => a + b, 0);
    //total3 = amortizaciones.reduce((a, b) => a + b, 0);
    //total4 = saldos.reduce((a, b) => a + b, 0);
    /*
    document.getElementById("t1").innerHTML = n1;
    document.getElementById("t2").innerHTML = d4;
    document.getElementById("t3").innerHTML = d5;
    */
    total1 = totalPagos;
    total2 = totalIntereses;
    total3 = totalAmortizaciones;
    document.getElementById("t1").innerHTML = total1;
    document.getElementById("t2").innerHTML = total2;
    document.getElementById("t3").innerHTML = total3;
    //document.getElementById("t4").innerHTML = total4.toFixed(2);
  } else {
    alert("Ingresa el valor de la vivienda");
  }
}

function borrar_tabla() {
  document.getElementById("tabla-res").innerHTML = "";
  document.getElementById("t1").innerHTML = "";
  document.getElementById("t2").innerHTML = "";
  document.getElementById("t3").innerHTML = "";

  pagos = [];
  intereses = [];
  amortizaciones = [];
  saldos = [];
  tasas = [];
  periodos = [];

  totalPagos = 0;
  totalIntereses = 0;
  totalAmortizaciones = 0;
}
