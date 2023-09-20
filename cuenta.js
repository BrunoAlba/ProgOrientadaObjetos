var Cuenta = /** @class */ (function () {
    function Cuenta(titular, saldo) {
        if (saldo === void 0) { saldo = 0.0; }
        this.titular = titular;
        this.saldo = saldo;
    }
    Cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.mostrar = function () {
        console.log("Titular: ".concat(this.titular));
        console.log("Saldo: $".concat(this.saldo.toFixed(2)));
    };
    Cuenta.prototype.depositar = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
        }
    };
    Cuenta.prototype.retirar = function (monto) {
        this.saldo -= monto;
    };
    return Cuenta;
}());
// Ejemplo de uso
var cliente1 = new Cuenta("Juan Perez", 1000.0);
cliente1.mostrar();
cliente1.retirar(500.0);
cliente1.mostrar();
cliente1.depositar(750.0);
cliente1.mostrar();
