/* //Objeto "Arguments"

    function findMax(){

        let max = -Infinity;

        for (let i=0; i <arguments.length;i++){
            if (arguments [i] > max) {
                max = arguments [i];
            }
        }

        return max;
    }

    console.log(findMax(1,2,3,6,90,1));

    function showArgs(){
        return arguments;
    }

    console.log(showArgs(1,2,[1,2,3],"string"));

*/

/* //Arrays

//spread

function sum(x,y,z){
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));

//Rest

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho() //0
confereTamanho(11,12) //2
confereTamanho(1,23,123) //3

//Object destructuring

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName:{
        firstName:'John',
        lastName:'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName:{firstName:first,lastName:last}}){
    return `${first} ${last}`;
}

userId(user) //42
getFullName(user) //John Doe


*/