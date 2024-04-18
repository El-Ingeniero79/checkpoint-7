function operacion(num1, num2, num3, num4){
    suma1 = num1 + num2;
    suma2 = num3 + num4;
    resultado = suma1 * suma2; 
    if (resultado > 50){
        console.log("¡El número es mayor que 50!");
    }  
    else if (resultado < 50){
            console.log ("¡El número es menor que 50!")
    }
    else {
        console.log("no hay accion para el resultado 50")
    }
    
}


operacion(1, 2, 3, 4);

