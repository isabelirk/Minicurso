//Verificar se lista tem o item "Banana"

const listaDeCompras = ["Arroz", "Feijão", "Banana", "Farinha"];

for(let item of listaDeCompras){
  console.log("Verificando item: " + item);
  if(item === "Banana"){
    console.log("Banana está na lista");
    break;
  }
}
