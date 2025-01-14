const pessoa = {
  nome: "Enzo",
  idade: 20,
  cidade: "Maringa",
};

//for...in | Percorre todas as propriedades enumeráveis de um objeto
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

//Object.keys | Retorna um array com as chaves do objeto
console.log(Object.keys(pessoa));

//Object.values | Retorna um array com os valores do objeto
console.log(Object.values(pessoa));

//Object.entries | Retorna um array de arrays, onde cada item é um par [chave, valor]
console.log(Object.entries(pessoa));
