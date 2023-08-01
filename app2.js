class Producto {
  constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  descripcion() {
    return (
      "Id:" + this.id + "\nNombre:" + this.nombre + "\nPrecio:" + this.precio 
    );
  }

  descripcionDeCompra() {
    return (
      "\nNombre:" +
      this.nombre +
      "\nPrecio:" +
      this.precio +
      "\nCantidad:" +
      this.cantidad 
    );
  }
}

class ProductoController {
  constructor() {
    this.listaProductos = [];
  }

  agregar(producto) {
    this.listaProductos.push(producto);
  }

  buscarProductoPorID(id) {
    return this.listaProductos.find((producto) => producto.id == id);
  }

  mostrarProductos() {
    let listaEnTexto = "";
    this.listaProductos.forEach((producto) => {
      listaEnTexto = listaEnTexto + producto.descripcion() + "\n-------------\n";
   
    });
    alert(listaEnTexto);
  }
}

class Carrito {
  constructor() {
    this.listaCarrito = [];
  }

  agregar(producto) {
    this.listaCarrito.push(producto);
  }

  mostrarProductos() {
    let listaEnTexto = "";
    this.listaCarrito.forEach((producto) => {
      listaEnTexto = listaEnTexto + producto.descripcion() + "\n----------\n";

    });
    alert(listaEnTexto);
  }

  total() {
    return this.listaCarrito.reduce(
      (acumulador, producto) =>
        acumulador + producto.precio * producto.cantidad,
      0
    );
  }
}

const CP = new ProductoController();
const CARRITO = new Carrito();

CP.agregar(new Producto(1, "Galaxy A53", 25999, 1));
CP.agregar(new Producto(2, "Galaxy S20", 45999, 2));
CP.agregar(new Producto(3, "Galaxy S21", 65999, 3));
CP.agregar(new Producto(4, "Galaxy A32", 20999, 4));

let rta;

do {
  CP.mostrarProductos();
  let opcion = Number(
    prompt("Ingrese el código del producto que desea agregar")
  );
  let producto = CP.buscarProductoPorID(opcion);
  let cantidad = Number(prompt("Ingrese la cantidad del producto que desee"));
  producto.cantidad = cantidad;
  CARRITO.agregar(producto);
  console.log("Producto añadido con éxito:");
  CARRITO.mostrarProductos();

  rta = prompt("Ingrese 'ESC' para finalizar").toUpperCase();
} while (rta != "ESC");

console.log("El total de su compra es de : " + CARRITO.total());
