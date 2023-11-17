let convenio = document.getElementById('convenio')
let desconto = document.getElementById('desconto');
let pagar = document.getElementById('aPagar');


function mostrarSelect() {
    convenio.style.visibility='visible';  
}  


function calcularDesconto () {
    let valor = document.getElementById('valor').value;
    let conv = document.getElementById('conv');
    let desc = 0
    
    if(conv.value == 'AA') {
      desc = (valor *0.2).toFixed(2)
      desconto.innerHTML = `Desconto: R$ ${desc}`
      
    } else if (conv.value =='SA'){
      desc = (valor *0.5).toFixed(2)
      desconto.innerHTML = `Desconto: R$ ${desc}`
       
      
    }else {
      desc = (valor * 0.1).toFixed(2)
      desconto.innerHTML = `Desconto: R$ ${desc}`
    }
    pag = (valor - desc).toFixed(2)
    pagar.innerHTML = `A Pagar: R$ ${pag}`
      
  }

