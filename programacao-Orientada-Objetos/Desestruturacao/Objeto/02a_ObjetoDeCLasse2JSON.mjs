
import {UmaClasse} from "./03a_umaClasse.mjs" 

let umObjetoDeClasse = new UmaClasse("um valor")

let json = JSON.stringify(umObjetoDeClasse); // entrega as propriedades visivéis por ele

console.log(json);// Os métodos não entram no json, somente as propriedades e valores associados a ele