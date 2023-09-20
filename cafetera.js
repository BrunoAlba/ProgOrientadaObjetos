var Cafetera = /** @class */ (function () {
    //Contructor general
    function Cafetera(capMax, capActu) {
        if (capMax === void 0) { capMax = 1000; }
        if (capActu === void 0) { capActu = 0; }
        this.capMax = capMax;
        this.capActu = capActu > capMax ? capMax : capActu;
    }
    //Metodos pedidos
    Cafetera.prototype.llenarCafetera = function () {
        this.capActu = this.capMax;
    };
    Cafetera.prototype.servirTaza = function (cantidad) {
        if (cantidad <= this.capActu) {
            this.capActu -= cantidad;
            console.log("Se sirvi\u00F3 una taza de ".concat(cantidad, " c.c. de caf\u00E9."));
        }
        else {
            console.log("No hay suficiente café para llenar la taza.");
            this.capActu = 0;
        }
    };
    Cafetera.prototype.vaciarCafetera = function () {
        this.capActu = 0;
    };
    Cafetera.prototype.agregarCafe = function (cantidad) {
        if (this.capActu + cantidad <= this.capMax) {
            this.capActu += cantidad;
            console.log("Se han agregado ".concat(cantidad, " c.c. de caf\u00E9."));
        }
        else {
            console.log("La cafetera está llena. No se puede agregar más café.");
        }
    };
    Cafetera.prototype.obtenerCantidadActual = function () {
        console.log("Cantidad actual ".concat(this.capActu));
    };
    return Cafetera;
}());
// Crear una cafetera con capacidad máxima de 1000 c.c.
var miCafe = new Cafetera(1000);
console.log("==========================");
//Ver cantidad de café
miCafe.obtenerCantidadActual();
// Agregar café a la cafetera
miCafe.agregarCafe(750);
//
miCafe.obtenerCantidadActual();
// Llenar la cafetera
miCafe.llenarCafetera();
// Servir una taza de 200 c.c.
miCafe.servirTaza(200);
//
miCafe.obtenerCantidadActual();
// Vaciar la cafetera
miCafe.vaciarCafetera();
//
miCafe.obtenerCantidadActual();
console.log("==========================");
/*class café {
    private p1: number = 1000;
    private p2: number = 0;
    
    constructor(p1: number);
    constructor(p1: number, p2?: number) {
        this.p1 = p1;

        if (p2) {
            this.p2 = p2;
        }
    }
}

const maximo = new café(1000);
const actual = new café(1000, 0);
*/
