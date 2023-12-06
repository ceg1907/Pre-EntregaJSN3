const Articulos = function (id,nombre, precio, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const articulo1 = new Articulos ("0", "PROCESADOR AMD RYZEN 3 3200G", "$93.600", 15);
const articulo2 = new Articulos ("1", "TARJETA GRAFICA GEFORCE RTX 4090", "$2.090.000", 10);
const articulo3 = new Articulos ("2", "TARJETA GRAFICA GEFORCE RTX 3060", "$350.370", 7);
const articulo4 = new Articulos ("3", "SILLA GAMER CORSAIR T3", "$266.084", 12);
const articulo5 = new Articulos ("4", "SILLA GAMER AUREOX G600", "$179.000", 16);


let listaArticulos = [articulo1, articulo2, articulo3, articulo4, articulo5]

const body = document.querySelector ("body");

const Carrito = function (nombre, precio){
    this.nombre = nombre;
    // this.cantidad = parseInt(cantidad);
    this.precio = precio;
}
let CarritoArmado = [];

if(localStorage.getItem("articulos")){
    CarritoArmado = JSON.parse(localStorage.getItem("articulos"))
}else{
    CarritoArmado = CarritoArmado
}


function buscarProductos(){
    const input = document.getElementById ("buscador").value;
    let palabraIngresada = input.toUpperCase().trim();
    let resultadoBusqueda = listaArticulos.filter (   (revisa)=>revisa.nombre.toUpperCase().includes(palabraIngresada)   );
    
    if(resultadoBusqueda.length > 0){

        const box = document.createElement("div");


        resultadoBusqueda.forEach ( (articulo) =>{
            const boxElement =document.createElement ("div");

            let nombre = document.createElement ("h2");
            nombre.textContent = articulo.nombre
            boxElement.appendChild(nombre)

            let id =document.createElement ("p")
            id.textContent = `El ID del producto es: ${articulo.id}`
            boxElement.appendChild(id)

            let precio = document.createElement ("p");
            precio.textContent = `Precio: ${articulo.precio}`
            boxElement.appendChild(precio)

            let btnCarrito = document.createElement ("button")
            btnCarrito.classList.add("btn-carrito")
            btnCarrito.textContent = "agregar"
            boxElement.appendChild (btnCarrito)
            btnCarrito.addEventListener ("click", ()=> {
                articuloEnCarrito = new Carrito (nombre.textContent, precio.textContent);
                CarritoArmado.push (articuloEnCarrito)
                alert ("el articulo fue agregado")
                localStorage.setItem ("articulos", JSON.stringify(CarritoArmado))
            })
            
            box.appendChild(boxElement)
        });
        body.appendChild(box)
    }
    else{
        alert(`No se encontro el articulo ${palabraIngresada}`);
    }
}





function mostrarCarrito(){
    let container = document.createElement ("div")

    if (CarritoArmado.length > 0){
        

        boxC = document.createElement ("div")

        CarritoArmado.forEach( (x)=>{
            boxElementC = document.createElement ("div")
    
            let nombre = document.createElement ("h2");
            nombre.textContent = x.nombre
            boxElementC.appendChild(nombre)
    
            let precio = document.createElement ("p");
            precio.textContent = x.precio
            boxElementC.appendChild(precio)
    
            boxC.appendChild (boxElementC)
        })
    
        body.appendChild(boxC)
    }else{
        alerta = document.createElement ("p")
        alerta.textContent = "El carrito esta vacio"
        container.appendChild (alerta)
    }
    body.appendChild (container)
}


const btnBuscar = document.getElementById("Btn-buscar");
btnBuscar.addEventListener ("click", ()=> {buscarProductos()});

const btnMostrar = document.getElementById ("Btn-mostrar");
btnMostrar.addEventListener ("click", ()=> {mostrarCarrito()} );