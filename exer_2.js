const classificarTriangulo = function(lado_1 = 3, lado_2 = 4, lado_3 = 5){

    for(let i in arguments){
        if(typeof arguments[i] != "number" || arguments[i] <= 0){
            return "Valor Inválido";
        }
    }
    
    const escaleno = (lado_1 != lado_2) && (lado_2 != lado_3) && (lado_1 != lado_3);
    const isosceles = ((lado_1 == lado_2) && (lado_2 != lado_3) && (lado_1 != lado_3)) ||
    ((lado_1 == lado_3) && (lado_1 != lado_2) & (lado_3 != lado_2)) || ((lado_2 == lado_3) &&
    (lado_1 != lado_2) && (lado_1 != lado_3));
    const equilatero = (lado_1 == lado_2) && (lado_2 == lado_3) && (lado_1 == lado_3);

    if(escaleno){
        return "Escaleno";
    } else if(isosceles){
        return "Isosceles";
    } else if(equilatero){
        return "Equilatero";
    } else{
        return "Error";
    }
}

console.log(classificarTriangulo());
console.log(classificarTriangulo(2,2,2));