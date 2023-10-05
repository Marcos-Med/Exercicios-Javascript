const jurosSimples = (capital_init, taxa_de_juros, tempo) => {
    let montante = 0;
    montante = capital_init + (capital_init * taxa_de_juros * tempo);
    return montante;
}

const jurosComposto = (capital_init, taxa_de_juros, tempo) => {
    let montante = 0;
    montante = capital_init * Math.pow(1 - taxa_de_juros, tempo);
    return montante;
}

