/** if else 

function numeroPositivo(num){
    let resultado;

    if (num < 0){
        resultado = false;
    } else {
        resultado = trule;
    }

    return resultado;
}

numeroPositivo(2); // true

mumeroPositivo (-9); // false

*/


/* Switch / case

function getAnimal(id){

    switch(id){
        case 1:
            return "Cão";
        case 2:
            return "Gato";
        case 3:
            return "Passaro";
        default: 
            return "Peixe";
    }
}

getAnimal(1)//cao
getAnimal(4)//peixe
getAnimal("a")//peixe

*/

/*For

//ex 1 (for classico)
function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i <arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados;
}

const meusNumeros = [2,33,456,356,40];

multiplicaPorDois(meusNumeros);

//ex 2 (for in)

Function forInExemplo(obj){
    for(prop in obj){
        console.log(prop); 
    }
}

const meuObjeto = {
    nome: "Arthur", idade: "27", cidade:"SJC"
}

forInExemplo(meuObjeto); // nome idade cidade

//ex 3 (for in)

Function forInExemplo(obj){
    for(prop in obj){
        console.log(obj[prop]); 
    }
}

const meuObjeto = {
    nome: "Arthur", idade: "27", cidade:"SJC"
}

forInExemplo(meuObjeto); // Arthur 27 SJC

//ex 4 (for of)

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacate";

logLetras(palavra) // a b a c a t e

//ex 5 (for of)

function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}

const nums = [30,20,233,2];

logLetras(nums) // 30 20 233 2

*/

/* while

function exemploWhile(){
    let num = 0;

    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile(); //0 1 2 3 4 5

//do while 

function exemploDoWhile(){
    let num = 0;

    do {
        console.log(num);
        num++;
    } while (num <= 5)
}

exemploDoWhile(); // 0 1 2 3 4 5 

*/
