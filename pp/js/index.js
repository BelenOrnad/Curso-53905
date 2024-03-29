const productos = [
    {id:1, nombre:"Remera Negra", precio:7000, img: "./imagenes/remera negra.jpg"},
    {id:2, nombre:"Remera Blanca", precio:5500, img: "./imagenes/rblanca.jpg" },
    {id:3, nombre:"Remera Azul", precio:4000, img: ""},
    {id:4, nombre:"Short Negro", precio:200, img: ""},
    {id:5, nombre:"Short Jean", precio:100, img: "" },
    {id:6, nombre:"Short Militar", precio:140, img: ""},
    {id:7, nombre:"Vestido Negro", precio:200, img: ""},
    {id:8, nombre:"Vestido Azul", precio:100, img: "" },
    {id:9, nombre:"Vestido Rosa", precio:140, img: ""},
]


const elementosCarrito = [];
const contenedorProductos = document.getElementById('productos');
const contenedorElementosCarrito = document.getElementById('elementos-carrito');
const totalSpan = document.getElementById('total');

function renderizarProductos(){
    productos.forEach(producto =>{
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
                <button class="btn-agregar-carrito" data-id="${producto.id}">agregar carrito</button> 
                `;
        contenedorProductos.appendChild(div);
    })
}

function agregarAlCarrito(idProducto){
    const itemExistente = elementosCarrito.find(item => item.id === idProducto);
    if(itemExistente){
        itemExistente.cantidad++
    }else{
        const producto = productos.find(p => p.id === idProducto);
        if(producto){
            elementosCarrito.push({...producto, cantidad:1});

        }
    }
    renderizarCarrito();
}



function eliminarDelCarrito(idProducto){
    const indice = elementosCarrito.findIndex(item => item.id === idProducto);
    if(indice !== -1){
        elementosCarrito.splice(indice, 1);
        renderizarCarrito();
    }
}

function renderizarCarrito() {
    contenedorElementosCarrito.innerHTML = '';
    let precioTotal = 0;
    elementosCarrito.forEach(item =>{
            const li = document.createElement('li');
            li.textContent = `${item.nombre} x ${item.cantidad}  - $${item.precio * item.cantidad};`
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'eliminar';
            btnEliminar.addEventListener('click', () => eliminarDelCarrito(item.id))
            li.appendChild(btnEliminar);
            contenedorElementosCarrito.appendChild(li);
            precioTotal += item.precio * item.cantidad;

            
    })
    totalSpan.textContent = precioTotal;
}
;

function realizarCompra(){
    alert(`compra finalizada $${totalSpan.textContent}`);
    elementosCarrito.length = 0;
    renderizarCarrito();
}

document.getElementById('btn-comprar').addEventListener('click',realizarCompra);

contenedorProductos.addEventListener('click',function(evento){
    if(evento.target.classList.contains('btn-agregar-carrito')){
            const idProducto = parseInt(evento.target.getAttribute('data-id'));
            agregarAlCarrito(idProducto);
        }
        });

renderizarProductos();

