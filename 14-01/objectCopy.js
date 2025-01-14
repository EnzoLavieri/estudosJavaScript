const pessoa = {
  nome: "Enzo",
  idade: 20,
  cidade: "Maringa",
};

/*
  Object.assign 
  Usar quando:
  Precisar copiar um objeto e manter seu protótipo.
  Precisar mesclar múltiplos objetos em um só.
  */
const copiaPessoa = Object.assign({}, pessoa);

/*
  "..." 
  Usar quando:
  Quando quiser copiar objetos de forma mais simples e legível.
  Quando precisar copiar apenas os valores, ignorando o protótipo.
  Quando estiver trabalhando com React e estados, pois é mais comum na sintaxe moderna.
  */
const copiaPessoa2 = { ...pessoa };

console.log(copiaPessoa);
console.log(copiaPessoa2);
