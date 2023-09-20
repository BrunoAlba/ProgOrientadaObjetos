/**
 * Singleton
En este ejercicio, crearás un Logger que represente un registro de acceso a una aplicación. 
El Logger tendrá una sola instancia para registrar los accesos.
Generar varias llamadas a accederSistema y mostrarlas en consola de manera centralizada a través del Logger.
 */

class Logger {
  private static _instance: Logger | null = null;
  private log: string[] = [];

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger._instance) {
      Logger._instance = new Logger();
    }
    return Logger._instance;
  }

  public registrarAcceso(usuario: string): void {
    const mensaje = `Acceso de ${usuario} al sistema`;
    this.log.push(mensaje);
  }

  public mostrarRegistros(): void {
    console.log("Registros de acceso:");
    this.log.forEach((registro) => {
      console.log(registro);
    });
  }
}

/** */
function accederSistema(usuario: string): void {
  const logger = Logger.getInstance();
  logger.registrarAcceso(usuario);
}

const logger = Logger.getInstance();

// Generar llamadas a "accederSistema"
console.log ("====================")
accederSistema("Juan");
accederSistema("Maria");
accederSistema("Emilio");


// Mostrar los registros centralizados en el Logger
logger.mostrarRegistros(); 
