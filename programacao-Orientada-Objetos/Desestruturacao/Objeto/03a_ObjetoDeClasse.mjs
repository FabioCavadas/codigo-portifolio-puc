import {UmaClasse} from "./03a_umaClasse.mjs" 

let umaClasse = new UmaClasse("Primeiro atributo")

let {capturaPrimeiroAtributo: umAtributo, 
    outroAtributo} = umaClasse;

console.log("um atributo: "+ umAtributo) // o que retorna de forma desestruturada é a função 'capturaPrimeiroAtributo' e não o resultado dela
console.log("um atributo: "+outroAtributo) // Retorna o valor do atributo 'outroAtributo' 