    const prompt = require('prompt-sync')()

        let hamburgueria = [];

    function exibirmenu(){
            console.log('\n Menu da hamburgueria');
            console.log('1 - Adicionar 🍔'); //CREATE
            console.log('2 - Listar 📋');    //READ
            console.log('3 - Alterar');   //UPDATE
            console.log('4 - Deletar 🗑');   //DELETE
            console.log('5 - Sair ❌');
}
// exibirmenu()

//Adicionar
    function adicionarHamburguer(){
    const nome = prompt('Nome do Hambúrguer: ');
    const preco = parseFloat(prompt('Preço do hamburguer: '));

                hamburgueria.push({nome, preco});

            console.log('Hambúrguer Adicionado com sucesso! ');
}

    function verHamburgueres(){
    if(hamburgueria.length === 0){
            console.log('Nehum Hambúrguer encontrado');
        return;
    }
            console.log('\n=== Lista de hambúrgueres ===');
   // for(let cont = 0; cont < hamburgueria.length; cont ++){
       // let hamburguer = hamburgueria[cont]
         //   console.log(`${cont +1} Nome: ${hamburguer.nome} , Preço: R$ ${hamburguer.preco}`)
   // }

    for(let i = 0; i < hamburgueria.length; i++){
        hamburgueria.forEach((hamburguer) => {
            console.log(`${i + 1} Nome: ${hamburguer.nome} preço R$ ${hamburguer.preco}`);
        });
    };
};
    function atualizarHamburguer(){
    verHamburgueres();
    const index = parseInt(prompt('Digite o número do hambúrguer que deseja atualizar: '));
    if(index  < 0 || index >= hamburgueria.length){
        
            console.log('Número inválido');
        return;
    ;
    };
const novoNome = prompt("Novo Nome: ");
const novoPreco =prompt("Novo Preço: ");

hamburgueria[index - 1] = {nome: novoNome, preco: novoPreco};
            console.log('Hambúrguer atualizado com sucesso!');
};
    function deletarHamburguer(){
    verHamburgueres();
    const index = parseInt(prompt('Digite o número do hambúrguer que deseja deletar: '));
    if(index < 0 || index >= hamburgueria.length){
            console.log('Número inválido');
        return;
    }
                hamburgueria.splice(index, 1);
            console.log('Hambúrguer deletado com sucesso!');
};
    function principal(){
    let opcao

do{
    exibirMenu();
        opçao = parseInt(prompt('Escolha uma opção: '));
        switch(opcao){
        case 1:
            adicionarHamburguer();
            break;
        case 2:
            verHamburgueres();
            break;
        case 3:
            atualizarHamburguer();
            break;
        case 4:
            deletarHamburguer();
            break;
        case 5:
            console.log('Saindo do programa...');
            break;
        default:
            console.log('Opção inválida, tente novamente.');
};
}while(opcao !== 5);
};
Principal();