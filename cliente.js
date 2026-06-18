    const prompt = require('prompt-sync')()

const Clientes = []

function infClientes() {
    let nome = prompt("Digite seu nome: ");
    let idade = parseInt(prompt("Digite sua idade: "));
    let email = prompt("Digite seu email: ");

    Clientes.push({
         nome:nome,
         idade:idade, 
         email:email });
}
infClientes()

function exibirClientes() {
    for (var i = 0; i < Clientes.length; i++) {
        console.log("------------------------------");
        console.log("Cliente " + (i + 1) + ":");
        console.log("Nome: " + Clientes[i].nome);
        console.log("Idade: " + Clientes[i].idade);
        console.log("Email: " + Clientes[i].email);
    }
}

    exibirClientes();
