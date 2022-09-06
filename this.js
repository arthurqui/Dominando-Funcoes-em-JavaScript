/* //This -> retorna o valor dentro do metodo (objeto)

const pessoa ={
    firstName: "Arthur",
    lastName : "Quintanilha",
    id:      : 1,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

pessoa.fullName();
//Arthur Quintanilha

pessoa.getId();
// 1

*/

/* //no evento HTML

<!DOCTYPE html>
<html lang ="en">
    <head>
        <title>HTML</title>
    </head>

    <body>
        <button
            id = "my-btn"
            onclick ="console.log(this)">Clique aqui!</button>
    </body>
</html>

*/

//manipulando valores de this

/* //call 

const pessoa ={
    nome: 'Arthur',
}

const animal ={
    nome: 'Bill',
}

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa); //Arthur
getSomething.call(animal); //Bill

*/

/*

const myObj ={
    num1:2,
    num2:4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj,1,5) //2 parametros (argumentos) que vem do objeto e os outros dois são declarados na função
// 12 (2 + 4 + 1 + 5)

*/

/* //Apply -> muito parecido com o call, mas tem uma diferença

const pessoa = {
    nome: 'Arthur',
}

const animal = {
    nome: 'Bill',
}

function getSomething(){
    console.log(this.nome);
}

getSomething.aply(pessoa); //Arthur
getSomething.aply(animal); //Bill

//Diferença:

const myObj ={
    num1:2,
    num2:4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj,[1,5]) //2 argumentos do apply (declarados nos parametros da função) precisam vir dentro de um array
// 12 (2 + 4 + 1 + 5)

*/

/* //Bind -> clona a estrutura da função onde foi chamado e aplica o valor do objeto passado como parâmetro

const retornaNomes = function(){
    return this.nome;
};

let arthur = retornaNomes bind({nome:'Arthur'});

arthur(); //Como é um clone de função, precisa ser chamada como função (variavel + parenteses)
//Arthur

*/