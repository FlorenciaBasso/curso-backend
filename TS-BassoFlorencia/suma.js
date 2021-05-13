"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suma = void 0;
//poner tsc en la consola compila el directiorio
var Suma = /** @class */ (function () {
    // completar con variables privadas
    function Suma(a, b) {
        // completar el constructor
        this.a = a;
        this.b = b;
    }
    Suma.prototype.resultado = function () {
        // completar con la logica
        var resultado = this.a + this.b;
        return resultado;
    };
    return Suma;
}());
exports.Suma = Suma;
