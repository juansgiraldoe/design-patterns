//Mixins.
//Agregar funciones a clases ya creadas.

class Persona{
  constructor(nombre, email){
    this.nombre = nombre;
    this.email = email;
  };
};

const funcionesPersona = {
  mostrarInfo(){
    console.log(`Nombre persona: ${this.nombre} y el email es: ${this.email}`);
  },
};

//Añadir funcionesPersona  a la clase de Persona.
Object.assign(Persona.prototype, funcionesPersona)

const cliente = new Persona('Juan', 'correo@correo.com');
console.log(cliente);
cliente.mostrarInfo();