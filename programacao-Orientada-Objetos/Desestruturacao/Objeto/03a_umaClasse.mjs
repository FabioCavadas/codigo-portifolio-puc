export class UmaClasse{
    #_umAtributo //Declaração de atributo Privado
    outroAtributo = "atributo dois" //Declaração de atributo Publico
    constructor(n){
        this.#_umAtributo = n
    }
    capturaPrimeiroAtributo (){
        return this.#_umAtributo
    }
}