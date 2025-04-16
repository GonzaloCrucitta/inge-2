// Estados de la barrera
class EstadoBarrera {
    constructor(barrera) {
        this.barrera = barrera;
    }

    subir() {}
    bajar() {}
    getNombre() {
        return "estado genérico";
    }
}

class BarreraLevantada extends EstadoBarrera {
    subir() {
        console.log("La barrera ya está levantada.");
    }

    bajar() {
        console.log("Bajando la barrera...");
        this.barrera.setEstado(new BarreraBaja(this.barrera));
    }

    getNombre() {
        return "levantada";
    }
}

class BarreraBaja extends EstadoBarrera {
    subir() {
        console.log("Subiendo la barrera...");
        this.barrera.setEstado(new BarreraLevantada(this.barrera));
    }

    bajar() {
        console.log("La barrera ya está baja.");
    }

    getNombre() {
        return "baja";
    }
}

// Barrera principal (Contexto)
class Barrera {
    constructor(estadoInicial) {
        // recibe estado como string
        if (estadoInicial === "levantada") {
            this.estado = new BarreraLevantada(this);
        } else {
            this.estado = new BarreraBaja(this);
        }
    }

    setEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    getEstado() {
        return this.estado.getNombre();
    }

    subirBarrera() {
        this.estado.subir();
    }

    bajarBarrera() {
        this.estado.bajar();
    }
}

// Sensor
class Sensor {
    constructor(barrera) {
        this.barrera = barrera;
    }

    detectarTren() {
        this.barrera.bajarBarrera();
    }

    trenSeVa() {
        this.barrera.subirBarrera();
    }
}

// Simulación de eventos (Data Sequence)
function main() {
    let barrera = new Barrera("levantada"); // o "baja" según el escenario
    let sensor = new Sensor(barrera);

    const eventos = [
        { evento: "tren llega" },
        { evento: "tren pasa" },
        { evento: "tren se va" },
    ];

    for (let e of eventos) {
        console.log("\nEvento: " + e.evento);

        if (e.evento === "tren llega") {
            sensor.detectarTren();
        } else if (e.evento === "tren se va") {
            sensor.trenSeVa();
        }

        console.log("Estado actual de la barrera: " + barrera.getEstado());
    }
}

main();
