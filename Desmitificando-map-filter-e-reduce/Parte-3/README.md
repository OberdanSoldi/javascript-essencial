#### Parte 2

```JavaScript
const pets = [
    {
        name: 'bolinha',
        type: 'dog',
        age: 15,
        weight: 30
    },
    {
        name: 'mingal',
        type: 'cat',
        age: 2,
        weight: 30
    },
    {
        name: 'marrom',
        type: 'cat',
        age: 1,
        weight: 30
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 30
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 1,
        weight: 30
    }
];
//map
//Retorna um novo array com a mesma quantidade de elementos que o array inicial 

const petNames = pets.map((pet) => {
    return pet.name
});

console.log(pets);
 
//Array.prototype.map()
//Chama o callback para cada elemento e devolve um novo array com a mesma quantidade de items
//var newArray = arr.map(callback[, thisArg])   
map([:cow:, :sweet_potato:, :chicken:, :corn:])
=> [:hamburger:, :fries:, :poultry_leg:, :popcorn:]
//
//
//Map
//Retornar o novo array com a mesma quantidade de elementos que o array inicial

const mapPetNames = pets.map((pet) => {
    return pet.name
});

console.log(mapPetNames)
//
//
//foreach
//Não retorna um novo array com a mesma quantidade de elementos
const forEachPetNames = pets.forEach((pet) => {
    return forEachPetNames.push(pet.name)
});





```