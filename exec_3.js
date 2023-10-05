const power = (base = 1, expoente = 0) => {
    let resul = 1;
    for(let i = 0; i < expoente; i++){
        resul *= base;
    }

    return resul;
}

 console.log(power(2,2));
 console.log(power(2,4));
 console.log(power());