const pessoa = {
  nome: "Enzo",
  idade: 20,
  cidade: "Maringa",
};

/*
  in
  Verifica se a propriedade existe em qualquer nível da cadeia de protótipos.
  Funciona tanto para propriedades próprias quanto herdadas.
  */
console.log("idade" in pessoa);

/*
  hasOwnProperty
  Verifica apenas se a propriedade pertence diretamente ao objeto, sem olhar para o protótipo.
  Se a propriedade estiver herdada, retorna false.
   */
console.log(pessoa.hasOwnProperty("nome"));
