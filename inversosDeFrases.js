// inversor de frases

const texto = "Eu gosto da Cubos Academy";

let palavra = "";
const novaFrase = [];

for(let i=0; i<texto.length; i++){
  //palavra += texto[i];
  //console.log(palavra);

  //não guarda a última palavra
  if(texto[i] === " "){
    console.log(palavra);
    novaFrase.push(palavra);
    palavra = "";
    continue;
  }
  palavra += texto[i];
}

novaFrase.push(palavra);
console.log(novaFrase);

const fraseInvertida = [];

for(let i = novaFrase.length - 1; i>=0; i--){
  fraseInvertida.push(novaFrase[i]);
}

console.log(fraseInvertida);