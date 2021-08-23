// objetos - conjunto de variáveis

const pessoa = {
  nome: "Isabeli",
  idade: 26,
  ehMaiorDeIdade: true,
  altura: 1.69
};

console.log(pessoa);

if(pessoa.idade >= 18){
  console.log("É maior de idade.");
}else{
  console.log("É menor de idade.");
}

//comparadores
// >= 
// <=
// >
// <
// == (verifica só o conteudo)
// !=
//Comparadores de identidade
// === (também verifica o conteudo e tipo)
// !==

if(pessoa.idade < 18){
  console.log("Entrou no if.");
}else{
  console.log("Entrou no else.");
}