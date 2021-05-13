"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resta = void 0;
//poner tsc en la consola compila el directiorio
var Resta = /** @class */ (function () {
    // completar con variables privadas
    function Resta(a, b) {
        // completar el constructor
        this.a = a;
        this.b = b;
    }
    Resta.prototype.resultado = function () {
        // completar con la logica
        var resultado = this.a - this.b;
        return resultado;
    };
    return Resta;
}());
exports.Resta = Resta;
