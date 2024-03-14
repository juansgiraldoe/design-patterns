//Mediator.

function Vendedor(nombre) {
  this.nombre = nombre;
  this.sala = null;
};

Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(`Tenemos el articulo ${articulo} e iniciamos con un precio de ${precio}`);
  },
  vendido: comprador => {
    console.log(`Vendido a ${comprador}`);
  },
};

function Comprador(nombre) {
  this.nombre = nombre;
  this.sala = null;
};

Comprador.prototype = {
  oferta: (cantidad, comprador) => {
    console.log(`${comprador.nombre}: ${cantidad}`);
  }
}

function Subasta() {
  let compradores = {};
  return {
    registrar: usuario => {
      compradores[usuario.nombre] = usuario;
      usuario.sala = this;
    },
  }
};

//Crear objetos.

const juan = new Comprador('Juan');
const sebastian = new Comprador('Sebastian');

const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

subasta.registrar(juan);
subasta.registrar(sebastian);
subasta.registrar(vendedor);

vendedor.oferta('Ford Mustang', 1000);
juan.oferta(1100, juan)
juan.oferta(1200, sebastian)
juan.oferta(1300, juan)
juan.oferta(1600, sebastian)
vendedor.vendido('Sebastian');