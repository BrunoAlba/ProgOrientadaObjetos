class Cuenta {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number = 0.0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    getTitular(): string {
        return this.titular;
    }

    getSaldo(): number {
        return this.saldo;
    }

    mostrar(): void {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: $${this.saldo.toFixed(2)}`);
    }

    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
        }
    }

    retirar(monto: number): void {
        this.saldo -= monto;
    }
}

// Ejemplo de uso
const cliente1 = new Cuenta ("Juan Perez", 1000.0);
cliente1.mostrar(); 
cliente1.retirar(500.0);
cliente1.mostrar(); 
cliente1.depositar(750.0);
cliente1.mostrar();