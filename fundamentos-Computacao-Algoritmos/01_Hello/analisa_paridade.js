/**
 * Aplicando conceitos abordados em aula
 * utilização de função
 * Declaração de variáveis do tipo let
 * utilzação de comando de repetiçao for e comando de seleção if & else  
 */

function analisa_paridade(){
    for(let i=0; i<= 10; i++){
        if(i%2==0)
            console.log(i+ ": Numero Par")
        else
        console.log(i+ ": Numero Impar")
    }
}

analisa_paridade(10)