//var nome = `saulo`
//let age, isHuman

//age = 26
//isHuman = true

//console.log(`Olá ${nome} você tem ${age} anos`);

//const person = {
   //name: 'Saulo' ,
  //  age: 25,
    //weight: 90,
  //  isAdmin: true
//}
//console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} kg e pesa muito`)

//const animals = [
//'Lion',
//"Monkey",
//{
   // nome: 'cat',
 //   age: '3'
//},
//isHuman,
//person
//]
//console.log(animals[2].nome)
//console.log(animals[4].name)
//let contador = 0
//while (contador < 18){
  //  console.log(contador)
    //contador++
//}


//var contador = 17

//while (contador > 0){
    
  //  console.log(contador)
//    contador--
//}

//let contador = 0
//while(contador < 10) {
  //console.log(contador)
  //if (contador === 5){
   // break
 // }
//contador++
//}
//console.log(`O laço foi quebrado e o contador parou com o valor ${contador}`)

//function contarRegressivamente(numero) {
  //while (numero >= 0) {
    //console.log(numero);
      //numero--;
  //}
//}

//let i = 0;
//while (i < 10){
  //console.log(i);
//  i++;
//}
 

//let num = Math.floor(Math.random() * 10) + 1;
//while (true){
  //let ress = parseInt(prompt( "Adivinhe o numero entre 1 e 10:"))
  //if(ress=== num){
    //alert("Parabens! Voce acertou o numero");
    //break
  //}else{
  //  alert( "tente novamente:");
  //}
//}


// Função para simular um caixa eletrônico
function caixaEletronico() {
  let saldo = 1000; // Saldo inicial de exemplo

  while (true) {
      // Exibe o menu de operações
      let escolha = prompt(`
      Bem-vindo ao Caixa Eletrônico!
      Escolha a operação desejada:
      1 - Verificar saldo
      2 - Depositar dinheiro
      3 - Sacar dinheiro
      4 - Sair
      `);

      // Converte a escolha para número inteiro
      escolha = parseInt(escolha);

      // Verifica a escolha do usuário
      switch (escolha) {
          case 1:
              alert(`Seu saldo atual é de R$ ${saldo.toFixed(2)}`);
              break;
          case 2:
              let deposito = parseFloat(prompt("Digite o valor que deseja depositar:"));
              if (isNaN(deposito) || deposito <= 0) {
                  alert("Valor de depósito inválido.");
              } else {
                  saldo += deposito;
                  alert(`Depósito de R$ ${deposito.toFixed(2)} realizado com sucesso.`);
              }
              break;
          case 3:
              let saque = parseFloat(prompt("Digite o valor que deseja sacar:"));
              if (isNaN(saque) || saque <= 0) {
                  alert("Valor de saque inválido.");
              } else if (saque > saldo) {
                  alert("Saldo insuficiente.");
              } else {
                  saldo -= saque;
                  alert(`Saque de R$ ${saque.toFixed(2)} realizado com sucesso.`);
              }
              break;
          case 4:
              alert("Obrigado por utilizar o Caixa Eletrônico. Volte sempre!");
              return; // Encerra a função caixaEletronico()
          default:
              alert("Opção inválida. Por favor, escolha uma opção válida.");
      }
  }
}

// Iniciar o caixa eletrônico
caixaEletronico();
