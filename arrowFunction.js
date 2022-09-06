/* //Arrow Function => (sintaxe)

const helloWorld = function(){
    return "hello World";
}

// ->

const helloWorld = () => {
    return "hello World";
}

// ->

const helloWorld = () => "hello World";

*/

/* 

//Caso a função tenha apenas uma linha, é possível dispensar as chaves e o return

const soma =(a,b) => a+b;
soma(4,6); //10

//Caso exista apenas um parametro, pode dispensar parenteses

const soma = a => a;
soma(4); //4

//arrow function não faz hoisting e deve ser declarada sempre antes da função ser chamada (função normal, sem arrow, faz hoisting)

//outras restrições:

// this é global, call apply e bind não não funcioname em arrow function

// não axiste o objeto arguments (que reune os argumentos de um objeto especifico em uma lista) para 

// não pode usar metodo construtur (new MeuObjeto()) em arrow function

*/