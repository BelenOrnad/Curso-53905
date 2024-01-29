//Es un e-commerce de ropa e indumentaria

let nombre = prompt ("Ingresar un nombre");

console.log ("Hola" , nombre, ", que tipo de ropa le gustaria comprar?");

let ropa = prompt ("Ingresar algun articulo");

if (ropa == "remeras"){
    console.log ("Remera blanca $7.000");
    console.log ("Remera negra $5.800");
    console.log ("Remera azul $4.000");

    let opUno = prompt ("Elegí una opcion")
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
    

}else if (ropa == "shorts"){
    console.log ("Short Jean $6.700")
    console.log ("Short negro $10.000")
    console.log ("Short militar $7.000")
    
    let opUno = prompt ("Elegí una opcion")
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
    
}else if (ropa == "vestido"){
    console.log ("Vestido floreado $2.500")
    console.log ("Vestido celeste $4.400")
    console.log ("Vestido rosa $9.000")

    let opUno = prompt ("Elegí una opcion")
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


}else{
    console.log ("No hay stock")
}
