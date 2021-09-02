//que dia da semana será daqui a x dias?
//PS: hoje é domingo

// domingos: multiplos de 7
// segunda: é resto 1 da divisão por 7
// terça: é resto 2 da divisão por 7

function diaDaSemana(dias){
  const resto = dias % 7;

  if(resto == 0){
    console.log("Domingo");
  }else if(resto == 1){
    console.log("Segunda");
  }else if(resto == 2){
    console.log("Terça");
  }else if(resto == 3){
    console.log("Quarta");
  }else if(resto == 4){
    console.log("Quinta");
  }else if(resto == 5){
    console.log("Sexta");
  }else if(resto == 6){
    console.log("Sábado");
  }
}

diaDaSemana(15);