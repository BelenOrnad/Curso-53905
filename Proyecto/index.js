//Es un e-commerce de ropa e indumentaria
let productos = ["remeras", "vestidos", "shorts", "campera", "aros"]

let nombre = prompt ("Ingresar un nombre");

console.log ("Hola" , nombre, ", que tipo de ropa le gustaria comprar?");
console.log (productos[0])
console.log (productos[1])
console.log (productos[2])
console.log (productos[3])
console.log (productos[4])

let ropa = prompt ("Ingresar algun articulo");

if (ropa == productos[0]){
    let rem = [
        {
            articulo: "remera",
            color: "blanco",
            precio: 7000
        },
        {
            articulo: "remera",
            color: "negro",
            precio: 5800
        },
        {
            articulo: "remera",
            color: "azul",
            precio: 4000
        }
    ]
    console.log (rem [0]);
    console.log (rem [1]);
    console.log (rem [2]);

    let opUno = prompt ("Elegí una opcion (introducir articulo y color)")
    if (opUno = "remera blanca" ){
        let opcionUno = 7000;

        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else if (opUno = "remera negra" ){
        const opcionUno = 5800;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else  if (opUno = "remera azul" ){
        let opcionUno = 4000;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else{
        alert("opcion no disponible")
    }
    

}else if (ropa == productos[1]){
    let short = [
        {
            articulo: "short",
            color: "jean",
            precio: 6700
        },
        {
            articulo: "short",
            color: "negro",
            precio: 10000
        },
        {
            articulo: "short",
            color: "militar",
            precio: 7000
        }
    ]
    console.log (short [0]);
    console.log (short [1]);
    console.log (short [2]);
    
    let opUno = prompt ("Elegí una opcion (introducir articulo y color)")
    if (opUno = "short jean" ){
        let opcionUno = 6700;

        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else if (opUno = "short negro" ){
        const opcionUno = 10000;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else  if (opUno = "short militar" ){
        let opcionUno = 7000;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else{
        alert("opcion no disponible")
    }
    
}else if (ropa == productos[2]){
    let vest = [
        {
            articulo: "vestido",
            color: "floreado",
            precio: 2500
        },
        {
            articulo: "vestido",
            color: "celeste",
            precio: 44000
        },
        {
            articulo: "vestido",
            color: "rosa",
            precio: 9000
        }
    ]
    console.log (vest [0]);
    console.log (vest [1]);
    console.log (vest[2]); 

    let opUno = prompt ("Elegí una opcion (introducir articulo y color)")
    if (opUno = "vestido floreado" ){
        let opcionUno = 2500;

        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else if (opUno = "vestido celeste" ){
        const opcionUno = 4400;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else  if (opUno = "vestido rosa" ){
        let opcionUno = 9000;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else{
        alert("opcion no disponible")
    }


}else if (ropa == productos[3]){
    let camp = [
        {
            articulo: "campera",
            color: "negra",
            precio: 9700
        },
        {
            articulo: "campera",
            color: "azul",
            precio: 7400
        },
        {
            articulo: "campera",
            color: "gris",
            precio: 9500
        }
    ]
    console.log (camp [0]);
    console.log (camp [1]);
    console.log (camp[2]); 

    let opUno = prompt ("Elegí una opcion (introducir articulo y color)")
    if (opUno = "campera negra" ){
        let opcionUno = 9700;

        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else if (opUno = "campera azul" ){
        const opcionUno = 7400;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else  if (opUno = "campera gris" ){
        let opcionUno = 9500;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else{
        alert("opcion no disponible")
    }

} else if (ropa == productos[4]){
    let aro = [
        {
            articulo: "aros",
            color: "plateados",
            precio: 2700
        },
        {
            articulo: "aros",
            color: "dorados",
            precio: 3200
        },
        {
            articulo: "aros",
            color: "rosas",
            precio: 1500
        }
    ]
    console.log (aro [0]);
    console.log (aro [1]);
    console.log (aro[2]); 

    let opUno = prompt ("Elegí una opcion (introducir articulo y color)")
    if (opUno = "aros plateados" ){
        let opcionUno = 2700;

        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else if (opUno = "aros dorados" ){
        const opcionUno = 3200;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else  if (opUno = "aros rosas" ){
        let opcionUno = 1500;
        let cantUno = prompt ("Cuantos?")
    parseFloat (cantUno)

    let tot = (opcionUno * cantUno)

    let pago = prompt ("Va a pagar con efectivo o tarjeta?");

if (pago == "tarjeta"){
    console.log ("Tiene un 10% de recargo")
    console.log ("Su total a pagar es $", tot + (tot * (10 / 100)))
}else{
    console.log ("No tiene ningun recargo")
    console.log ("Su total a pagar es $", tot)
}

    }else{
        alert("opcion no disponible")
    }

}else{
    console.log ("No hay stock")
}