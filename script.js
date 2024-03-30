//defino variables de tipo de cambio
let tipoCambioDolar = 16.55;
let tipoCambioEuro = 17.92;
let tipoCambioBitoin = 1165522.23;
let resultadoCambio = 0;

//pido el nombre del usuario
let nombreUser = prompt("Hola, Indicame tu nombre, por favor:  ");

//obtengo la moneda a cambiar
var seleccion = document.getElementById("moneda");
seleccion.addEventListener("change", function () {
  var selectedOption = this.options[seleccion.selectedIndex];
  if (selectedOption.index == 1) {
    resultadoFinal = hacerConversion(tipoCambioDolar);

    alert(
      nombreUser + " La conversión de Dolares a Pesos es $ " + resultadoFinal
    );
  } else if (selectedOption.index == 2) {
    resultadoFinal = hacerConversion(tipoCambioEuro);

    alert(
      nombreUser + " La conversión de Euros a Pesos es $ " + resultadoFinal
    );
  } else if (selectedOption.index == 3) {
    resultadoFinal = hacerConversion(tipoCambioBitoin);

    alert(
      nombreUser + " La conversión de Bitcoin a Pesos es " + resultadoFinal
    );
  }
});

function hacerConversion(tipoDeCambio) {
  let montoACambiar = parseFloat(document.getElementById("monto").value);
  montoACambiar = montoACambiar.toFixed(2);
  resultadoCambio = tipoDeCambio * montoACambiar;
  resultadoCambio = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MNX"
  }).format(resultadoCambio);

  return resultadoCambio;
}