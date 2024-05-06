// Read-me -> Functions to create sets that will serve as filter options for the user in search page

const uniqueOptionsFromApplications = (dados, chave) => {
    const uniqueOption = new Set();

    dados.forEach(item => {
        if (item.data.aplicacoes) {
            item.data.aplicacoes.forEach(aplicacao => {
                if (aplicacao[chave]) {
                    uniqueOption.add(aplicacao[chave]);
                }
            });
        }
    });

    return Array.from(uniqueOption);
};


const uniqueOptionsFromProduct = (dados, chave) => {
    const opcoesUnicas = new Set();

    dados.forEach(item => {
        if (item.data && item.data[chave]) {
            opcoesUnicas.add(item.data[chave]);
        }
    });

    return Array.from(opcoesUnicas);
};

const extractUniqueFamilies = (productsArray) => {
    const uniqueFamilies = new Set();

    productsArray.forEach(item => {
        if (item.data && item.data.familia && item.data.familia.descricao) {
            uniqueFamilies.add(item.data.familia.descricao);
        }
    });

    return Array.from(uniqueFamilies);
};



export { uniqueOptionsFromApplications, uniqueOptionsFromProduct, extractUniqueFamilies }