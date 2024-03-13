//Namespace.

const restaurantApp = {};

restaurantApp.platillos = [
  {
    nombre: 'Pizza',
    precio: 25,
  },
  {
    nombre: 'Hot dog',
    precio: 13,
  },
  {
    nombre: 'Hamburguesa',
    precio: 28,
  },
];

restaurantApp.funciones = {
  mostrarMenu: platillos => {
    console.log(`Bienvenidos a nuestro menu.`);
    platillos.forEach((plato, i) => {
      console.log(`${i+1} - ${plato.nombre}`);
    });
  },
  agregarPlatillo: (nombre, precio) =>{
    const nuevo ={
      nombre,
      precio,
    };
    restaurantApp.platillos.push(nuevo)
  },
};


console.log(restaurantApp);
restaurantApp.funciones.agregarPlatillo('Taco', 18);
const { platillos } = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos);

