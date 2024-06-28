/*
Enunciado del Problema:
Crea una funcion fabrica que genere objetos para manejar cuentas bancarias. Cada cuenta bancaria debe tener
un saldo inicial y debe permitir realizar depositos y retiros. Los metodos para depositar y retirar dinero
deben ser privados, de manera que no puedan ser accedidos directamente desde fuera del objeto.

La funcion fabrica debe retornar un objeto con metodos publicos para consultar el saldo y
realizar transacciones (depositos y retiros).
Nivel de Dificultad: sencillo
A continuacion se presenta la solucion completa con explicaciones.
*/

// Funcion fabrica para crear una cuenta bancaria
function crearCuentaBancaria(saldoInicial){
    //propiedad privada
    var saldo = saldoInicial;
    // Metodo privado para depositar dinero
    function depositar(cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
        } else {
            console.log("La cantidad a depositar debe ser mayor a cero");
        }
    }
    //Metodo privado para retirar dinero
    function retirar (cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
            saldo -= cantidad;
        } else {
            console.log("La cantidad a retirar debe ser mayor a cero y no exceder el saldo disponible");
        }
    }
    //Retornamos un objeto con metodos publicos
    return {
        consultarSaldo: function(){
            return saldo;
        },
        realizarDeposito: function(cantidad) {
            depositar(cantidad);
        },
        realizarRetiro: function(cantidad) {
            retirar(cantidad);
        }
    };
}

//Ejemplo de uso
var miCuenta = crearCuentaBancaria(1000);
console.log("Saldo inicial: "+ miCuenta.consultarSaldo());  // saldo inicial: 1000
miCuenta.realizarDeposito(500);
console.log("Saldo despues del deposito: "+miCuenta.consultarSaldo());  // Saldo despues del deposito: 1500
miCuenta.realizarRetiro(200);
console.log("Saldo despues del retiro: "+miCuenta.consultarSaldo());  // Saldo despues del retiro: 1300
// Intento de acceder a metodos privados (no funcionara)


//A continuacion se presenta un ejemplo de como manejar excepciones en JavaScript utilizando el bloque try...catch
try { //El codigo dentro de try se ejecuta. Si no hay errores, el bloque catch se omite.
    miCuenta.depositar (100); // Error: miCuenta.depositar is not a function
} catch (e) { // el parametro "e"es una referencia al objeto de excepcion que fue lanzado
    console.log(e.message);  // message es la propiedad del objeto e, contiene una string describiendo el error
}
try {
    miCuenta.retirar(100);  // Error: miCuenta.retirar is not a function
} catch (e) {
    console.log(e.message);
}