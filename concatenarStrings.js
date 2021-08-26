const pessoa = {
  nome: "Isabeli",
  idade: 70,
  ehMaiorDeIdade: true,
  altura: 1.69
};

console.log(pessoa);

let texto = pessoa.nome + " tem " + pessoa.idade + " anos.";
console.log(texto;)

if(pessoa.idade < 18){
  console.log(pessoa.nome + "é menor de idade.");
}else if(pessoa.idade < 60){
  console.log(`${pessoa.nome} é adulta.`);
}else{
  console.log(`${pessoa.nome} é um idoso de ${pessoa.idade} anos`);
}