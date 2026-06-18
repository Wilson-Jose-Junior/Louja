const Cliente = require("./cliente");
const Produto = require("./produto");
const Loja = require("./loja");




const loja = new Loja("Tech Store");

loja.adicionarProduto(produto1);
loja.adicionarProduto(produto2);
loja.adicionarProduto(produto3);

console.log("=== CLIENTES ===");
cliente1.exibirInfo();
cliente2.exibirInfo();

console.log("=== COMPRAS ===");
cliente1.comprarProduto(produto1);
cliente2.comprarProduto(produto3);

console.log("\n=== PRODUTOS CADASTRADOS ===");
loja.listarProdutos();