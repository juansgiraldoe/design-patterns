//Singleton.

let instance =  null;

class Persona{
  constructor(nombre, email){
    if (!instance) {
      this.nombre =  nombre;
      this.email =  email;
      instance = this;
    } else {
      return instance;
    }
  };
};

const persona = new Persona('Sebastian', 'correo@correo.com');
console.log(persona);
const persona2 = new Persona('Melissa', 'correo2@correo.com');
console.log(persona2);