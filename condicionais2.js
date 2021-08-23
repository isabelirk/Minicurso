const pessoa = {
  nome: "Isabeli",
  idade: 70,
  ehMaiorDeIdade: true,
  altura: 1.69
};

console.log(pessoa);

if(pessoa.idade < 18){
  console.log("Entrou no if.");
}else if(pessoa.idade < 60){
  console.log("Entrou no else if.");
}else{
  console.log("Entrou no else.");
}