const produtos = require("./produtos")


class Loja{
    constructor(nome){
       this.nome = nome
       this.produtos = []
    }
    adicionarProdutos(produto){
        this.produtos.push(produto)
        console.log(`produto adicionado`)
    } 

}
console.log(adicionarProdutos())