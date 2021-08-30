//filtrar elementos que começam com a letra "a"

const resultado = [];

//coloca no final
resultado.push("Mandioca");
console.log(resultado);
//tira do final
resultado.pop();
console.log(resultado);

const lista = ["Arroz", "Batata", "amora"];

for(let item of lista){
  //toda string pode ser trabalhada como sendo um array
  if(item[0] === "A" || item[0] === "a"){
    resultado.push(item);
  }
}

console.log(resultado);