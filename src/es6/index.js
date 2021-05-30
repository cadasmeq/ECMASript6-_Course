function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || '32';
    var country = country || 'MX';
    console.log(name, age, coutry);
}

// ec6
function newFunction2(name='oscar', age=32, country='MX'){
    console.log(name, age, country);    
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');

// template literals
let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' +world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = 'Lorem ipsum dolor sit amet, consectetur \n'
+ "Otra frase epica"

// Template literals multiple lineas
let lorem2 = `Otra frase epica que necesitamos 
Ahora es otra frase epica.
`;

console.log(lorem)
console.log(lorem2)

let person = {
    'name': 'oscar',
    'age': 18,
    'country': 'MX'
}

console.log(person.name, person.age, person.country)

// Destructurando elemento
let { name, age, country } = person;
console.log(name, age, country);

// Propagacion de elementos
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2]
console.log(education);


// LET para trabajar elementos en memoria disponible solo en el scope que sera llamado
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

// CONST variables constantes
const a = 'b';
a = 'a';
console.log(a);

let name = 'Oscar';
let age = 32;

// ES5
obj = { name: name, age: age };
console.log(obj);
// ES6
obj2 = { name, age }; 
console.log(obj2);


const names = [
    {name: 'Oscar', age: 32 },
    {name: 'Yesica', age: 12 }
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

// Arrow Function
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;
console.log(square(5))

// Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Its ok!')
        } else {
            reject('Ups!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('This will be after the promise'))
    .catch(error => console.log(error));