// atv 1
// 1 - crie uma função que recebe o array alunos e um numero que irá representar a média final
// 2 - Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais a media final;
// 3 - utilize a técnica "object destructing" para manipular as propriedades desejadas de cada aluno. 

/*const alunos = [ //array de objetos alunos
    {
        nome: "Arthur",
        nota: 10,
        turma: "A",
    },

    {
        nome: "Leo",
        nota: 6,
        turma: "A",
    },

    {
        nome: "Aiman",
        nota: 3,
        turma: "A",
    },
]


function alunosAprovados(arr, media){       //1 - função criada, recebe array e representa media
    let aprovados = [];                     //2 - novo array auxiliar, criado fora do array para evitar criar varios array dentro do loop

    

    for (let i = 0; i <arr.length; i++){    //2 - percorre o array 
        const {nota,nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos,5))
*/




// atv 2
// dada a função calculaIdade, utilize os metodos call e apply para mudar o valor the this. Crie seus próprios objetos para esta atividade

/*

function calculaIdade(anos){
    return `daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

*/

function calculaIdade(anos){
    return `daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 ={
    nome:"Maria",
    idade: 30,
}

const pessoa2 ={
    nome:"Juliana",
    idade: 22,
}

const animal ={
    nome:"Fiona",
    idade: 5,
    raca: "pug",
}

//console.log(calculaIdade.call(pessoa2,30));
console.log(calculaIdade.apply(pessoa2,[30]));
