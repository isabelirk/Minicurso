// problem do código arrobash

function solucao(textoCodificado){

  const dicionario={
    "###": "C",
    "##@": "U",
    "#@#": "B",
    "@##": "D",
    "@#@": "E",
    "#@@": "A",
    "@@@": "Y",
    "@@#": "M",
  };

  for (i=0; i<textoCodificado.length; i+=3){
    pedaco = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];
    resposta += dicionario[pedaco];
  }
  console.log(resposta);
}

solucao("#@@####@@@##@#@@@#@@@");