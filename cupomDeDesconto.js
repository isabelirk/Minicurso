//cupom RANGOBARATO
//apenas das 12h as 13:59h (14h não pode)
//se tiver cupom e estiver dentro do horário, tem 10% de desconto
//se além disso, a compra for de 100 reais ou mais, o desconto é de 20%

function imprimirValorDoDesconto(valorDaCompra, hora, cupom){
  let valorDoDesconto;
  if(cupom === "RANGOBARATO"){
    if(hora >= 12 && hora < 14){
      if(valorDaCompra >= 100){
        valorDoDesconto = valorDaCompra * 20/100;
      }else{
        valorDoDesconto = valorDaCompra * 10/100;
      }
      console.log(`O valor do desconto é ${valorDoDesconto}`);
    }else{
      console.log("Este cupom não é válido neste horário!");
    }
  }else{
    console.log("Não possui nenhum cupom aplicável.");
  }
}

imprimirValorDoDesconto(150, 13, "RANGOBARATO");