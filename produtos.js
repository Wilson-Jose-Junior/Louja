class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    exibirDetalhes() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Categoria: ${this.categoria}`);
    }
}

module.exports = Produto



