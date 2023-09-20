/**
 * Singleton
En este ejercicio, crearás un Logger que represente un registro de acceso a una aplicación.
El Logger tendrá una sola instancia para registrar los accesos.
Generar varias llamadas a accederSistema y mostrarlas en consola de manera centralizada a través del Logger.
 */
var Logger = /** @class */ (function () {
    function Logger() {
        this.log = [];
    }
    Logger.getInstance = function () {
        if (!Logger._instance) {
            Logger._instance = new Logger();
        }
        return Logger._instance;
    };
    Logger.prototype.registrarAcceso = function (usuario) {
        var mensaje = "Acceso de ".concat(usuario, " al sistema");
        this.log.push(mensaje);
    };
    Logger.prototype.mostrarRegistros = function () {
        console.log("Registros de acceso:");
        this.log.forEach(function (registro) {
            console.log(registro);
        });
    };
    Logger._instance = null;
    return Logger;
}());
function accederSistema(usuario) {
    var logger = Logger.getInstance();
    logger.registrarAcceso(usuario);
}
// Ejemplo de uso
var logger = Logger.getInstance();
// Generar llamadas a "accederSistema"
console.log("====================");
accederSistema("Juan");
accederSistema("Maria");
accederSistema("Emilio");
// Mostrar los registros centralizados en el Logger
logger.mostrarRegistros();
