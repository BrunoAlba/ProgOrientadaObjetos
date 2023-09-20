class Cafetera {
  private capMax: number;
  private capActu: number;

  //Contructor general
  constructor(capMax: number = 1000, capActu: number = 0) {
    this.capMax = capMax;
    this.capActu = capActu > capMax ? capMax : capActu;
  }

  //Metodos pedidos
  llenarCafetera() {
    this.capActu = this.capMax;
  }

  servirTaza(cantidad: number) {
    if (cantidad <= this.capActu) {
      this.capActu -= cantidad;
      console.log(`Se sirvió una taza de ${cantidad} c.c. de café.`);
    } else {
      console.log("No hay suficiente café para llenar la taza.");
      this.capActu = 0;
    }
  }

  vaciarCafetera() {
    this.capActu = 0;
  }

  agregarCafe(cantidad: number) {
    if (this.capActu + cantidad <= this.capMax) {
      this.capActu += cantidad;
      console.log(`Se han agregado ${cantidad} c.c. de café.`);
    } else {
      console.log("La cafetera está llena. No se puede agregar más café.");
    }
  }

  obtenerCantidadActual() {
    console.log (`Cantidad actual ${this.capActu}`);
  }


}

// Crear una cafetera con capacidad máxima de 1000 c.c.
const miCafe = new Cafetera(1000);

console.log ("==========================");
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
console.log ("==========================");


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
