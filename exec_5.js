const arrumar = (value) => {
    return `R$ ${value.toFixed(2).toString().replace(".", ",")}`;
}

console.log(arrumar(24.5045));
console.log(arrumar(24));

console.log(arrumar(245678.43434343434));