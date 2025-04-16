// Estados
class EstadoBarrera {
    constructor(barrera) {
        this.barrera = barrera;
    }
    bajar() {}
    subir() {}
}

class BarreraLevantada extends EstadoBarrera {
    bajar() {
        console.log("Bajando barrera desde estado levantado.");
        this.barrera.setEstado(new BarreraBaja(this.barrera));
        this.barrera.estadoBarrera = "baja";
    }
    subir() {
        console.log("La barrera ya está levantada. No se hace nada.");
    }
}

class BarreraBaja extends EstadoBarrera {
    bajar() {
        console.log("La barrera ya está baja. No se hace nada.");
    }
    subir() {
        console.log("Subiendo barrera desde estado bajo.");
        this.barrera.setEstado(new BarreraLevantada(this.barrera));
        this.barrera.estadoBarrera = "levantada";
    }
}

// Clase Barrera
class Barrera {
    constructor() {
        this.estado = new BarreraLevantada(this);
        this.estadoBarrera = "levantada";
    }
    setEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
    bajar() {
        this.estado.bajar();
    }
    subir() {
        this.estado.subir();
    }
    getEstado() {
        return this.estadoBarrera;
    }
}

// Sistema de Control
class SistemaDeControl {
    constructor(barrera) {
        this.barrera = barrera;
    }

    sensorActivado() {
        this.bajarCuandoBAlta();
    }

    sensorDesactivado() {
        this.subirCuandoBBaja();
    }

    bajarCuandoBAlta() {
        this.barrera.bajar();
    }

    subirCuandoBBaja() {
        this.barrera.subir();
    }
}

// Sensor
class Sensor {
    constructor(sistemaDeControl) {
        this.sistema = sistemaDeControl;
    }

    activar() {
        console.log("\nSensor activado.");
        this.sistema.sensorActivado();
    }

    desactivar() {
        console.log("\nSensor desactivado.");
        this.sistema.sensorDesactivado();
    }
}

// Simulación
function main() {
    const barrera = new Barrera();
    const sistema = new SistemaDeControl(barrera);
    const sensor = new Sensor(sistema);

    console.log("Estado inicial de la barrera: " + barrera.getEstado());

    sensor.activar();
    console.log("Estado actual de la barrera: " + barrera.getEstado());

    sensor.desactivar();
    console.log("Estado final de la barrera: " + barrera.getEstado());
}

main();
