//Forma mais comum para criacao de objetos
const pessoa = {
  nome: "Enzo",
  idade: 20,
  cidade: "Maringa",
};

//Forma menos comum, mas possivel
const carro = new Object();
carro.marca = "Toyota";
carro.modelo = "Supra";
carro.ano = 1994;

//notacao usando "."
console.log(pessoa.nome);
//notacao usando "[]"
console.log(pessoa["nome"]);

//modificar objeto apos sua declaracao
pessoa.nome = "Carlos"; // Modifica
pessoa.profissao = "Engenheiro"; // Adiciona
console.log(pessoa);

//delete usado para remover propriedade do objeto
delete pessoa.cidade;
console.log(pessoa);
