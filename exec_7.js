const bhaskara = (a, b, c) => {
    let delta = 0;
    delta = Math.pow(b, 2) - (4 * a * c);
    if(delta < 0){
        return "Delta é negativo";
    }
    else{
        let vetor = [];
        vetor.push((-b + Math.sqrt(delta)) / (2 * a));
        vetor.push((-b - Math.sqrt(delta)) / (2 * a));
        return vetor;
    }
}

console.log(bhaskara(1, 0, -4));
console.log(bhaskara(1,1,1));
console.log(bhaskara(1,3,-4));
