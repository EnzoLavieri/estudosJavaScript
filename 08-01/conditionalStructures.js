/*
IF: Executa o bloco de código se a condição for verdadeira.
ELSE IF: Testa outra condição se a anterior for falsa.
ELSE: Executa o bloco de código se todas as condições anteriores falharem.
*/
let idade1 = 11;
if (idade1 >= 18) {
  console.log("Voce é maior de idade");
} else if (idade1 >= 12) {
  console.log("Voce é adolecente ");
} else {
  console.log("Voce é crianca ");
}

/*
SWITCH: Compara uma expressão com vários casos e executa o bloco correspondente 
ao caso que bater com o valor da expressão.
*/
let cor = "d";
switch (cor) {
  case "azul":
    console.log("A cor é azul");
    break;
  case "vermelho":
    console.log("A cor é vermelho");
    break;
  case "preto":
    console.log("A cor é preto");
    break;
  case "verde":
    console.log("A cor é verde");
    break;
  default:
    console.log("Cor não disponivel ou invalida");
}
