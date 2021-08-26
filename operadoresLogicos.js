// operadores lógicos

const pessoa = {
  nome: "Isabeli",
  idade: 7,
  altura: 1.39,
  temPassaporte: false
};

// para brincar no brinqueado é preciso:
// ter idade mínima = 12
// ter altura mínima = 1.40

// && E
// || OU
// ! NEGAÇÃO

if (pessoa.idade > 12 && pessoa.altura > 1.40){
  console.log(`${pessoa.nome} pode brincar!`);
}else{
  console.log(`${pessoa.nome} não pode brincar!`)
}

if(!pessoa.temPassaporte){
  //vai entrar no if quando não tem passaporte
  console.log("BARRADO!");
}