let nomeCompleto = ['Fábio','Cavadas', 'Ferreira'];
var [primeiroNome, nomeDomeio, ultimoNome] = nomeCompleto; // Associa as 3 váriaveis os tres elementos do Array

console.log("O primeiro nome é: "+primeiroNome);
console.log("O nome do meio é: "+nomeDomeio);
console.log("O último nome é: "+ultimoNome +'\n');

//tirando o primeiro elemento do array, os '...' significa que o restante dos elementos serão adds na varivel 'restante'
var [primeiroNome, ...restante] = nomeCompleto
console.log("O primeiro nome é: "+primeiroNome);
console.log("O restante do nome é: \"" +restante.toString().replace(',', ' ')+'"' +'\n'); // Aqui será exibido os elementos atribuidos a váriaveis nomeDomeio e ultimoNome 


//Desetruturando o array descartando o segundo elemento
var [soOPrimeiroNome, , soOUltimoNome] = nomeCompleto
console.log("O primeiro nome é: "+soOPrimeiroNome);
console.log("O último nome é: " +soOUltimoNome);

//Desestruturação de arrays vem apartir de declarações das variáveis presas dentro de operadores de colchetes e associadas a elementos do array