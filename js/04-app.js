//Factory.
//Creacion basadas en condiciones.

class inputHtml{
  constructor(type, nombre){
    this.type = type;
    this.nombre = nombre;
  };

  crearInput(){
    return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}"></input>`
  };
};

class HTMLFactory{
  crearElemento(tipo, nombre){
    switch (tipo) {
      case 'text':
        return new inputHtml(tipo, nombre);
      case 'tel':
        return new inputHtml(tipo, nombre);
      case 'email':
        return new inputHtml(tipo, nombre);

      default:
        return;
    };
  };
};

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento(`text`, `nombre-cliente`);
console.log(inputText.crearInput());

const elemento2 = new HTMLFactory();
const inputText2 = elemento2.crearElemento(`tel`, `telefono-cliente`);
console.log(inputText2.crearInput());

const elemento3 = new HTMLFactory();
const inputText3 = elemento3.crearElemento(`email`, `email-cliente`);
console.log(inputText3.crearInput());
