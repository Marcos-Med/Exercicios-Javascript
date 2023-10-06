const analiseJogos = (string_pontuacao) => {
    const hist_pontos = string_pontuacao.split(" ");
    for(let i in hist_pontos){
        hist_pontos[i] = parseInt(hist_pontos[i]);
    }
    let piorPonto = hist_pontos[0];
    let jogoRuim = 0;
    let melhorPonto = hist_pontos[0];
    let record = 0;
    for(let i in hist_pontos){
        if(melhorPonto < hist_pontos[i]){
            melhorPonto = hist_pontos[i];
            record++;
        }
        else if(piorPonto >= hist_pontos[i]){
            piorPonto = hist_pontos[i];
            jogoRuim = i;
        }
    }

    jogoRuim++;

    return [record, jogoRuim];
}

console.log(analiseJogos("10 20 20 8 25 3 0 30 1"));
console.log(analiseJogos("10 20 20 8 25 3 5 30 45"));