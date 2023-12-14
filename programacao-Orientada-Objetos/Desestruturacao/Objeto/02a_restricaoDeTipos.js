//Trabalhando com objeto Date, serealizado como String, não desserializado automaticamente
// utilizar a função reviver que é um dos paramentros da funçaõ JSON.parse

var json = '{"name": "Fábio Cavadas", "birth": "2024-05-10T12:00:00.000Z", "city":"Rio de Janeiro"}' 

var obj = JSON.parse(json, function(key, value){
    if(key == "birth"){ // verifica se a chave passada é birth
        return new Date(value); // pega o valor e cria um objeto do tipo Date dentro da váriavel obj
    }
    return value;
});

console.log("Nome: "+ obj.name);
console.log("birth: "+ obj.birth);