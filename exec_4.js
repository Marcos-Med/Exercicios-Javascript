const imprimirDivisao = (a = 0, b = 0) => {
    console.log(`${a} / ${b} = ${a/b}`);
    console.log(`RESTO = ${a % b}`);
}

imprimirDivisao(2, 3);
imprimirDivisao();
imprimirDivisao(3,3);
imprimirDivisao(4,3);