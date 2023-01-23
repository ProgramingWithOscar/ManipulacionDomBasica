

//objetos
/*let miAuto ={
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}*/
//Funcion constructora
/*function auto(marca, modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


let numAutos = parseInt(prompt("Ingrese el numero de autos a registrar"));
do{
     marca = prompt("Ingrese la marca del carro");
     modelo = prompt("Ingrese el modelo del carro");
     annio = parseInt(prompt("Ingrese el año del carro"));
    let autoNuevo = new auto(`${marca}`, `${modelo}`, `${annio}`);
    console.log(autoNuevo);
    numAutos--;
}while(numAutos > 0);*/

//metodos de recorridos de arrays con objetos

/*let articulos=[
    {nombre: "Bici", costo: 2000},
    {nombre: "Libro", costo: 230},
    {nombre: "Lapto", costo: 12000},
    {nombre: "Celular", costo: 9000},
    {nombre: "Tv", costo: 2000},
    {nombre: "Teclado", costo: 2000},
    {nombre: "Audifonos", costo: 1500},

];

//filter() = valida si algo es verdad o falso, filtra la informacion con una funcion
let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo >=1000;
});
console.log(articulosFiltrados);

//map() = ayuda a mapear informacion,por ejemplo solo los nombres de los articulos generar nuevo array
let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
console.log(nombreArticulos);

//find() = nos ayuda a encontrar algo dentro del producto, valida si existe el articulo
let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Libro";
})
console.log(encuentraArticulo);

//forEach() = filtra la informacion que le pidamos, la extrae del array que ya tenemos

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

//some() = nos regresa una validacion de true or false, si existe lo que queremos validar regresa un true sino un false, se genera nuevo array

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 50;
});
console.log(articulosBaratos);

//push() = nosm permite agregar elementos al final de un array

function imprimirPrimerElemento(arr){
    console.log(arr[0]);
}
imprimirPrimerElemento(['Oscar','Mateo']);

function imprimirUnoPorUno(arra){
    for(let i = 0; i < arra.length; i++){
        console.log(arra[i]);
    }
}

imprimirUnoPorUno(['Oscar','Camila','Fabian']);

function printObjects(obj){
    // convierte objetos en un array, es decir, los valores del array
    const arr = Object.values(obj);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printObjects({nombre: 'Oscar',apellido: 'Poveda'});*/

const h1 = document.getElementById("#title");

h1.innerHTML = 'Patito';