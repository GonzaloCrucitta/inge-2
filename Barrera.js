/* 
Escenario 0:  Representar como funciona la barrera que corta el paso vehicular en un cruce.
Tenemos el tren , una calle que es mano unica y tenemos una barrera que puede estar levantada
o bajada. Cuando termina de pasar el tren, debería levantarse la barrera

Escenario 1: Por algún error la barrera quedó baja. (No hay que modelar esto, simplemente 
tener el estado inicial asi). El tren llega, se detecta su presencia pero como la barrera ya 
esta  baja no tiene que volver a bajar y cuando el tren se retira, la barrera se levanta y 
vuelve a su estado estable.

Escenario 2: El modelo arranca con el tren en el cruce pero la barrera no bajo. Entonces el 
tren se retira pero como la barrera estaba alta no tiene que volver a bajar.  (No bajar una
barrera que esta baja y no levantar una que ya esta alta)

*/

class Barrera {
    constructor(estado){
        this.estadoBarrera = estado;
    }
    getEstado(){
        return this.estadoBarrera;
    }
    subirBarrera(){
        if(this.estadoBarrera !== "levantada") {
            console.log("Subiendo la barrera...");
            this.estadoBarrera = "levantada";
        }
    }
    bajarBarrera(){
        if(this.estadoBarrera !== "baja") {
            console.log("Bajando la barrera...");
            this.estadoBarrera = "baja";
        }
    }
}

class Sensor {
    constructor(barrera){
        this.barrera = barrera
    }
    activar(){
        this.barrera.bajarBarrera();
    }
    desactivar(){
        this.barrera.subirBarrera();
    }
}

function main(){

    // Caso 0:
    console.log('\nCaso 0:\n'); 

    barrera = new Barrera("levantada");
    sensor = new Sensor(barrera)

    console.log("El tren esta por pasar. La barrera esta: " + barrera.getEstado());
    sensor.activar() ;

    console.log("El tren esta pasando. La barrera esta: " +barrera.getEstado());
    
    sensor.desactivar()
    
    console.log("El tren termino de pasar. La barrera esta: "+barrera.getEstado())

    // Caso 1:
    console.log('\nCaso 1:\n'); 

    barrera = new Barrera("baja");  // la barrera ya está baja por error
    sensor = new Sensor(barrera)

    console.log("El tren está por pasar. La barrera está: " + barrera.getEstado());
    
    sensor.activar();

    console.log("El tren está pasando. La barrera está: " + barrera.getEstado());

    sensor.desactivar(); 

    console.log("El tren terminó de pasar. La barrera está: " + barrera.getEstado());

    // Caso 2: 
    console.log('\nCaso 2:\n'); 

    barrera = new Barrera("levantada"); // tren ya en el cruce, pero barrera NO bajó
    sensor = new Sensor(barrera);

    console.log("El tren ya está en el cruce. La barrera está: " + barrera.getEstado());

    sensor.desactivar();

    console.log("La barrera está ahora: " + barrera.getEstado());

}
main()
