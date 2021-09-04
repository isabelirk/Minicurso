const pessoas=[ //objeto ---- lista
  { //item
    nome: "Isabeli", //propriedade
    idade: 26
  },
    {
    nome: "Maria",
    idade: 16
  },
    {
    nome: "Pedro",
    idade: 18
  },
];

function criarRelatorio(lista){
  let maiores = 0;
  let menores = 0;

  for(let item of lista){
    const idade = item.idade;

    if(idade >= 18){
      maiores++;
    }else{
      menores++;
    }
  }
  console.log(maiores);

  const resposta={ //objeto
    qtdMaiores: maiores,
    qtdMenores: menores,
    percMaiores: maiores/pessoas.length, //percentual
    percMenores: menores/pessoas.length
  };

  console.log(resposta);
}

criarRelatorio(pessoas);