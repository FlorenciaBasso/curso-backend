//poner tsc en la consola compila el directiorio
export class Suma {
    private a: number;
    private b: number;
    // completar con variables privadas
    constructor(a: number, b: number) {
       // completar el constructor
       this.a = a
       this.b = b
    }
    resultado(): number {
        // completar con la logica
        let resultado = this.a + this.b
        return resultado;
    }
} 